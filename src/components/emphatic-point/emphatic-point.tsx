import { h } from 'preact';
import './emphatic-point.scss';

interface EmphaticPoint {
    icon?: string;
    title?: string;
    content: string;
}

export default function EmphaticPoint(props: EmphaticPoint) {
    return (
        <blockquote class="emphatic-point">
            <p class="title">
                <span class="icon">{props.icon}</span>
                {props.title}
            </p>
            <p class="content">
                {props.content}
            </p>
        </blockquote>
    );
}
