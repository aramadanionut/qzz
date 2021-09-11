import React from "react";
import PropTypes from 'prop-types';
import SanitizedHTML from 'react-sanitized-html';

import './Label.scss';
import classNames from "classnames";

export default function Label(props) {
    const { text, serif, large } = props;

    const labelClasses = classNames({
        Label: true,
        'Label--serif': serif,
        'Label--large': large
    });

    return (
        <label className={ labelClasses }>
            <SanitizedHTML html={ text }/>
        </label>
    );
}

Label.propTypes = {
    text: PropTypes.string,
    serif: PropTypes.bool,
    large: PropTypes.bool,
};

Label.defaultProps = {
    text: '',
    serif: false,
    large: false
};
