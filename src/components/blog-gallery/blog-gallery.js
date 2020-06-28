import React, { Component } from 'react';
import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MobileServiceFactory } from '../../services/mobile.service';
import './blog-gallery.scss';
const construction = '../../assets/construction.svg';

class BlogGallery extends Component {
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
            <div className={`blog-gallery ${this.state.isMobile ? 'mobile' : ''}`}>
                <header>
                    <h2 className="title">blog</h2>
                </header>
                <main>
                    <img src={construction} alt="Construction tools."/>
                    <h3>Coming Soon</h3>
                </main>
            </div>
        );
    }
}

export default BlogGallery;
