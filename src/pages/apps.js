import { h, Component, render } from 'preact';
import { ReplaySubject } from 'rxjs';
import { takeUntil, distinctUntilChanged } from 'rxjs/operators';
import { MobileServiceFactory } from '../services/mobile.service';
import Sidebar from '../components/sidebar/sidebar';
import AppCard from '../components/app-card/app-card';
import '../global.scss';
import './apps.scss';
const tictactoe = './assets/icons/times.svg';

class Apps extends Component {

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
                <div className={`apps-gallery ${this.state.isMobile ? 'mobile' : ''}`}>
                    <header>
                        <h2 className="title">apps</h2>
                    </header>
                    <main>
                        <AppCard header="tic-metac-toe"
                            paragraphs={['A meta variant of tic-tac-toe featuring 9 boards and special rules.']}
                            imgPath={tictactoe}
                            url="/apps/tic-metac-toe"
                            imgAltText="An X used in the game of tic-tac-toe.">
                        </AppCard>
                    </main>
                </div>
            </div>
        )
    }
};


render(
    <Apps />,
    document.body
);
