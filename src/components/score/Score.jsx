import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';

import './Score.scss';

const FULL_CIRCLE_DASHARRAY = 283;
const ANIMATION_STEP = 50;

export default function Score(props) {
    const { scorePerQuestion, correct, total } = props;

    const [ correctCount, setCorrectCount ] = useState(0);
    const [ scoreCount, setScoreCount ] = useState(0);
    const [ scoreStrokeDash, setScoreStrokeDash ] = useState(0);

    const scoreStrokeAnimationDuration = (correct + 1) * ANIMATION_STEP;

    useEffect(() => {
        const timeoutID = setTimeout(() => {
            setScoreStrokeDash(correct / total * FULL_CIRCLE_DASHARRAY);
        }, ANIMATION_STEP);

        return () => clearTimeout(timeoutID);
    }, [
        correct,
        total
    ]);

    useEffect(() => {
        if (correctCount === correct) return;
    
        const timeoutID = setTimeout(() => {
            const updatedCorrectCount = correctCount > correct ? correctCount - 1 : correctCount + 1;

            setCorrectCount(updatedCorrectCount);
            setScoreCount(scorePerQuestion * updatedCorrectCount);
        }, ANIMATION_STEP);
    
        return () => clearTimeout(timeoutID);
    }, [
        correct,
        correctCount,
        scoreCount,
        scorePerQuestion,
    ]);

    return (
        <div className="Score">
            <div className="Score__counter">
                <div className="Score__counter__svg">
                    <svg
                        className="Score__counter__svg__base"
                        viewBox="0 0 100 100"
                        xmlns="http://www.w3.org/2000/svg">
                        <g className="Score__counter__svg__circle">
                            <circle className="Score__counter__svg__circle__elapsed" cx="50" cy="50" r="45" />
                            <path
                                style={{
                                    transitionDuration: `${scoreStrokeAnimationDuration}ms`,
                                    strokeDasharray: `${scoreStrokeDash} ${FULL_CIRCLE_DASHARRAY}`
                                }}
                                strokeDasharray={ `${scoreStrokeDash} ${FULL_CIRCLE_DASHARRAY}` }
                                className="Score__counter__svg__circle__remaining"
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

                <div className="Score__counter__value">
                    <div className="Score__counter__value__correct">{ correctCount }</div>
                    <div className="Score__counter__value__count">out of</div>
                    <div className="Score__counter__value__total">{ total }</div>
                </div>
            </div>

            <div className="Score__total">
                <div className="Score__total__value">
                    { scoreCount }
                </div>
                <div className="Score__total__label">points</div>
            </div>
        </div>
    );
};

Score.propTypes = {
    correct: PropTypes.number,
    total: PropTypes.number,
    scorePerQuestion: PropTypes.number
};

Score.defaultProps = {
    correct: 10,
    total: 20,
    scorePerQuestion: 10
};
