import React, { forwardRef, useState } from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { AVATARS, AVATAR_IMAGES } from "utils/constants";

import './AvatarPicker.scss';

export const AvatarPicker = forwardRef((props, ref) => {
    const { name, onChange } = props;
    const [ option, setOption ] = useState(null);

    const onSelect = (event) => {
        setOption(event.target.value);

        if (onChange) {
            onChange(ref ? event : event.target.value);
        }
    }

    return (
        <div className="AvatarPicker">
            {Object
                .values(AVATARS)
                .filter((avatar) => avatar !== AVATARS.DEFAULT)
                .map((avatar) => (
                    <AvatarPickerOption
                        ref={ ref }
                        key={ `avatar-${avatar}` }
                        name={ name }
                        value={ avatar }
                        image={ AVATAR_IMAGES[avatar] }
                        selected={ option === avatar }
                        onChange={ onSelect }>
                    </AvatarPickerOption>
                ))
            }
        </div>
    );
});

const AvatarPickerOption = forwardRef((props, ref) => {
    const {
        name,
        value,
        image,
        selected,
        onChange
    } = props;

    const avatarPickerOptionClasses = classNames({
        AvatarPicker__option: true,
        'AvatarPicker__option--selected': !!selected
    });

    return (
        <label className={ avatarPickerOptionClasses }>
            <input
                type="radio"
                ref={ ref }
                value={ value }
                name={ name }
                className="AvatarPicker__option__input"
                onChange={ onChange }
            />
            <img className="AvatarPicker__option__image" src={ image } alt="" />
        </label>
    )
});

AvatarPicker.propTypes = {
    onChange: PropTypes.func
};

AvatarPicker.defaultProps = {
};
