import React from "react";
import { Link, useHistory } from "react-router-dom";

import Logo from 'components/logo/Logo';
import Avatar from 'components/avatar/Avatar';
import { POSITIONS, SIZES } from 'utils/constants';

import './Header.scss';
import { useStore } from "hooks/useStore";

export default function Header(props) {
    const history = useHistory();

    const [ user, setUser ] = useStore('user');

    const onChangeUser = function() {
        setUser(null);

        setTimeout(() => {
            history.push('/login');
        }, 0);
    }

    return (
        <header className="Header">
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
                        imagePosition={ POSITIONS.END }
                        canChange={ true }
                        onChangeUser={ onChangeUser }>
                    </Avatar>
                )}
            </div>
        </header>
    );
}