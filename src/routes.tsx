import { Fragment, h, render } from 'preact';
import Website from './pages/website';
import Apps from './pages/apps/apps';
import TakeMeApart from './pages/apps/take-me-apart/take-me-apart';
import TicMetacToe from './pages/apps/tic-metac-toe/tic-metac-toe';
import Blog from './pages/blog/blog';
import WhyOurCompanyWCs from './pages/blog/why-our-company-wcs/why-our-company-wcs';
import { Router, Route } from 'preact-router';

const Main = () => (
  <Fragment>
    <span style="display:none;">
      {process.env['COMMIT_HASH']}
    </span>
    <Router>
      <Route path="/" component={Website} />
      <Route path="/apps" component={Apps} />
      <Route path="/apps/take-me-apart" component={TakeMeApart} />
      <Route path="/apps/tic-metac-toe" component={TicMetacToe} />
      <Route path="/blog/" component={Blog} />
      <Route path="/blog/why-our-company-needed-web-components" component={WhyOurCompanyWCs} />
    </Router>
  </Fragment>
);

render(<Main />, document.body);
