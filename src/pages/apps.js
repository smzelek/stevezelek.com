import { h, render } from 'preact';
import Sidebar from '../components/sidebar/sidebar';
import AppCard from '../components/app-card/app-card';
import '../global.scss';
import './apps.scss';
const takemeapart = '/assets/icons/wrench.png';
const tictactoe = '/assets/icons/times.svg';

function Apps() {
    return (
        <div className="layout">
            <Sidebar></Sidebar>
            <div className="apps-gallery">
                <header>
                    <h2 className="title">apps</h2>
                </header>
                <main>
                    <AppCard header="take me apart"
                        paragraphs={['A fun way for beginners, or even children to visualize web development.']}
                        imgPath={takemeapart}
                        url="/apps/take-me-apart">
                    </AppCard>
                    <AppCard header="tic-metac-toe"
                        paragraphs={['A meta variant of tic-tac-toe featuring 9 boards and special rules.']}
                        imgPath={tictactoe}
                        url="/apps/tic-metac-toe">
                    </AppCard>
                </main>
            </div>
        </div>
    )
};

export default Apps;
