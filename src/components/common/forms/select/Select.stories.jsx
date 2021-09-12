import React from 'react';

import { Select } from './Select';

export default {
  component: Select,
  title: 'Forms/Select',
}

const options = [
  { value: 'easy', label: 'Easy' },
  { value: 'medium', label: 'Medium' },
  { value: 'hard', label: 'Hard' },
];

export const Primary = (args) => (
  <Select { ...args }>
  </Select>
);

Primary.args = {
  options,
  name: 'difficulty'
};