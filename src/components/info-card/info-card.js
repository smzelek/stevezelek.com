import React, { Component } from 'react';
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
                    <img src={this.props.imgPath} alt={this.props.imgAltText}/>
                </div>
                <div className="collapsible-spacer"></div>
            </div>
        );
    }
}

export default InfoCard;
