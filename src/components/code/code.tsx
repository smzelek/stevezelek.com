import { h, JSX } from 'preact';
import './code.scss';
import Prism from 'prismjs';
import { useEffect } from 'preact/hooks';

export default function Code({ children }: { children: JSX.Element | string }): JSX.Element {
    useEffect(() => {
        Prism.highlightAll()
    }, []);

    return (
        <code className="code">{children}</code>
    )
}