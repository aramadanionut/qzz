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
    correct: 10,
    total: 20
};