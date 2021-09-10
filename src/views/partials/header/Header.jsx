import React from "react";

import Logo from 'components/logo/Logo';
import Avatar from 'components/avatar/Avatar';
import { SIZES } from 'utils/constants';

import './Header.scss';
import { Link } from "react-router-dom";

export default function Header(props) {
    return (
        <header className="Header">
            <div className="Header__logo-push"></div>
            <div className="Header__logo">
                <Link to="/">
                    <Logo size={ SIZES.MEDIUM }></Logo>
                </Link>
            </div>
            <div className="Header__avatar">
                <Avatar></Avatar>
            </div>
        </header>
    );
}