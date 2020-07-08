import React from 'react';
import './icons.scss';
const linkedin = './assets/icons/linkedin.svg';

export default function LinkedIn() {
    return (
        <a href="https://www.linkedin.com/in/steve-zelek-022903107/" className="icon linkedin">
            <img src={linkedin} alt="Visit Steve Zelek on LinkedIn." />
        </a>
    );
}
