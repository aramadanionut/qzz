import React from 'react';

import { POSITIONS } from 'utils/constants'

import { TextField } from './TextField';

export default {
  component: TextField,
  title: 'Forms/TextField',
  argTypes: {
    align: {
      options: [ POSITIONS.START, POSITIONS.CENTER, POSITIONS.END ],
      control: {
        type: 'radio'
      }
    }
  }
}

export const Primary = (args) => (
  <TextField
    label={ args.label }
    placeholder={ args.placeholder }
    align={ args.align }>
  </TextField>
);

Primary.args = {
  name: 'name',
  label: 'Name',
  placeholder: 'Your name, please',
  align: POSITIONS.START
};