import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import Label from 'components/common/forms/label/Label';
import { Select } from 'components/common/forms/select/Select';

import './Question.scss';

export const Question = forwardRef((props, ref) => {
    const {
        id,
        question,
        answers,
        onChange
    } = props;

    return (
        <div className="Question">
            <Label
                text={ question }
                serif={ true }
                large={ true }>
            </Label>
            <Select
                ref={ ref }
                name={ id }
                inline={ false }
                options={ answers }
                onChange={ onChange }>
            </Select>
        </div>
    )
});

Question.propTypes = {
    question: PropTypes.string.isRequired,
    answers: PropTypes.array.isRequired,
};

Question.defaultProps = {
    question: '',
    answers: []
};