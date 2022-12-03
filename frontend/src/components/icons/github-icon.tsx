import { h } from 'preact';
import './icons.scss';
const github = '/assets/icons/github.png';

export default function Github(): JSX.Element {
    return (
        <a href="https://github.com/smzelek" className="icon github">
            <img src={github} style="filter: invert(1);" alt="Steve Zelek's Github" />
        </a>
    );
}
