import React, { Component } from 'react';
import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MobileServiceFactory } from '../../services/mobile.service';
import './apps-gallery.scss';
import AppCard from '../app-card/app-card';
const tictactoe = '../../assets/times.svg';

class AppsGallery extends Component {
    isDestroyed$ = new ReplaySubject(1);
    mobileService = MobileServiceFactory.getInstance();

    constructor(props) {
        super(props);
        this.state = {
            isMobile: false,
        };
    }

    componentWillMount() {
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
            <div className={`apps-gallery ${this.state.isMobile ? 'mobile' : ''}`}>
                <header>
                    <h2 className="title">apps</h2>
                </header>
                <main>
                    <AppCard header="tic-metac-toe"
                        paragraphs={['A meta variant of tic-tac-toe featuring 9 boards and special rules.']}
                        imgPath={tictactoe}
                        imgAltText="">
                    </AppCard>
                </main>
            </div>
        );
    }
}

export default AppsGallery;
