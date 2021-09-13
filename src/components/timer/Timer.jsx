import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { padStringLeft } from 'utils/helpers';

import './Timer.scss';

export default function Timer(props) {
    const { minutes, seconds, onFinished } = props;
    
    const duration = minutes * 60 + seconds;
    const [ timeLeft, setTimeLeft ] = useState(duration);

    useEffect(() => {
        if (!timeLeft) {
            if (onFinished && typeof onFinished === 'function') {
                onFinished();
            }

            return;
        }
    
        const timeoutID = setTimeout(() => {
          setTimeLeft(timeLeft - 1);
        }, 1000);
    
        return () => clearTimeout(timeoutID);
    }, [
        timeLeft,
        onFinished
    ]);

    const remainingMinutes = Math.floor(timeLeft / 60);
    const remainingSeconds = timeLeft - remainingMinutes * 60;
    const elapsedPercentage = (duration - timeLeft) / duration * 100;
    
    const timerClasses = classNames({
        Timer: true,
        'Timer--endgame': elapsedPercentage > 75 
    });

    return (
        <div className={ timerClasses }>
            <div className="Timer__bar">
                <div
                    className="Timer__bar__progress"
                    style={{ width: `${elapsedPercentage}%` }}></div>
            </div>

            <div className="Timer__countdown">
                <span className="Timer__countdown__minutes">{ padStringLeft(remainingMinutes, '0', 2) }</span>
                <span className="Timer__countdown__separator">:</span>
                <span className="Timer__countdown__seconds">{ padStringLeft(remainingSeconds, '0', 2) }</span>
            </div>
        </div>
    );
}

Timer.propTypes = {
    minutes: PropTypes.number,
    seconds: PropTypes.number
};

Timer.defaultProps = {
    minutes: 1,
    seconds: 0
};
