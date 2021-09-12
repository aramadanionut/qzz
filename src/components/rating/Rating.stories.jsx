import React from 'react';

import Rating from './Rating';

export default {
  component: Rating,
  title: 'Components/Rating',
}

export const Primary = (args) => (
  <Rating { ...args }>
  </Rating>
)

Primary.args = {
    value: 3,
    total: 5
};