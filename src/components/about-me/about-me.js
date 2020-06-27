import React, { Component } from 'react';
import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MobileServiceFactory } from '../../services/mobile.service';
import './about-me.scss';
import InfoCard from '../info-card/info-card';
import ContactCard from '../contact-card/contact-card';
const pa = './assets/pa.jpg';
const mu = './assets/mu.jpg';
const bulb = './assets/bulb.jpg';

class AboutMe extends Component {
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
            <div className={`about-me ${this.state.isMobile ? 'mobile' : ''}`}>
                <header>
                    <h1>about me</h1>
                </header>
                <main>
                    <div className="separator"></div>
                    <InfoCard
                        header="I'm a computer scientist from Pennsylvania."
                        paragraphs={[
                            `At my company, I use the latest tech to create high-performance UIs for complex financial data.
                                    The web apps we build have helped our company excel in FinTech.`,
                            `I've led short and long-term projects, and found ways to innovate in and out of tech.`,
                            `I'm a team player with endless work ethic who always wants to go above and beyond.`
                        ]}
                        imgPath={pa}>
                    </InfoCard>
                    <div className="separator"></div>
                    <InfoCard
                        header="In college, I was a devoted academic."
                        paragraphs={[
                            `At Millersville University, I majored in Computer Science and minored in Math. 
                                My work ethic earned me a 3.93 GPA. 
                                One summer, I did two internships at once.`,
                            `I ran our Computer Science Club. We went to conferences and hosted tech meetups.`,
                            `I helped lead our Programming Team, and we won the regional contest two years in a row.`
                        ]}
                        imgPath={mu}>
                    </InfoCard>
                    <div className="separator"></div>
                    <InfoCard
                        header="I'm always learning something new."
                        paragraphs={[
                            `I run a DND campaign, play guitar, and compete in roller derby. 
                                I spend most of my free time teaching myself new things. 
                                I'm addicted to side projects.`,
                            `New developments in technology constantly present interesting problems to solve.`,
                            `Challenging work with a positive impact is what keeps me engaged.`
                        ]}
                        imgPath={bulb}>
                    </InfoCard>
                    <div className="separator"></div>
                    <ContactCard></ContactCard>
                    <div className="separator"></div>
                </main>
            </div>
        );
    }
}

export default AboutMe;
