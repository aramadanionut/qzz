import React, { forwardRef, useState } from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';

import useFocus from 'hooks/useFocus';
import { POSITIONS } from "utils/constants";

import './TextField.scss';

export const TextField = forwardRef((props, ref) => {
    const {
        name,
        label,
        placeholder,
        align,
    } = props;

    const [ value, setValue ] = useState("");

    const textFieldContainerClasses = classNames({
        TextField: true,
        'TextField--has-label': !!label,
        'TextField--has-value': !!value,
        [ `TextField--align-${ align.toLowerCase() }` ]: !!align
    });

    const onChange = (event) => {
        setValue(event.target.value);

        if (props.onChange) {
            props.onChange(ref ? event : event.target.value);
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
                ref={ ref }
                name={ name }
                className="TextField__input"
                placeholder={ placeholder }
                onChange={ onChange }>
            </input>
        </div>
    );
});

TextField.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    align: PropTypes.oneOf(Object.values(POSITIONS))
};

TextField.defaultProps = {
    name: '',
    label: null,
    placeholder: '',
    align: POSITIONS.START
};
