import React from "react";
import Footer from "views/partials/footer/Footer";

import Header from 'views/partials/header/Header';

import './Main.scss';

export default function Main(props) {
    return (
        <div className="layout-main">
            <Header></Header>
            <div className="layout-main-inner">
                { props.children }
            </div>
            <Footer></Footer>
        </div>
    );
}