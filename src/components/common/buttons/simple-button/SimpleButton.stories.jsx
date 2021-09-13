import React from 'react';
import { COLORS } from 'utils/constants';

import SimpleButton from './SimpleButton';

export default {
  component: SimpleButton,
  title: 'Buttons/SimpleButton',
  argTypes: {
    color: {
      options: [ COLORS.PRIMARY, COLORS.SECONDARY ],
      control: {
        type: 'radio'
      }
    },
  }
}

export const Primary = (args) => (
  <SimpleButton { ...args }>
      Click me!
  </SimpleButton>
);

Primary.args = {
  color: COLORS.PRIMARY
};