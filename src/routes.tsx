import { h, render } from 'preact';
import Usr from './pages/usr/usr';
import Apps from './pages/apps/apps';
import RaidCDPlanner from './pages/apps/raid-cd-planner/raid-cd-planner';
import Pokegrader from './pages/apps/pokegrader/pokegrader';
import TakeMeApart from './pages/apps/take-me-apart/take-me-apart';
import TicMetacToe from './pages/apps/tic-metac-toe/tic-metac-toe';
import Guildvaults from './pages/apps/guildvaults/guildvaults';
import Blog from './pages/blog/blog';
import WhyOurCompanyWCs from './pages/blog/why-our-company-needed-web-components/why-our-company-wcs';
import { Router, Route } from 'preact-router';
import Privacy from './pages/privacy/privacy';

const Main = () => {
  return (<div style="display:contents;">
    <span style="display:none;">
      {process.env['COMMIT_HASH']}
    </span>
    <Router>
      <Route path="/" component={Usr} />
      <Route path="/blog/" component={Blog} />
      <Route path="/blog/why-our-company-needed-web-components" component={WhyOurCompanyWCs} />
      <Route path="/apps/" component={Apps} />
      <Route path="/apps/raid-cd-planner/" component={RaidCDPlanner} />
      <Route path="/apps/pokegrader/" component={Pokegrader} />
      <Route path="/apps/take-me-apart" component={TakeMeApart} />
      <Route path="/apps/tic-metac-toe" component={TicMetacToe} />
      <Route path="/apps/guildvaults" component={Guildvaults} />
      <Route path="/privacy/" component={Privacy} />
    </Router>
  </div>)
};

render(<Main />, document.body);
