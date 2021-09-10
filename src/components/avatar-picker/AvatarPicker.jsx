import React from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { AVATARS, AVATAR_IMAGES, POSITIONS } from "utils/constants";

import './AvatarPicker.scss';

export default function AvatarPicker(props) {
    return (
        <div className="AvatarPicker">
            {Object
                .values(AVATARS)
                .filter((avatar) => avatar !== AVATARS.DEFAULT)
                .map((avatar) => (
                    <AvatarPickerOption
                        avatar={ avatar }
                        image={ AVATAR_IMAGES[avatar] }>
                    </AvatarPickerOption>
                ))
            }
        </div>
    );
}

function AvatarPickerOption(props) {
    return (
        <label className="AvatarPicker__option">
            <input
                type="radio"
                value={ avatar }
                name="avatar-picker"
                className="AvatarPicker__option__input"
            />
            <img className="AvatarPicker__option__image" src={ props.image } alt="" />
        </label>
    )
}

AvatarPicker.propTypes = {
};

AvatarPicker.defaultProps = {
};
