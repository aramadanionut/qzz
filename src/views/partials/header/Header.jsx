import React from "react";
import { Link, useHistory } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChessQueen, faSignInAlt } from '@fortawesome/free-solid-svg-icons';

import { useStore } from "hooks/useStore";
import useWindowSize from "hooks/useWindowSize";

import Logo from 'components/logo/Logo';
import Avatar from 'components/avatar/Avatar';

import { POSITIONS, SIZES } from 'utils/constants';
import { STORE_KEYS } from "utils/store-keys";

import './Header.scss';

export default function Header(props) {
    const history = useHistory();
    const [ user ] = useStore(STORE_KEYS.USER);
    const windowSize = useWindowSize();

    const onChangeUser = function() {
        history.push('/login');
    }

    return (
        <header className="Header">
            <div className="Header__logo">
                <Link to="/">
                    <Logo
                        size={ SIZES.MEDIUM }
                        showName={ !windowSize.isMobile }
                        showTagline={ !windowSize.isMobile }
                        >
                    </Logo>
                </Link>
            </div>
            <div className="Header__menu">
                <div className="Header__menu__links">
                    <Link
                        className="Header__menu__link"
                        to="/leaderboard">
                        <span className="Header__menu__link__text">Leaderboard</span>
                        <FontAwesomeIcon className="Header__menu__link__icon" icon={ faChessQueen }/>
                    </Link>
                    {!user && (
                        <Link
                            className="Header__menu__link"
                            to="/login">
                            <span className="Header__menu__link__text">Login</span>
                            <FontAwesomeIcon className="Header__menu__link__icon" icon={ faSignInAlt }/>
                        </Link>
                    )}
                </div>
                <div className="Header__menu__avatar">
                    {user && user.username && user.avatar && (
                        <Avatar
                            name={ user.username }
                            image={ user.avatar }
                            imagePosition={ POSITIONS.END }
                            canChange={ true }
                            onChangeUser={ onChangeUser }>
                        </Avatar>
                    )}
                </div>
            </div>
        </header>
    );
}