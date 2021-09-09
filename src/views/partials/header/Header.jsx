import React from "react";

import Logo from 'views/partials/logo/Logo';

import './Header.scss';

export default function Header(props) {
    return (
        <header className="Header">
            <Logo></Logo>
        </header>
    );
}