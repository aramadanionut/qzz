import React from "react";

import Logo from 'components/logo/Logo';
import { SIZES } from 'utils/constants';

import './Header.scss';

export default function Header(props) {
    return (
        <header className="Header">
            <Logo size={ SIZES.SMALL }></Logo>
        </header>
    );
}