import React, { forwardRef, useState } from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SanitizedHTML from 'react-sanitized-html';

import './Select.scss';

export const Select = forwardRef((props, ref) => {
    const {
        inline,
        name,
        options,
        onChange,
        onBlur
    } = props;

    const [ selected, setSelected ] = useState();

    const onSelect = (event) => {
        setSelected(event.target.value);

        if (onChange && typeof onChange === 'function') {
            onChange(ref ? event : event.target.value);
        }
    }

    const SelectClasses = classNames({
        Select: true,
        'Select--inline': !!inline
    })

    return (
        <div className={ SelectClasses }>
            { options && options.length && options.map((option) => (
                <SelectOption
                    ref={ ref }
                    key={ `option-${option.value}` }
                    name={ name }
                    value={ option.value }
                    label={ option.label }
                    selected={ option.value === selected }
                    onChange={ onSelect }
                    onBlur={ onBlur }>
                </SelectOption>
            ))}
        </div>
    )
});

Select.propTypes = {
    inline: PropTypes.bool,
    name: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]).isRequired,
        label: PropTypes.string.isRequired
    })),
    onChange: PropTypes.func
};

Select.defaultProps = {
    inline: true,
    name: null,
    options: [],
    onChange: () => {}
};

// SelectOption

const SelectOption = forwardRef((props, ref) => {
    const {
        name,
        value,
        label,
        selected,
        onChange,
        onBlur
    } = props;

    const SelectOptionClasses = classNames({
        SelectOption: true,
        'SelectOption--selected': !!selected
    });

    return (
        <label className={ SelectOptionClasses }>
            <div className="SelectOption__wrapper">
                <input
                    ref={ ref }
                    type="radio"
                    value={ value }
                    name={ name }
                    className="SelectOption__input"
                    onChange={ onChange }
                    onBlur={ onBlur }
                />
                <div className="SelectOption__dot"></div>
                <div className="SelectOption__text">
                    <SanitizedHTML html={ label }/>
                </div>
            </div>
        </label>
    );
});

SelectOption.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    label: PropTypes.string,
    selected: PropTypes.bool,
    onChange: PropTypes.func,
    onBlur: PropTypes.func
};

SelectOption.defaultProps = {
    name: null,
    value: null,
    label: null,
    selected: false,
    onChange: () => {},
    onBlur: () => {}
};