import { h, Component } from 'preact';
import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MobileServiceFactory } from '../../services/mobile.service';
import './info-card.scss';

class InfoCard extends Component {
    isDestroyed$ = new ReplaySubject(1);
    mobileService = MobileServiceFactory.getInstance();

    constructor(props) {
        super(props);
        this.state = {
            isMobile: false,
        };
    }

    isDestroyed$ = new ReplaySubject(1);
    mobileService = MobileServiceFactory.getInstance();

    componentDidMount() {
        this.mobileService.isMobile()
            .pipe(takeUntil(this.isDestroyed$))
            .subscribe((isMobile) => {
                this.setState({
                    ...this.state,
                    isMobile: isMobile
                })
            });
    }

    componentWillUnmount() {
        this.isDestroyed$.next();
        this.isDestroyed$.complete();
    }

    render() {
        return (
            <div className={`info-card ${this.state.isMobile ? 'mobile' : ''}`}>
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
}

export default InfoCard;
