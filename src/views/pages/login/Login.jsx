import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import Button from "components/common/buttons/button/Button";
import { TextField } from "components/common/forms/text-field/TextField";
import { AvatarPicker } from "components/avatar-picker/AvatarPicker";

import { BUTTON_TYPES, COLORS, POSITIONS } from "utils/constants";
import { useStore } from 'hooks/useStore';

import './Login.scss';
import { LOGIN_FORM } from "utils/forms";

export default function Login(props) {
    const history = useHistory();

    const { register, watch, handleSubmit, formState } = useForm({ mode: 'onChange' });
    const [ user, setUser ] = useStore('user');

    // Redirect to home page is already logged in
    if (user) {
        history.push('/');
    }

    const username = watch(LOGIN_FORM.USERNAME);
    
    const onSubmit = ({ username, avatar }) => {
        setUser({ username, avatar });
        history.push('/quiz-builder');
    }

    return (
        <div className="Login">
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
                    <AnimatePresence initial={false}>
                        {formState.isValid && (
                            <motion.div
                                key="content"
                                initial="collapsed"
                                animate="open"
                                exit="collapsed"
                                variants={{
                                    open: {
                                        opacity: 1,
                                        height: "auto",
                                    },
                                    collapsed: {
                                        opacity: 0,
                                        height: 0,
                                    }
                                }}
                                transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}>
                                <Button
                                    type={ BUTTON_TYPES.SUBMIT }
                                    color={ COLORS.PRIMARY }>
                                    Let's go
                                </Button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </form>
        </div>
    );
}

Login.propTypes = {
};

Login.defaultProps = {
};
