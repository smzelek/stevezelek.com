import { h, JSX } from 'preact';
import Sidebar from 'src/components/sidebar/sidebar';
import 'src/global.scss';
import './takemeapart.scss';

export default function TakeMeApart(): JSX.Element {
    return (
        <div className="layout">
            <Sidebar />
            <div className="takemeapart">
                <iframe src="https://takemeapart.com" />
            </div>
        </div>
    )
}
