import React from 'react';

import RadioBlocks from './RadioBlocks';

export default {
  component: RadioBlocks,
  title: 'Forms/RadioBlocks',
}

const options = [
  { value: 'easy', label: 'Easy' },
  { value: 'medium', label: 'Medium' },
  { value: 'hard', label: 'Hard' },
];

export const Primary = (args) => (
  <RadioBlocks
    options={ args.options }>
  </RadioBlocks>
);

Primary.args = {
  options,
  name: 'difficulty'
};