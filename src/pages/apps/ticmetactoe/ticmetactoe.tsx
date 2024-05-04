import { h, JSX } from 'preact';
import Sidebar from 'src/components/sidebar/sidebar';
import 'src/global.scss';
import './ticmetactoe.scss';

export default function TicMetacToe(): JSX.Element {
    return (
        <div className="layout">
            <Sidebar />
            <div className={`tic-tac-toe`}>
                <iframe src="https://ticmetactoe.com" />
            </div>
        </div>
    )
}
