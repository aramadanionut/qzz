import React from 'react';

import { BUTTON_TYPES, COLORS, DIRECTIONS, SIZES } from 'utils/constants'

import Button from './Button';

export default {
  component: Button,
  title: 'Buttons/Button',
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
    },
    direction: {
      options: [ DIRECTIONS.LEFT, DIRECTIONS.RIGHT ],
      control: {
        type: 'radio'
      }
    },
    type: {
      options: [ BUTTON_TYPES.BUTTON, BUTTON_TYPES.SUBMIT ],
      control: {
        type: 'radio'
      }
    }
  }
}

export const Primary = (args) => (
  <Button { ...args }>Start the quiz</Button>
);

Primary.args = {
  simple: false,
  size: SIZES.MEDIUM,
  color: COLORS.PRIMARY
};