import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import classNames from "classnames";

import Button from "components/common/buttons/button/Button";
import { TextField } from "components/common/forms/text-field/TextField";
import { AvatarPicker } from "components/avatar-picker/AvatarPicker";

import { BUTTON_TYPES, COLORS, POSITIONS } from "utils/constants";
import { LOGIN_FORM } from "utils/forms";
import { STORE_KEYS } from "utils/store-keys";

import { useStore } from 'hooks/useStore';
import useWindowSize from "hooks/useWindowSize";

import './Login.scss';

export default function Login(props) {
    const history = useHistory();
    const windowSize = useWindowSize();

    const { register, watch, handleSubmit, formState } = useForm({ mode: 'onChange' });
    
    // eslint-disable-next-line no-unused-vars
    const [ user, setUser ] = useStore(STORE_KEYS.USER);

    const username = watch(LOGIN_FORM.USERNAME);
    
    const onSubmit = ({ username, avatar }) => {
        setUser({ username, avatar });
        history.push('/builder');
    };

    const loginClassNames = classNames({
        Login: true,
        'Login--mobile': !!windowSize.isMobile
    });

    return (
        <div className={ loginClassNames }>
            <h3 className="Login__heading">Nice to meet you{ username && `, ${username}` }!</h3>
            <p className="Login__text">Before we start, tell us a bit about yourself</p>

            <form
                className="Login__form"
                onSubmit={ handleSubmit(onSubmit) }>
                <div className="Login__form__name">
                    <TextField
                        label="Username"
                        placeholder="Your username, please"
                        align={ POSITIONS.CENTER }
                        { ...register(LOGIN_FORM.USERNAME, { required: true }) }>
                    </TextField>
                </div>

                <div className="Login__form__avatar">
                    <p className="Login__form__avatar__label">
                        Choose your avatar
                    </p>

                    <div className="Login__form__avatar__picker">
                        <AvatarPicker
                            { ...register(LOGIN_FORM.AVATAR, { required: true }) }>
                        </AvatarPicker>
                    </div>
                </div>

                <div className="Login__form__button">
                    {formState.isValid && (
                        <Button
                            type={ BUTTON_TYPES.SUBMIT }
                            color={ COLORS.PRIMARY }>
                            Let's go
                        </Button>
                    )}
                </div>
            </form>
        </div>
    );
}

Login.propTypes = {
};

Login.defaultProps = {
};
