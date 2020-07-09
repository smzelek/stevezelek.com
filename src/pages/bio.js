import { h, render } from 'preact';
import Sidebar from '../components/sidebar/sidebar';
import AboutMe from '../components/about-me/about-me';
import '../global.scss';

function Bio() {
    return (
        <div className="layout">
            <Sidebar></Sidebar>
            <AboutMe></AboutMe>
        </div>
    )
};

render(<Bio />, document.body);
