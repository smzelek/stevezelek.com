import { h, JSX } from 'preact';
import Sidebar from 'src/components/sidebar/sidebar';
import AppCard from 'src/components/app-card/app-card';
import 'src/global.scss';
import './apps.scss';
import PageHeader from 'src/components/page-header/page-header';
const takemeapart = '/assets/icons/wrench.png';
const tictactoe = '/assets/icons/times.svg';
const pokegrader = '/assets/icons/pokegrader.png';

export default function Apps(): JSX.Element {
    return (
        <div className="layout">
            <Sidebar />
            <div className="apps">
                <PageHeader>~/apps</PageHeader>
                <main>
                    <AppCard header="pokégrader"
                        paragraphs={['pokégrader grades your pokémon teams!']}
                        imgPath={pokegrader}
                        url="/apps/pokegrader/" />
                    <AppCard header="take me apart"
                        paragraphs={['A fun way for beginners, or even children to visualize web development.']}
                        imgPath={takemeapart}
                        url="/apps/take-me-apart/" />
                    <AppCard header="tic-metac-toe"
                        paragraphs={['A meta variant of tic-tac-toe featuring 9 boards and special rules.']}
                        imgPath={tictactoe}
                        url="/apps/tic-metac-toe/" />
                </main>
            </div>
        </div>
    )
}

