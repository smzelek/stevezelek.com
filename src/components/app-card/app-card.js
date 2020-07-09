import { h } from 'preact';
import './app-card.scss';

export default function AppCard() {
    return (
        <a className="app-card" href={this.props.url}>
            <div className="img-wrapper">
                <img src={this.props.imgPath} alt={this.props.imgAltText} />
            </div>
            <h3>
                {this.props.header}
            </h3>
            {this.props.paragraphs.map((paragraph, i) =>
                <p key={i}>{paragraph}</p>
            )}
        </a>
    );
}
