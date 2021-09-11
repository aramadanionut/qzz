import React from 'react';
import { QUESTION_TYPES } from 'utils/constants';

import { Question } from './Question';

export default {
  component: Question,
  title: 'Components/Question',
}

export const Primary = (args) => (
  <Question { ...args }>
  </Question>
);

Primary.args = {
    type: QUESTION_TYPES.SINGLE,
    question: 'How big is the universe?',
    answers: [
      { value: 'kinda_small', label: 'Kinda small', correct: false },
      { value: 'not_that_big', label: 'Kinda small', correct: false },
      { value: 'average_sized', label: 'Kinda small', correct: false },
      { value: 'really_big', label: 'Kinda small', correct: true },
    ]
};