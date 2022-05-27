import { h, render } from 'preact';
import Bio from './pages/bio';
import Apps from './pages/apps';
import TakeMeApart from './pages/take-me-apart';
import TicMetacToe from './pages/tic-metac-toe';
import Blog from './pages/blog';
import WhyOurCompanyWCs from './pages/why-our-company-wcs';
import Router from 'preact-router';

const Main = () => (
    <Router>
        <Bio path="/" />
        <Apps path="/apps" />
        <TakeMeApart path="/apps/take-me-apart" />
        <TicMetacToe path="/apps/tic-metac-toe" />
        <Blog path="/blog/" />
        <WhyOurCompanyWCs path="/blog/why-our-company-needed-web-components" />
    </Router>
);

render(<Main />, document.body);
