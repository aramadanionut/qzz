import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHourglassStart, faHourglassHalf, faHourglassEnd } from '@fortawesome/free-solid-svg-icons';

import './Timer.scss';

export default function Timer(props) {
    return (
        <div className="Timer">
            <div className="Timer__bar">
                <div className="Timer__bar__progress"></div>
            </div>

            <div className="Timer__countdown">
                <span className="Timer__countdown__minutes">15</span>
                <span className="Timer__countdown__separator">:</span>
                <span className="Timer__countdown__seconds">30</span>
            </div>
        </div>
    );
}

