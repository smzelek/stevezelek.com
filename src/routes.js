import { h, render } from 'preact';
import Website from './pages/website';
import Apps from './pages/apps/apps';
import TakeMeApart from './pages/apps/take-me-apart/take-me-apart';
import TicMetacToe from './pages/apps/tic-metac-toe/tic-metac-toe';
import Blog from './pages/blog/blog';
import WhyOurCompanyWCs from './pages/blog/why-our-company-wcs/why-our-company-wcs';
import Router from 'preact-router';

const Main = () => (
    <Router>
        <Website path="/" />
        <Apps path="/apps" />
        <TakeMeApart path="/apps/take-me-apart" />
        <TicMetacToe path="/apps/tic-metac-toe" />
        <Blog path="/blog/" />
        <WhyOurCompanyWCs path="/blog/why-our-company-needed-web-components" />
    </Router>
);

render(<Main />, document.body);
