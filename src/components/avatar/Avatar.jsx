import React from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Avatar.scss';

import { AVATARS, AVATAR_IMAGES, POSITIONS } from "utils/constants";

export default function Avatar(props) {
    const {
        image,
        imagePosition,
        name,
        onChangeUser
    } = props;

    const avatarImage = AVATAR_IMAGES[image];

    const avatarClasses = classNames({
        Avatar: true,
        [ `Avatar--image-${imagePosition.toLowerCase()}` ]: !!imagePosition
    });

    return (
        <div className={avatarClasses}>
            <div className="Avatar__image">
                <img src={avatarImage} alt="User" />
            </div>
            {name && 
                <div className="Avatar__username">
                    <div className="Avatar__username__name">
                        { name }
                    </div>
                    <button
                        className="Avatar__username__change-button"
                        onClick={ onChangeUser }>
                        Change
                    </button>
                </div>
            }
        </div>
    );
}

Avatar.propTypes = {
    name: PropTypes.string,
    image: PropTypes.oneOf(Object.values(AVATARS)),
    imagePosition: PropTypes.oneOf([ POSITIONS.START, POSITIONS.END ])
};

Avatar.defaultProps = {
    name: null,
    image: AVATARS.DEFAULT,
    imagePosition: POSITIONS.START
};
