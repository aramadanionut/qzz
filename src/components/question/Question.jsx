import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Label from 'components/common/forms/label/Label';
import { Select } from 'components/common/forms/select/Select';

import { QUESTION_TYPES } from 'utils/constants';

export const Question = (props) => {
    const {
        id,
        type,
        question,
        answers
    } = props;

    return (
        <div className="Question">
            <Label text={ question }></Label>
            <Select
                name={ id }
                inline={ false }
                options={ answers }>
            </Select>
        </div>
    )
}

Question.propTypes = {
    type: PropTypes.oneOf([ QUESTION_TYPES.SINGLE, QUESTION_TYPES.MULTIPLE ]),
    question: PropTypes.string.isRequired,
    answers: PropTypes.array.isRequired,
};

Question.defaultProps = {
    type: QUESTION_TYPES.SINGLE,
    question: '',
    answers: []
};