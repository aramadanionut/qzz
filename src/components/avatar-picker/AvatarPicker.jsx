import React, { useState } from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { AVATARS, AVATAR_IMAGES, POSITIONS } from "utils/constants";

import './AvatarPicker.scss';

export default function AvatarPicker(props) {
    const [ option, setOption ] = useState();

    return (
        <div className="AvatarPicker">
            {Object
                .values(AVATARS)
                .filter((avatar) => avatar !== AVATARS.DEFAULT)
                .map((avatar) => (
                    <AvatarPickerOption
                        key={ `avatar-${avatar}` }
                        selected={ option === avatar }
                        avatar={ avatar }
                        image={ AVATAR_IMAGES[avatar] }
                        onSelect={ (option) => setOption(option) }>
                    </AvatarPickerOption>
                ))
            }
        </div>
    );
}

function AvatarPickerOption(props) {
    const {
        selected,
        avatar,
        image,
        onSelect
    } = props;

    const avatarPickerOptionClasses = classNames({
        AvatarPicker__option: true,
        [ 'AvatarPicker__option--selected' ]: !!selected
    });

    return (
        <label className={ avatarPickerOptionClasses }>
            <input
                type="radio"
                value={ avatar }
                name="avatar-picker"
                className="AvatarPicker__option__input"
                onClick={() => onSelect(avatar) }
            />
            <img className="AvatarPicker__option__image" src={ image } alt="" />
        </label>
    )
}

AvatarPicker.propTypes = {
};

AvatarPicker.defaultProps = {
};
