import { h, JSX } from 'preact';
import './tag.scss';

export const TAGS = {
    teamwork: {
        background: "#2b833f",
        color: "#ffffff"
    },
    devops: {
        background: "#532c91",
        color: "#ffffff"
    },
    frontend: {
        background: "#007bb6",
        color: "#ffffff"
    },
    design: {
        background: "#b23675",
        color: "#ffffff"
    },
    backend: {
        background: "#c94321",
        color: "#ffffff"
    }
} as const;

export default function Tag({ name }: { name: keyof typeof TAGS }): JSX.Element {
    return (
        <li className="my-tag" style={TAGS[name]}>{name}</li>
    );
}
