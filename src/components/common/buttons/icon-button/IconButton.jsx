import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import './IconButton.scss';

const IconButton = (props) => {
    const { size, icon, onClick } = props;

    return (
        <button
            className="IconButton"
            style={{ fontSize: `${size}px` }}
            onClick={ onClick }>
            <FontAwesomeIcon icon={ icon }/>
        </button>
    )
};

export default IconButton;

IconButton.propTypes = {
    size: PropTypes.number,
    icon: PropTypes.object
};


IconButton.defaultProps = {
    size: 20,
    icon: faTimes
};
