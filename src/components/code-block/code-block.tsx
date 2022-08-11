import { h, JSX } from 'preact';
import './code-block.scss';

interface CodeBlockProps {
    title: string;
    children: string | JSX.Element | (string | JSX.Element)[];
    caption?: string | JSX.Element | (string | JSX.Element)[];
}

export default function CodeBlock({ title, caption, children }: CodeBlockProps) {
    return (
        <div className={`code-block ${caption ? 'has-caption' : ''}`}>
            <span className="title">{title}</span>
            {children}
            {caption && (
                <p className="caption">
                    {caption}
                </p>
            )}
        </div>
    );
}