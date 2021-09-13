import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { COLORS } from 'utils/constants';

import './SimpleButton.scss';

const SimpleButton = (props) => {
    const {
        children,
        onClick,
        color,
    } = props;

    const simpleButtonClasses = classNames({
        SimpleButton: true,
        [`SimpleButton--${color.toLowerCase()}`]: !!color,
    });

    return (
        <button
            className={ simpleButtonClasses }
            onClick={ onClick }>
            <div className="SimpleButton__wrapper">
                <div className="SimpleButton__overlay"></div>
                <div className="SimpleButton__text">
                    { children }
                </div>
            </div>
        </button>
    )
};

export default SimpleButton;

SimpleButton.propTypes = {
    color: PropTypes.oneOf(Object.values(COLORS)),
};

SimpleButton.defaultProps = {
    color: COLORS.PRIMARY
};
