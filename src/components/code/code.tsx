import { h, JSX } from 'preact';
import './code.scss';

export default function Code({ children }: { children: JSX.Element | string }): JSX.Element {
    return (
        <code className="code">{children}</code>
    )
}