import { h, JSX } from 'preact';
import Sidebar from 'src/components/sidebar/sidebar';
import AppCard from 'src/components/app-card/app-card';
import 'src/global.scss';
import './apps.scss';
import PageHeader from 'src/components/page-header/page-header';
const raidcdplanner = '/assets/icons/raid-cd-planner.png';
const pokegrader = '/assets/icons/pokegrader.png';
const takemeapart = '/assets/icons/wrench.png';
const tictactoe = '/assets/icons/times.svg';
const guildvaults = '/assets/icons/guildvaults.png';

export default function Apps(): JSX.Element {
    return (
        <div className="layout">
            <Sidebar />
            <div className="apps">
                <PageHeader>~/apps</PageHeader>
                <main>
                    <p>
                        I make niche apps that entertain me and let me solve interesting problems in both coding, and UI design.
                        Most of them were made on rainy weekends for fun.
                    </p>
                    <div className="separator" />
                    <p>
                        They're usually relevant to one of my hobbies, and give me a chance to try new technologies to stay trendy for the folks on Twitter.
                        Please send "Take Me Apart!" to a kid you know looking for a wonderful career.
                    </p>
                    <div className="separator" />
                    <div className="apps-list">
                        <AppCard header="Raid CD Planner"
                            paragraphs={['Plan your raid CDs in World of Warcraft!']}
                            imgPath={raidcdplanner}
                            url="/apps/raid-cd-planner/" />
                        <AppCard header="pokégrader"
                            paragraphs={['pokégrader grades your pokémon teams!']}
                            imgPath={pokegrader}
                            url="/apps/pokegrader/" />
                        <AppCard header="Take Me Apart!"
                            paragraphs={['Use interactive fun to learn what web development is!']}
                            imgPath={takemeapart}
                            url="/apps/take-me-apart/" />
                        <AppCard header="Tic-meTac-Toe"
                            paragraphs={['A version of tic-tac-toe with 9 boards at once!']}
                            imgPath={tictactoe}
                            url="/apps/tic-metac-toe/" />
                        <AppCard header="Guild Vaults"
                            paragraphs={[`A way to check on your World of Warcraft guild's vaults!`]}
                            imgPath={guildvaults}
                            url="/apps/guildvaults/" />
                    </div>
                </main>
            </div>
        </div>
    )
}

