import React, { forwardRef, useState } from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './RadioBlocks.scss';

export const RadioBlocks = forwardRef((props, ref) => {
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

    const radioBlocksClasses = classNames({
        RadioBlocks: true,
        'RadioBlocks--inline': !!inline
    })

    return (
        <div className={ radioBlocksClasses }>
            { options && options.length && options.map((option) => (
                <RadioBlock
                    ref={ ref }
                    key={ `option-${option.value}` }
                    name={ name }
                    value={ option.value }
                    label={ option.label }
                    selected={ option.value === selected }
                    onChange={ onSelect }
                    onBlur={ onBlur }>
                </RadioBlock>
            ))}
        </div>
    )
});

RadioBlocks.propTypes = {
    name: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]).isRequired,
        label: PropTypes.string.isRequired
    })),
    onChange: PropTypes.func
};

RadioBlocks.defaultProps = {
    inline: true,
    name: null,
    options: [],
    onChange: () => {}
};

const RadioBlock = forwardRef((props, ref) => {
    const {
        name,
        value,
        label,
        selected,
        onChange,
        onBlur
    } = props;

    const radioBlockClasses = classNames({
        RadioBlock: true,
        'RadioBlock--selected': !!selected
    });

    return (
        <label className={ radioBlockClasses }>
            <div className="RadioBlock__wrapper">
                <input
                    ref={ ref }
                    type="radio"
                    value={ value }
                    name={ name }
                    className="RadioBlock__input"
                    onChange={ onChange }
                    onBlur={ onBlur }
                />
                <div className="RadioBlock__dot"></div>
                <div className="RadioBlock__text">{ label }</div>
            </div>
        </label>
    );
});