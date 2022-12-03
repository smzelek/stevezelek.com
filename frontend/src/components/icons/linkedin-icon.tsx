import { h } from 'preact';
import './icons.scss';
const linkedin = '/assets/icons/linkedin.svg';

export default function LinkedIn(): JSX.Element {
    return (
        <a href="https://www.linkedin.com/in/steve-zelek-022903107/" className="icon linkedin">
            <img src={linkedin} alt="Steve Zelek's LinkedIn" />
        </a>
    );
}
