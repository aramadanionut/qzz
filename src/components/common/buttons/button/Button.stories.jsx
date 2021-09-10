import React from 'react';

import { SIZES } from 'utils/constants'

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
    }
  }
}

export const Primary = (args) => <Button size={ args.size }>Start the quiz</Button>;

Primary.args = {
    size: SIZES.MEDIUM
};