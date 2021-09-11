import React, { useState } from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './RadioBlocks.scss';

export default function RadioBlocks(props) {
    const {
        name,
        options,
        onChange
    } = props;

    const [ selected, setSelected ] = useState(null);

    function onSelect(value) {
        setSelected(value);

        if (onChange && typeof onChange === 'function') {
            onChange(value);
        }
    }

    return (
        <div className="RadioBlocks">
            { options && options.length && options.map((option) => (
                <RadioBlock
                    key={ `option-${option.value}` }
                    name={ name }
                    value={ option.value }
                    label={ option.label }
                    selected={ option.value === selected }
                    onSelect={ onSelect }>
                </RadioBlock>
            ))}
        </div>
    )
}

function RadioBlock(props) {
    const {
        name,
        value,
        label,
        selected,
        onSelect
    } = props;

    const radioBlockClasses = classNames({
        RadioBlock: true,
        'RadioBlock--selected': !!selected
    });

    return (
        <label className={ radioBlockClasses }>
            <div className="RadioBlock__wrapper">
                <input
                    type="radio"
                    value={ value }
                    name={ name }
                    className="RadioBlock__input"
                    onClick={() => onSelect(value) }
                />
                <div className="RadioBlock__dot"></div>
                <div className="RadioBlock__text">{ label }</div>
            </div>
        </label>
    );
}

RadioBlocks.propTypes = {
    name: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]).isRequired,
        label: PropTypes.string.isRequired
    })),
    onChange: PropTypes.func
};

RadioBlocks.defaultProps = {
    name: null,
    options: [],
    onChange: () => {}
};