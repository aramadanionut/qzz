import React from "react";
import PropTypes from 'prop-types';

import './Label.scss';

export default function Label(props) {
    const {
        text
    } = props;

    return (
        <label className="Label">
            { text }
        </label>
    );
}

Label.propTypes = {
    text: PropTypes.string
};

Label.defaultProps = {
    text: ''
};
