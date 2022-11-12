import { h } from 'preact';
import './typing.scss';

export default function Typing({ done, text }: { done: boolean; text: string }): JSX.Element {
    return (
        <span className={`typing ${done ? 'done' : ''}`}>
            <span class="dots">
                <span class="dot-1">.</span>
                <span class="dot-2">.</span>
                <span class="dot-3">.</span>
            </span>
            <span className="typed">
                {text}
            </span>
        </span>
    )
}