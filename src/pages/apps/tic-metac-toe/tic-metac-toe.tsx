import { h } from 'preact';
import Sidebar from 'src/components/sidebar/sidebar';
import 'src/global.scss';
import './tic-metac-toe.scss';

function TicMetacToe() {
    return (
        <div className="layout">
            <Sidebar />
            <div className={`tic-tac-toe`}>
                <iframe src="https://tic-metac-toe.stevezelek.com" />
            </div>
        </div>
    )
}

export default TicMetacToe;