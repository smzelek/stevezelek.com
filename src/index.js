import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(function (registration) {
        registration.unregister()
    })
}
