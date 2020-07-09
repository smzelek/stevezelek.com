import { h, Component, render } from 'preact';
import { ReplaySubject } from 'rxjs';
import { takeUntil, distinctUntilChanged } from 'rxjs/operators';
import { MobileServiceFactory } from '../services/mobile.service';
import Sidebar from '../components/sidebar/sidebar';
import AboutMe from '../components/about-me/about-me';
import '../global.scss';

class Bio extends Component {

    isDestroyed$ = new ReplaySubject(1);
    mobileService = MobileServiceFactory.getInstance();

    constructor(props) {
        super(props);
        this.state = {
            isMobile: false,
        };
    }

    componentDidMount() {
        this.mobileService.isMobile()
            .pipe(
                takeUntil(this.isDestroyed$),
                distinctUntilChanged()
            )
            .subscribe((isMobile) => {
                this.setState({
                    ...this.state,
                    isMobile: isMobile,
                });
            });
    }

    componentWillUnmount() {
        this.isDestroyed$.next();
        this.isDestroyed$.complete();
    }

    render() {
        return (
            <div className={`layout ${this.state.isMobile ? 'mobile' : ''}`}>
                <Sidebar></Sidebar>
                <AboutMe></AboutMe>
                {/* <Switch>
                    <Route exact path='/' component={AboutMe} />
                    <Route exact path='/apps' component={AppsGallery} />
                    <Route exact path='/blog' component={BlogGallery} />
                    <Route exact path='/blog/why-our-company-needed-web-components' component={WhyOurCompanyWCs} />
                    <Route exact path='/apps/tic-metac-toe' component={TicMetacToe} />
                </Switch> */}
            </div>
        )
    }
};

render(<Bio />, document.body);
