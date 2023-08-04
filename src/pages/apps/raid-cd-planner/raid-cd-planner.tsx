import { h, JSX } from 'preact';
import Sidebar from 'src/components/sidebar/sidebar';
import 'src/global.scss';
import './raid-cd-planner.scss';

export default function RaidCDPlanner(): JSX.Element {
    return (
        <div className="layout">
            <Sidebar />
            <div className="raid-cd-planner">
                <iframe
                    src="https://raid-cd-planner.stevezelek.com/"
                />
            </div>
        </div>
    )
}
