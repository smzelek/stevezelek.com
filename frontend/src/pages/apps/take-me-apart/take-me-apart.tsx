import { h, JSX } from 'preact';
import Sidebar from '~frontend/components/sidebar/sidebar';
import '~frontend/global.scss';
import './take-me-apart.scss';

export default function TakeMeApart(): JSX.Element {
    return (
        <div className="layout">
            <Sidebar />
            <div className="take-me-apart">
                <iframe src="https://take-me-apart.stevezelek.com" />
            </div>
        </div>
    )
}
