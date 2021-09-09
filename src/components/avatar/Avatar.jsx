import React from "react";
import PropTypes from 'prop-types';

import './Avatar.scss';

import { AVATARS, AVATAR_IMAGES } from "utils/constants";

export default function Avatar(props) {
    const AvatarImage = AVATAR_IMAGES[props.image];

    return (
        <div className="Avatar">
            <div className="Avatar__image">
                <AvatarImage></AvatarImage>
            </div>
        </div>
    );
}

Avatar.propTypes = {
    image: PropTypes.oneOf(Object.values(AVATARS))
};

Avatar.defaultProps = {
    image: AVATARS.DEFAULT
};
