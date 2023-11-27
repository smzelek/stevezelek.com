import { h, JSX } from 'preact';
import Sidebar from 'src/components/sidebar/sidebar';
import 'src/global.scss';
import './guildvaults.scss';

export default function Guildvaults(): JSX.Element {
    return (
        <div className="layout">
            <Sidebar />
            <div className="guildvaults">
                <iframe src="https://guildvaults.com"
                />
            </div>
        </div>
    )
}
