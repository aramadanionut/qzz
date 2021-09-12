import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';

import './Score.scss';

const FULL_CIRCLE_DASHARRAY = 283;

export default function Score(props) {
    const { correct, total } = props;

    const [ count, setCount ] = useState(0);
    const [ scoreStrokeDash, setScoreStrokeDash ] = useState(0);

    const scoreStrokeAnimationDuration = (correct + 1) * 100;

    useEffect(() => {
        const timeoutID = setTimeout(() => {
            setScoreStrokeDash(correct / total * FULL_CIRCLE_DASHARRAY);
        }, 100);

        return () => clearTimeout(timeoutID);
    }, []);

    useEffect(() => {
        if (count === correct) return;
    
        const timeoutID = setTimeout(() => {
            setCount(count + 1);
        }, 100);
    
        return () => clearTimeout(timeoutID);
    }, [count]);

    return (
        <div className="Score">
            <div className="Score__svg">
                <svg
                    className="Score__svg__base"
                    viewBox="0 0 100 100"
                    xmlns="http://www.w3.org/2000/svg">
                    <g className="Score__svg__circle">
                        <circle className="Score__svg__circle__elapsed" cx="50" cy="50" r="45" />
                        <path
                            style={{
                                transitionDuration: `${scoreStrokeAnimationDuration}ms`,
                                strokeDasharray: `${scoreStrokeDash} ${FULL_CIRCLE_DASHARRAY}`
                            }}
                            strokeDasharray={ `${scoreStrokeDash} ${FULL_CIRCLE_DASHARRAY}` }
                            className="Score__svg__circle__remaining"
                            d="
                            M 50, 50
                            m -45, 0
                            a 45,45 0 1,0 90,0
                            a 45,45 0 1,0 -90,0
                            ">
                        </path>
                    </g>
                </svg>
            </div>

            <div className="Score__value">
                <div className="Score__value__correct">{ count }</div>
                <div className="Score__value__count">out of</div>
                <div className="Score__value__total">{ total }</div>
            </div>
        </div>
    );
};

Score.propTypes = {
    correct: PropTypes.number,
    total: PropTypes.number,
};

Score.defaultProps = {
    correct: 10,
    total: 20
};
