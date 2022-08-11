import { h } from 'preact';
import Sidebar from 'src/components/sidebar/sidebar';
import 'src/global.scss';
import './take-me-apart.scss';

export default function TakeMeApart() {
    return (
        <div className="layout">
            <Sidebar />
            <div className="take-me-apart">
                <iframe src="https://take-me-apart.stevezelek.com" />
            </div>
        </div>
    )
}
