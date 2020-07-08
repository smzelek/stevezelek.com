import React, { Component } from 'react';
import { render } from "react-dom";
import { ReplaySubject } from 'rxjs';
import { takeUntil, distinctUntilChanged } from 'rxjs/operators';
import { MobileServiceFactory } from '../services/mobile.service';
import Sidebar from '../components/sidebar/sidebar';
import '../global.scss';
import './tic-metac-toe.scss';

class TicMetacToe extends Component {

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
                <div className={`tic-tac-toe`}>
                    <iframe src="https://tic-metac-toe.stevezelek.com"></iframe>
                </div>
            </div>
        )
    }
};


render(
    <React.StrictMode>
        <TicMetacToe />
    </React.StrictMode>,
    document.getElementById("root")
);
