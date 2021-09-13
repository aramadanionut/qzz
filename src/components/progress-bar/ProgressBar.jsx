import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import useWindowSize from 'hooks/useWindowSize';

import './ProgressBar.scss';

export default function ProgressBar(props) {
    const windowSize = useWindowSize();

    const {
        canNavigate,
        inline,
        vertical,
        activeStepIndex,
        steps,
        onChange
    } = props;

    const progressBarClasses = classNames({
        ProgressBar: true,
        'ProgressBar--mobile': !!windowSize.isMobile,
        'ProgressBar--vertical': !!vertical,
        'ProgressBar--inline': !!inline,
    });

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

    const onChangeStep = (index) => {
        if (canNavigate && onChange && typeof onChange === 'function') {
            onChange(index)
        }
    };

    return (
        <div className={ progressBarClasses }>
            <div className="ProgressBar__bar">
                <div className="ProgressBar__steps">
                    {steps.map((step) => (
                        <button
                            key={ `step-${step.index}` }
                            type="button"
                            className={ getStepClasses(step) }
                            onClick={ () => onChangeStep(step.index) }>
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
    canNavigate: PropTypes.bool,
    vertical: PropTypes.bool,
    inline: PropTypes.bool,
    activeStepIndex: PropTypes.number,
    steps: PropTypes.array,
};

ProgressBar.defaultProps = {
    canNavigate: true,
    vertical: false,
    inline: true,
    activeStepIndex: 0,
    steps: []
};
