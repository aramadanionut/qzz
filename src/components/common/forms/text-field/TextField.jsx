import React, { useState } from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import useFocus from 'hooks/useFocus';
import './TextField.scss';
import { POSITIONS } from "utils/constants";

export default function TextField(props) {
    const {
        label,
        placeholder,
        align
    } = props;

    const [ value, setValue ] = useState("");
    const [ focusRef, isFocused ] = useFocus();

    const textFieldContainerClasses = classNames({
        [ 'TextField' ]: true,
        [ 'TextField--focused' ]: isFocused,
        [ 'TextField--has-label' ]: !!label,
        [ 'TextField--has-value']: !!value,
        [ `TextField--align-${ align.toLowerCase() }` ]: !!align
    });

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
                onChange={e => setValue(e.target.value)}>
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
