import React from "react";
import PropTypes from 'prop-types';
import SanitizedHTML from 'react-sanitized-html';

import './Label.scss';
import classNames from "classnames";

export default function Label(props) {
    const { text, info, serif, large } = props;

    const labelClasses = classNames({
        Label: true,
        'Label--serif': serif,
        'Label--large': large
    });

    return (
        <label className={ labelClasses }>
            <span className="Label__text"><SanitizedHTML html={ text }/></span>
            <span className="Label__info"><SanitizedHTML html={ info }/></span>
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
