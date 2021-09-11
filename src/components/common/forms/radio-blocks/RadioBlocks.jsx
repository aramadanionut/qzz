import React, { useState } from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './RadioBlocks.scss';

export default function RadioBlocks(props) {
    const [ selected, setSelected ] = useState(null);

    const {
        name,
        options
    } = props;

    return (
        <div className="RadioBlocks">
            { options.map((option) => (
                <RadioBlock
                    key={ `option-${option.value}` }
                    name={ name }
                    value={ option.value }
                    label={ option.label }
                    selected={ option.value === selected }
                    onSelect={ setSelected }>
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
};

RadioBlocks.defaultProps = {
};