import { h, JSX } from 'preact';
import './icons.scss';
const twitter = '/assets/icons/twitter.svg';

export default function TwitterIcon(): JSX.Element {
    return (
        <a href="https://twitter.com/smzelek/" className="icon twitter">
            <img src={twitter} alt="Steve Zelek's Twitter" />
        </a>
    );
}
