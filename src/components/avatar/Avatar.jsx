import React from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';

import useWindowSize from "hooks/useWindowSize";
import { AVATARS, AVATAR_IMAGES, POSITIONS } from "utils/constants";

import './Avatar.scss';

export default function Avatar(props) {
    const windowSize = useWindowSize();

    const {
        image,
        imagePosition,
        name,
        canChange,
        onChangeUser
    } = props;

    const avatarImage = AVATAR_IMAGES[image];

    const avatarClasses = classNames({
        Avatar: true,
        'Avatar--mobile': !!windowSize.isMobile,
        'Avatar--can-change': !!canChange,
        [ `Avatar--image-${imagePosition.toLowerCase()}` ]: !!imagePosition
    });

    return (
        <button
            className={avatarClasses}
            onClick={ onChangeUser }>
            <div className="Avatar__image">
                <img src={avatarImage} alt="User" />
            </div>
            {name && 
                <div className="Avatar__username">
                    <div className="Avatar__username__name">
                        { name }
                    </div>
                    {canChange && (
                        <div className="Avatar__username__change-button">
                            Change
                        </div>
                    )}
                </div>
            }
        </button>
    );
}

Avatar.propTypes = {
    canChange: PropTypes.bool,
    name: PropTypes.string,
    image: PropTypes.oneOf(Object.values(AVATARS)),
    imagePosition: PropTypes.oneOf([ POSITIONS.START, POSITIONS.END ])
};

Avatar.defaultProps = {
    canChange: false,
    name: null,
    image: AVATARS.DEFAULT,
    imagePosition: POSITIONS.START
};
