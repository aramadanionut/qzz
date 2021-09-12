import React from 'react';

import Score from './Score';

export default {
  component: Score,
  title: 'Components/Score',
}

export const Primary = (args) => (
  <Score { ...args }>
  </Score>
)

Primary.args = {
    score: 100,
    questionValue: 10,
    correct: 10,
    total: 20
};