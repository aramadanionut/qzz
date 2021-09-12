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
    };

    const completedCount = steps.reduce((acc, step) => acc += (step.completed ? 1 : 0), 0);

    return (
        <div className="ProgressBar">
            <div className="ProgressBar__bar">
                <div className="ProgressBar__steps">
                    {steps.map((step) => (
                        <button
                            key={ `step-${step.index}` }
                            type="button"
                            className={ getStepClasses(step) }
                            onClick={ () => onChange(step.index) }>
                            <div className="ProgressBar__step__dot"></div>
                        </button>
                    ))}
                </div>
            </div>
            <div className="ProgressBar__counter">
                <div className="ProgressBar__count__completed">{ completedCount }</div>
                <div className="ProgressBar__count__separator">/</div>
                <div className="ProgressBar__count__total">{ steps.length }</div>
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
