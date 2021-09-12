import React from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { SIZES, COLORS, BUTTON_TYPES, DIRECTIONS } from "utils/constants";
import useHover from "hooks/useHover";

import './Button.scss';

export default function Button(props) {
    const {
        type,
        direction,
        size,
        children,
        color = '',
        onClick
    } = props;

    const [ hoverRef, isHovered ] = useHover();
    
    const buttonClasses = classNames({
        Button: true,
        [`Button--${size.toLowerCase()}`]: !!size,
        [`Button--hovered`]: isHovered,
        [`Button--${color.toLowerCase()}`]: !!color,
        [`Button--direction-${direction.toLowerCase()}`]: !!direction,
    });

    return (
        <button
            ref={ hoverRef }
            type={ type }
            className={buttonClasses}
            onClick={ onClick }>

            <div className="Button__background">
                <div className="Button__background-icon">
                    <FontAwesomeIcon icon={ direction === DIRECTIONS.RIGHT ? faChevronRight : faChevronLeft } />
                </div>
            </div>

            <div className="Button__text">
                { children }
            </div>
        </button>
    );
}

Button.propTypes = {
    type: PropTypes.oneOf([ BUTTON_TYPES.BUTTON, BUTTON_TYPES.SUBMIT ]),
    direction: PropTypes.oneOf([ DIRECTIONS.LEFT, DIRECTIONS.RIGHT ]),
    size: PropTypes.oneOf(Object.values(SIZES)),
    color: PropTypes.oneOf(Object.values(COLORS)),
    onClick: PropTypes.func
};

Button.defaultProps = {
    type: BUTTON_TYPES.BUTTON,
    direction: DIRECTIONS.RIGHT,
    size: SIZES.MEDIUM,
    color: COLORS.PRIMARY,
    onClick: () => {}
};
