import React from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

import { SIZES, COLORS } from "utils/constants";
import useHover from "hooks/useHover";

import './Button.scss';

export default function Button(props) {
    const {
        size,
        children,
        color = ''
    } = props;

    const [ hoverRef, isHovered ] = useHover();
    
    const buttonClasses = classNames({
        Button: true,
        [`Button--${size.toLowerCase()}`]: !!size,
        [`Button--hovered`]: isHovered,
        [`Button--${color.toLowerCase()}`]: !!color
    });

    return (
        <button
            ref={ hoverRef }
            className={buttonClasses}>

            <div className="Button__background">
                <div className="Button__background-icon">
                    <FontAwesomeIcon icon={ faChevronRight } />
                </div>
            </div>

            <div className="Button__text">
                { children }
            </div>
        </button>
    );
}

Button.propTypes = {
    size: PropTypes.oneOf(Object.values(SIZES)),
    color: PropTypes.oneOf(Object.values(COLORS))
};

Button.defaultProps = {
    size: SIZES.MEDIUM,
    color: COLORS.PRIMARY
};
