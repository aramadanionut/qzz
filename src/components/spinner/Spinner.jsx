import React from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Spinner.scss';

export default function Spinner(props) {
    const {
        size,
        text
    } = props;

    const spinnerCubeStyle = {
        width: size,
        height: size
    };

    return (
        <div className="Spinner" >
            {text && (
                <p className="Spinner__text">{ text }</p>
            )}
            <div
                class="Spinner__cube-grid"
                style={ spinnerCubeStyle }>
                <div class="Spinner__cube Spinner__cube-1"></div>
                <div class="Spinner__cube Spinner__cube-2"></div>
                <div class="Spinner__cube Spinner__cube-3"></div>
                <div class="Spinner__cube Spinner__cube-4"></div>
                <div class="Spinner__cube Spinner__cube-5"></div>
                <div class="Spinner__cube Spinner__cube-6"></div>
                <div class="Spinner__cube Spinner__cube-7"></div>
                <div class="Spinner__cube Spinner__cube-8"></div>
                <div class="Spinner__cube Spinner__cube-9"></div>
            </div>
        </div>
    );
};

Spinner.propTypes = {
    size: PropTypes.number,
    text: PropTypes.string
};

Spinner.defaultProps = {
    size: 60,
    text: ''
};
