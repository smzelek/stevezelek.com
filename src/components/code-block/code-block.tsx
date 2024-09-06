import { Fragment, h, JSX } from 'preact';
import './code-block.scss';
import Prism from 'prismjs';
import { useEffect } from 'preact/hooks';

interface CodeBlockProps {
    title: string;
    language: 'html' | 'tsx';
    showLines: boolean;
    content: string;
    caption?: string | JSX.Element | (string | JSX.Element)[];
}

export default function CodeBlock({ title, caption, content, showLines, language }: CodeBlockProps): JSX.Element {
    useEffect(() => {
        Prism.highlightAll()
    }, []);

    const srcCodePadding = (() => {
        const firstPaddedLine = content.split('\n').find((s) => s[0] == ' ') ?? '';
        let c = 0;
        while (firstPaddedLine[c] === ' ') {
            c++;
        }
        return c;
    })();

    const trimmedContent = content
        .split('\n')
        .map((s, i) => {
            return (i === 0 && s.trim() === '') ? null : s.substring(srcCodePadding);
        })
        .filter(s => s !== null)
        .join('\n');

    const renderCaption = (() => {
        if (!caption) {
            return null;
        }
        return (<Fragment>
            {typeof caption === 'string' ? (
                <p className="caption" dangerouslySetInnerHTML={{ __html: caption }}>
                </p>
            ) : (<p className="caption">
                {caption}
            </p>)}
        </Fragment>);
    })();

    return (
        <div className={`code-block ${caption ? 'has-caption' : ''}`}>
            <span className="title">{title}</span>
            <pre className={`${showLines ? 'line-numbers' : ''}`}>
                <code className={`language-${language}`}>
                    {trimmedContent}
                </code>
            </pre>
            {renderCaption}
        </div>
    );
}
