import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './IconButton.scss';

const IconButton = (props) => {
    const { icon, onClick } = props;

    return (
        <button
            className="IconButton"
            onClick={ onClick }>
            <FontAwesomeIcon icon={ icon }/>
        </button>
    )
};

export default IconButton;