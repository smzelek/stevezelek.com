import { h, render } from 'preact';
import Sidebar from '../components/sidebar/sidebar';
import '../global.scss';
import './take-me-apart.scss';

function TakeMeApart() {
    return (
        <div className="layout">
            <Sidebar></Sidebar>
            <div className="take-me-apart">
                <iframe src="https://take-me-apart.stevezelek.com"></iframe>
            </div>
        </div>
    )
};

render(
    <TakeMeApart />,
    document.body
);
