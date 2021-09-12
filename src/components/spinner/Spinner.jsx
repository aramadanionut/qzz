import React from "react";
import PropTypes from 'prop-types';

import './Spinner.scss';

export default function Spinner(props) {
    const { size, heading, text } = props;

    const spinnerCubeStyle = {
        width: size,
        height: size
    };

    return (
        <div className="Spinner">
            <div
                className="Spinner__cube-grid"
                style={ spinnerCubeStyle }>
                <div className="Spinner__cube Spinner__cube-1"></div>
                <div className="Spinner__cube Spinner__cube-2"></div>
                <div className="Spinner__cube Spinner__cube-3"></div>
                <div className="Spinner__cube Spinner__cube-4"></div>
                <div className="Spinner__cube Spinner__cube-5"></div>
                <div className="Spinner__cube Spinner__cube-6"></div>
                <div className="Spinner__cube Spinner__cube-7"></div>
                <div className="Spinner__cube Spinner__cube-8"></div>
                <div className="Spinner__cube Spinner__cube-9"></div>
            </div>

            {(heading || text) && (
                <div className="Spinner__header">
                    {heading && (
                        <p className="Spinner__heading">{ heading }</p>
                    )}
                    {text && (
                        <p className="Spinner__text">{ text }</p>
                    )}
                </div>
            )}
        </div>
    );
};

Spinner.propTypes = {
    size: PropTypes.number,
    heading: PropTypes.string,
    text: PropTypes.string,
};

Spinner.defaultProps = {
    size: 60,
    heading: '',
    text: '',
};
