import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import { unregister } from './sw';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

unregister();