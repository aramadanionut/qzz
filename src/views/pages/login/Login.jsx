import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import Button from "components/common/buttons/button/Button";
import { TextField } from "components/common/forms/text-field/TextField";
import { AvatarPicker } from "components/avatar-picker/AvatarPicker";

import { COLORS, POSITIONS } from "utils/constants";
import { useStore } from 'hooks/useStore';

import './Login.scss';

export default function Login(props) {
    const { register, watch, handleSubmit, formState } = useForm();

    const history = useHistory();
    const [ user, setUser ] = useStore('user');

    if (user) {
        history.push('/');
    }

    const username = watch('username');
    const avatar = watch('avatar');
    
    function storeUser() {
        setUser({ username, avatar });
        history.push('/quiz-builder');
    }

    return (
        <div className="Login">
            <h3 className="Login__heading">Nice to meet you{ username && `, ${username}` }!</h3>
            <p className="Login__text">Before we start, tell us a bit about yourself</p>
            <div className="Login__form">
                <div className="Login__form__name">
                    <TextField
                        label="Username"
                        placeholder="Your username, please"
                        align={ POSITIONS.CENTER }
                        { ...register('username', { required: true }) }>
                    </TextField>
                </div>

                <div className="Login__form__avatar">
                    <p className="Login__form__avatar__label">
                        Choose your avatar
                    </p>

                    <div className="Login__form__avatar__picker">
                        <AvatarPicker
                            { ...register('avatar', { required: true }) }>
                        </AvatarPicker>
                    </div>
                </div>

                <div className="Login__form__button">
                    <AnimatePresence initial={false}>
                        {(username && avatar) && (
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
                                    color={ COLORS.PRIMARY }
                                    onClick={ storeUser }>
                                    Let's go
                                </Button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}

Login.propTypes = {
};

Login.defaultProps = {
};
