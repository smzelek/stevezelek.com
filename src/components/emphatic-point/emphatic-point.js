import { h } from 'preact';
import './emphatic-point.scss';

export default function EmphaticPoint(props) {
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
