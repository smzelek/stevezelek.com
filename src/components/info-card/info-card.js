import { h } from 'preact';
import './info-card.scss';

export default function InfoCard() {
    return (
        <div className="info-card">
            <div className="collapsible-spacer"></div>
            <div className="text">
                <h3>
                    {this.props.header}
                </h3>
                {this.props.paragraphs.map((paragraph, i) =>
                    <p key={i}>{paragraph}</p>
                )}
            </div>
            <div className="collapsible-spacer">
            </div>
            <div className="img-wrapper">
                <picture>
                    <source srcSet={this.props.webpPaths}
                        type="image/webp" />
                    <source srcSet={this.props.jpegPaths}
                        type="image/jpeg" />
                    <img src={this.props.jpegFallback} type="image/jpeg" alt={this.props.imgAltText} />
                </picture>
            </div>
            <div className="collapsible-spacer"></div>
        </div>
    );
}
