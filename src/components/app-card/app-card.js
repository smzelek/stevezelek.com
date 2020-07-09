import { h, Component } from 'preact';
import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MobileServiceFactory } from '../../services/mobile.service';
import './app-card.scss';

class AppCard extends Component {
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
            <a className={`app-card ${this.state.isMobile ? 'mobile' : ''}`} href={this.props.url}>
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
}

export default AppCard;
