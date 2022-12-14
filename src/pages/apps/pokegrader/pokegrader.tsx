import { h, JSX } from 'preact';
import Sidebar from 'src/components/sidebar/sidebar';
import 'src/global.scss';
import './pokegrader.scss';

export default function Pokegrader(): JSX.Element {
    const capturedParams = window.location.search;
    window.history.replaceState({ path: '/apps/pokegrader' }, '', '/apps/pokegrader');

    return (
        <div className="layout">
            <Sidebar />
            <div className="pokegrader">
                <iframe
                    src={`https://pokegrader.stevezelek.com${capturedParams}`}
                    referrerpolicy="unsafe-url"
                />
            </div>
        </div>
    )
}
