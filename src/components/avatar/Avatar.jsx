import React from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Avatar.scss';

import { AVATARS, AVATAR_IMAGES, POSITIONS } from "utils/constants";

export default function Avatar(props) {
    const AvatarImage = AVATAR_IMAGES[props.image];

    const avatarClasses = classNames({
        [ 'Avatar' ]: true,
        [ `Avatar--image-${props.imagePosition.toLowerCase()}` ]: !!props.imagePosition
    });

    return (
        <div className={avatarClasses}>
            <div className="Avatar__image">
                <AvatarImage></AvatarImage>
            </div>
            {props.name && 
                <div className="Avatar__name">
                    { props.name }
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
