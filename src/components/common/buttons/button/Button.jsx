import React from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { SIZES } from "utils/constants";

import './Button.scss';

export default function Button(props) {
    const buttonClasses = classNames({
        ['Button']: true,
        [`Button--${props.size.toLowerCase()}`]: !!props.size
    });

    return (
        <button
            className={buttonClasses}>
            { props.children }
        </button>
    );
}

Button.propTypes = {
    size: PropTypes.oneOf(Object.values(SIZES))
};

Button.defaultProps = {
    size: SIZES.MEDIUM
};
