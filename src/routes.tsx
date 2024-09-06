import { h, render } from 'preact';
import { lazy, Suspense } from 'preact/compat';
import { Router, Route } from 'preact-router';
import Usr from './pages/usr/usr';
import Apps from './pages/apps/apps';
import Pokegrader from './pages/apps/pokegrader/pokegrader';
import TakeMeApart from './pages/apps/takemeapart/takemeapart';
import TicMetacToe from './pages/apps/ticmetactoe/ticmetactoe';
import Guildvaults from './pages/apps/guildvaults/guildvaults';
import Blog from './pages/blog/blog';
import Privacy from './pages/privacy/privacy';
import Share from './pages/share/share';
import Loading from './loading';

const Sandbox = lazy(() => import("./pages/sandbox/sandbox"));
const WhyOurCompanyWCs = lazy(() => import("./pages/blog/why-our-company-needed-web-components/why-our-company-wcs"));

const Main = () => {
  return (<div style="display:contents;">
    <span style="display:none;">
      {process.env['COMMIT_HASH']}
    </span>
    <Suspense fallback={<Loading />}>
      <Router>
        <Route path="/" component={Usr} />
        <Route path="/sandbox/" component={Sandbox} />
        <Route path="/share/" component={Share} />
        <Route path="/blog/" component={Blog} />
        <Route path="/blog/why-our-company-needed-web-components" component={WhyOurCompanyWCs} />
        <Route path="/apps/" component={Apps} />
        <Route path="/apps/pokegrader/" component={Pokegrader} />
        <Route path="/apps/takemeapart" component={TakeMeApart} />
        <Route path="/apps/ticmetactoe" component={TicMetacToe} />
        <Route path="/apps/guildvaults" component={Guildvaults} />
        <Route path="/privacy/" component={Privacy} />
      </Router>
    </Suspense>
  </div>)
};

render(<Main />, document.body);
