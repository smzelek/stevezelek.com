import React, { Component } from 'react';
import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MobileServiceFactory } from '../../services/mobile.service';
import './contact-card.scss';

class ContactCard extends Component {
    isDestroyed$ = new ReplaySubject(1);
    mobileService = MobileServiceFactory.getInstance();

    constructor(props) {
        super(props);
        this.state = {
            isMobile: false,
            wasMessageSent: false
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

    sentMessage() {
        this.setState({
            ...this.state,
            wasMessageSent: true
        });
    }

    render() {
        return (
            <div className={`contact-card ${this.state.isMobile ? 'mobile' : ''}`}>
                <div className="collapsible-spacer"></div>
                <div className="content">
                    <h3>
                        Now that we're friends...
                    </h3>
                    <h3>
                        I'd love to hear from you!
                    </h3>
                    <div className="form-wrapper">
                        <form onSubmit={() => this.sentMessage()}
                            className={`contact-form ${this.state.wasMessageSent ? 'form-hidden' : ''}`}
                            action="https://formspree.io/smzelek@gmail.com"
                            method="POST"
                            target="_blank">
                            <label htmlFor="name">Name</label>
                            <input required
                                type="text"
                                id="name"
                                name="name" />
                            <label htmlFor="email">Email</label>
                            <input required
                                type="email"
                                id="email"
                                name="_replyto" />
                            <label htmlFor="message">Message</label>
                            <textarea required
                                id="message"
                                name="_message">
                            </textarea>
                            <button type="submit">Send</button>
                        </form>
                        <p className={`form-complete-message ${!this.state.wasMessageSent ? 'form-hidden' : ''}`}>
                            Thanks! I'll be in touch soon.
                        </p>
                    </div>
                </div>
                <div className="collapsible-spacer-2"></div>
            </div>
        );
    }
}

export default ContactCard;
