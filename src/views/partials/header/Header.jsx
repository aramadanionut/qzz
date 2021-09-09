import React from "react";

import Logo from 'components/logo/Logo';
import Avatar from 'components/avatar/Avatar';
import { SIZES } from 'utils/constants';

import './Header.scss';

export default function Header(props) {
    return (
        <header className="Header">
            <div className="Header__logo">
                <Logo size={ SIZES.SMALL }></Logo>
            </div>
            <div className="Header__avatar">
                <Avatar></Avatar>
            </div>
        </header>
    );
}