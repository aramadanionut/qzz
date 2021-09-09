import React from "react";
import './Main.scss';

export default function Main(props) {
    return (
        <div className="layout-main">
            <div className="layout-main-inner">
                { props.children }
            </div>
        </div>
    );
}