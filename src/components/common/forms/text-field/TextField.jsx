import React, { useState } from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';

import useFocus from 'hooks/useFocus';
import './TextField.scss';

export default function TextField(props) {
    const [ value, setValue ] = useState("");
    const [ focusRef, isFocused ] = useFocus();

    const textFieldContainerClasses = classNames({
        [ 'TextField' ]: true,
        [ 'TextField--focused' ]: isFocused,
        [ 'TextField--has-value']: !!value
    });

    return (
        <div className={ textFieldContainerClasses }>
            <div className="TextField__label-container">
                <label htmlFor="" className="TextField__label">
                    Name
                </label>
            </div>
            <input
                ref={ focusRef }
                value={value}
                className="TextField__input"
                placeholder="Enter some text"
                onChange={e => setValue(e.target.value)}>
            </input>
        </div>
    );
}

TextField.propTypes = {
};

TextField.defaultProps = {
};
