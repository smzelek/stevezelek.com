import React from 'react';
import './tag.scss';

const TAG_TO_STYLES = {
    "teamwork": {
        "background": "#2b833f",
        "color": "#ffffff"
    },
    "devops": {
        "background": "#532c91",
        "color": "#ffffff"
    },
    "frontend": {
        "background": "#007bb6",
        "color": "#ffffff"
    },
    "design": {
        "background": "#b23675",
        "color": "#ffffff"
    },
    "backend": {
        "background": "#c94321",
        "color": "#ffffff"
    }
}

function Tag(props) {
    return (
        <li className="my-tag" style={TAG_TO_STYLES[props.name]}>{props.name}</li>
    );
}

export default Tag;