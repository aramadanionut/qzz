import React from "react";

import Logo from 'components/logo/Logo';
import Avatar from 'components/avatar/Avatar';
import { POSITIONS, SIZES } from 'utils/constants';

import './Header.scss';
import { Link } from "react-router-dom";
import { useStore } from "hooks/useStore";

export default function Header(props) {
    const [ username ] = useStore('username');
    const [ avatar ] = useStore('avatar');

    return (
        <header className="Header">
            <div className="Header__logo-push"></div>
            <div className="Header__logo">
                <Link to="/">
                    <Logo size={ SIZES.MEDIUM }></Logo>
                </Link>
            </div>
            <div className="Header__avatar">
                {avatar && (
                    <Avatar
                        name={ username }
                        image={ avatar }
                        imagePosition={ POSITIONS.END }>
                    </Avatar>
                )}
            </div>
        </header>
    );
}