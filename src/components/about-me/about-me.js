import { h } from 'preact';
import InfoCard from '../info-card/info-card';
import ContactCard from '../contact-card/contact-card';
import './about-me.scss';

export default function AboutMe () {
    return (
        <div className="about-me">
            <header>
                <h2 className="title">about me</h2>
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
                    webpPaths="
                        ./assets/pa/pa-4x.webp 4x,
                        ./assets/pa/pa-3x.webp 3x,
                        ./assets/pa/pa-2x.webp 2x,
                        ./assets/pa/pa-1x.webp 1x
                    "
                    jpegPaths="
                        ./assets/pa/pa-4x.jpg 4x,
                        ./assets/pa/pa-3x.jpg 3x,
                        ./assets/pa/pa-2x.jpg 2x,
                        ./assets/pa/pa-1x.jpg 1x 
                    "
                    jpegFallback="./assets/pa/pa-1x.jpg"
                    imgAltText="The state seal of Pennsylvania.">
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
                    webpPaths="
                        ./assets/mu/mu-4x.webp 4x,
                        ./assets/mu/mu-3x.webp 3x,
                        ./assets/mu/mu-2x.webp 2x,
                        ./assets/mu/mu-1x.webp 1x
                    "
                    jpegPaths="
                        ./assets/mu/mu-4x.jpg 4x,
                        ./assets/mu/mu-3x.jpg 3x,
                        ./assets/mu/mu-2x.jpg 2x,
                        ./assets/mu/mu-1x.jpg 1x 
                    "
                    jpegFallback="./assets/mu/mu-1x.jpg"
                    imgAltText="The logo for Millersville University of Pennsylvania.">
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
                    webpPaths="
                        ./assets/bulb/bulb-4x.webp 4x,
                        ./assets/bulb/bulb-3x.webp 3x,
                        ./assets/bulb/bulb-2x.webp 2x,
                        ./assets/bulb/bulb-1x.webp 1x
                    "
                    jpegPaths="
                        ./assets/bulb/bulb-4x.jpg 4x,
                        ./assets/bulb/bulb-3x.jpg 3x,
                        ./assets/bulb/bulb-2x.jpg 2x,
                        ./assets/bulb/bulb-1x.jpg 1x 
                    "
                    jpegFallback="./assets/bulb/bulb-1x.jpg"
                    imgAltText="A lightbulb.">
                </InfoCard>
                <div className="separator"></div>
                <ContactCard></ContactCard>
                <div className="separator"></div>
            </main>
        </div>
    );
}
