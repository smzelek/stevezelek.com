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

if (navigator.serviceWorker) {
    navigator.serviceWorker.getRegistrations().then(function (registrations) {
        for (let registration of registrations) {
            registration.unregister()
        }
    })
}
