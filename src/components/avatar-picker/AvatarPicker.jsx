import React, { forwardRef, useState } from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { AVATARS, AVATAR_IMAGES } from "utils/constants";

import './AvatarPicker.scss';

export const AvatarPicker = forwardRef((props, ref) => {
    const { name } = props;
    const [ option, setOption ] = useState();

    const onChange = (event) => {
        setOption(event.target.value);

        if (props.onChange) {
            props.onChange(event);
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
                        selected={ option === avatar }
                        avatar={ avatar }
                        image={ AVATAR_IMAGES[avatar] }
                        onChange={ onChange }>
                    </AvatarPickerOption>
                ))
            }
        </div>
    );
});

const AvatarPickerOption = forwardRef((props, ref) => {
    const {
        name,
        selected,
        avatar,
        image,
        onChange
    } = props;

    const onSelect = function (event) {
        onChange(event);
    }

    const avatarPickerOptionClasses = classNames({
        AvatarPicker__option: true,
        'AvatarPicker__option--selected': !!selected
    });

    return (
        <label className={ avatarPickerOptionClasses }>
            <input
                ref={ ref }
                type="radio"
                value={ avatar }
                name={ name }
                className="AvatarPicker__option__input"
                onChange={ onSelect }
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
