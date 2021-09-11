import React from "react";

import Logo from 'components/logo/Logo';
import Avatar from 'components/avatar/Avatar';
import { POSITIONS, SIZES } from 'utils/constants';

import './Header.scss';
import { Link } from "react-router-dom";
import { useStore } from "hooks/useStore";

export default function Header(props) {
    const [ user ] = useStore('user');

    return (
        <header className="Header">
            <div className="Header__logo-push"></div>
            <div className="Header__logo">
                <Link to="/">
                    <Logo size={ SIZES.MEDIUM }></Logo>
                </Link>
            </div>
            <div className="Header__avatar">
                {user && user.username && user.avatar && (
                    <Avatar
                        name={ user.username }
                        image={ user.avatar }
                        imagePosition={ POSITIONS.END }>
                    </Avatar>
                )}
            </div>
        </header>
    );
}