import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './ProgressBar.scss';

export default function ProgressBar(props) {
    const {
        activeStepIndex,
        steps,
        onChange
    } = props;

    const getStepClasses = (step) => {
        const {
            index,
            completed,
        } = step;

        return classNames({
            ProgressBar__step: true,
            'ProgressBar__step--completed': !!completed,
            'ProgressBar__step--active': activeStepIndex === index
        });
    }

    return (
        <div className="ProgressBar">
            <div className="ProgressBar__steps">
                {steps.map((step) => (
                    <button
                        key={ `step-${step.index}` }
                        className={ getStepClasses(step) }
                        onClick={ () => onChange(step.index) }>
                        <div className="ProgressBar__step__dot"></div>
                        <div className="ProgressBar__step__index">{ step.label }</div>
                    </button>
                ))}
            </div>
        </div>
    )
};

ProgressBar.propTypes = {
    activeStepIndex: PropTypes.number,
    steps: PropTypes.array,
};

ProgressBar.defaultProps = {
    activeStepIndex: 0,
    steps: []
};
