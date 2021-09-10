import React from 'react';

import { COLORS, SIZES } from 'utils/constants'

import Button from './Button';

export default {
  component: Button,
  title: 'Components/Button',
  argTypes: {
    size: {
      options: [ SIZES.SMALL, SIZES.MEDIUM, SIZES.LARGE ],
      control: {
        type: 'radio'
      }
    },
    color: {
      options: [ COLORS.PRIMARY, COLORS.SECONDARY ],
      control: {
        type: 'radio'
      }
    }
  }
}

export const Primary = (args) => (
  <Button
    size={ args.size }
    color={ args.color }>
    Start the quiz
  </Button>
);

Primary.args = {
  size: SIZES.MEDIUM,
  color: COLORS.PRIMARY
};