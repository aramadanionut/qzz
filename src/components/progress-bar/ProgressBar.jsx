import React from 'react';

import './ProgressBar.scss';

export default function ProgressBar(props) {
    const steps = [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10];

    return (
        <div className="ProgressBar">
            <div className="ProgressBar__steps">
                {steps.map((step) => (
                    <div
                        key={ `step-${step}` }
                        className="ProgressBar__step">
                        <div className="ProgressBar__step__dot"></div>
                        <div className="ProgressBar__step__index">{ step }</div>
                    </div>
                ))}
            </div>
        </div>
    )
};

