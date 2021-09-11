import React from 'react';
import PropTypes from 'prop-types';

import Label from 'components/common/forms/label/Label';
import { Select } from 'components/common/forms/select/Select';

export const Question = (props) => {
    const { id, question, answers } = props;

    return (
        <div className="Question">
            <Label
                text={ question }
                serif={ true }
                large={ true }>
            </Label>
            <Select
                name={ id }
                inline={ false }
                options={ answers }>
            </Select>
        </div>
    )
}

Question.propTypes = {
    question: PropTypes.string.isRequired,
    answers: PropTypes.array.isRequired,
};

Question.defaultProps = {
    question: '',
    answers: []
};