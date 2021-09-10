import React from "react";

import Button from "components/common/buttons/button/Button";
import TextField from "components/common/forms/text-field/TextField";
import AvatarPicker from "components/avatar-picker/AvatarPicker";

import './Login.scss';
import { POSITIONS } from "utils/constants";

export default function Login(props) {
    return (
        <div className="Login">
            <h3 class="Login__header">Nice to meet you!</h3>
            <p class="Login__text">Before we start, tell us a bit about yourself</p>
            <div className="Login__form">
                <div className="Login__form__name">
                    <TextField
                        align={ POSITIONS.CENTER }
                        label="Username"
                        placeholder="Your username, please">
                    </TextField>
                </div>

                <div className="Login__form__avatar">
                    <p className="Login__form__avatar__label">
                        Choose your avatar
                    </p>

                    <div className="Login__form__avatar__picker">
                        <AvatarPicker>
                        </AvatarPicker>
                    </div>
                </div>

                <div className="Login__form__button">
                    <Button>Let's go</Button>
                </div>
            </div>
        </div>
    );
}

Login.propTypes = {
};

Login.defaultProps = {
};
