import React, { useState } from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';

import useFocus from 'hooks/useFocus';
import { POSITIONS } from "utils/constants";

import './TextField.scss';

export default function TextField(props) {
    const {
        label,
        placeholder,
        align
    } = props;

    const [ value, setValue ] = useState("");
    const [ focusRef, isFocused ] = useFocus();

    const textFieldContainerClasses = classNames({
        TextField: true,
        'TextField--focused': isFocused,
        'TextField--has-label': !!label,
        'TextField--has-value': !!value,
        [ `TextField--align-${ align.toLowerCase() }` ]: !!align
    });

    const onChange = (value) => {
        setValue(value);

        if (props.onChange) {
            props.onChange(value);
        }
    }

    return (
        <div className={ textFieldContainerClasses }>
            {label &&
                <div className="TextField__label-container">
                    <label htmlFor="" className="TextField__label">
                        { label }
                    </label>
                </div>
            }
            <input
                ref={ focusRef }
                value={value}
                className="TextField__input"
                placeholder={ placeholder }
                onChange={e => onChange(e.target.value)}>
            </input>
        </div>
    );
}

TextField.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    align: PropTypes.oneOf(Object.values(POSITIONS))
};

TextField.defaultProps = {
    label: null,
    placeholder: '',
    align: POSITIONS.START
};
