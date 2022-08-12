import { h, JSX } from 'preact';
import './info-card.scss';

interface InfoCardProps {
    header: string;
    paragraphs: string[];
    webpPaths: string;
    jpegPaths: string;
    jpegFallback: string;
    imgAltText: string;
}

export default function InfoCard(props: InfoCardProps): JSX.Element: JSX.Element {
    return (
        <div className="info-card">
            <div className="collapsible-spacer" />
            <div className="text">
                <h3>
                    {props.header}
                </h3>
                {props.paragraphs.map((paragraph, i) =>
                    <p key={i}>{paragraph}</p>
                )}
            </div>
            <div className="collapsible-spacer" />
            <div className="img-wrapper">
                <picture>
                    <source srcSet={props.webpPaths}
                        type="image/webp" />
                    <source srcSet={props.jpegPaths}
                        type="image/jpeg" />
                    <img src={props.jpegFallback} type="image/jpeg" alt={props.imgAltText} />
                </picture>
            </div>
            <div className="collapsible-spacer" />
        </div>
    );
}
