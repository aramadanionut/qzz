import React from "react";

import TextField from "components/common/forms/text-field/TextField";

import './Login.scss';

export default function Login(props) {
    return (
        <div className="Login">
            <h3 class="Login__header">Nice to meet you!</h3>
            <p class="Login__text">Before we start, tell us a bit about yourself</p>
            <div className="Login__form">
                <TextField
                    label="Name"
                    placeholder="Your name, please">
                </TextField>
            </div>
        </div>
    );
}

Login.propTypes = {
};

Login.defaultProps = {
};
