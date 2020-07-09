import { h, render } from 'preact';
import Sidebar from '../components/sidebar/sidebar';
import AppCard from '../components/app-card/app-card';
import '../global.scss';
import './apps.scss';
const tictactoe = './assets/icons/times.svg';

function Apps() {
    return (
        <div className="layout">
            <Sidebar></Sidebar>
            <div className="apps-gallery">
                <header>
                    <h2 className="title">apps</h2>
                </header>
                <main>
                    <AppCard header="tic-metac-toe"
                        paragraphs={['A meta variant of tic-tac-toe featuring 9 boards and special rules.']}
                        imgPath={tictactoe}
                        url="/apps/tic-metac-toe"
                        imgAltText="An X used in the game of tic-tac-toe.">
                    </AppCard>
                </main>
            </div>
        </div>
    )
};


render(
    <Apps />,
    document.body
);
