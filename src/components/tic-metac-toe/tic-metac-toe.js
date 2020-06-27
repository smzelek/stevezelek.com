import React, { Component } from 'react';
import './tic-metac-toe.scss';

class TicMetacToe extends Component {
    render() {
        return (
            <div className={`tic-tac-toe`}>
                <iframe src="https://tic-metac-toe.stevezelek.com"></iframe>
            </div>
        );
    }
}

export default TicMetacToe;
