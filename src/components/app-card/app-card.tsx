import { h } from 'preact';
import './app-card.scss';

interface AppCardProps {
    url: string;
    imgPath: string;
    header: string;
    paragraphs: string[];
}
export default function AppCard(props: AppCardProps) {
    return (
        <a className="app-card" href={props.url}>
            <div className="img-wrapper">
                <img src={props.imgPath} />
            </div>
            <h3>
                {props.header}
            </h3>
            {props.paragraphs.map((paragraph, i) =>
                <p key={i}>{paragraph}</p>
            )}
        </a>
    );
}
