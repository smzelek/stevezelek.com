import React, { Component } from 'react';
import { ReplaySubject } from 'rxjs';
import { takeUntil, distinctUntilChanged } from 'rxjs/operators';
import { MobileServiceFactory } from './services/mobile.service';
import './app.scss';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Sidebar from './components/sidebar/sidebar';
import AboutMe from './components/about-me/about-me';
import AppsGallery from './components/apps-gallery/apps-gallery';
import BlogGallery from './components/blog-gallery/blog-gallery';
import TicMetacToe from './components/tic-metac-toe/tic-metac-toe';

class App extends Component {

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
                <HashRouter>
                    <Sidebar></Sidebar>
                    <Switch>
                        <Route exact path='/' component={AboutMe} />
                        <Route exact path='/apps' component={AppsGallery} />
                        <Route exact path='/blog' component={BlogGallery} />
                        <Route exact path='/apps/tic-metac-toe' component={TicMetacToe} />
                    </Switch>
                </HashRouter>
            </div>
        )
    }
};

export default App;