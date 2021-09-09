import React from 'react';

import { SIZES } from 'utils/constants'

import Logo from './Logo';

export default {
  component: Logo,
  title: 'Components/Logo',
  argTypes: {
    size: {
      options: [ SIZES.SMALL, SIZES.MEDIUM, SIZES.LARGE ],
      control: {
        type: 'radio'
      }
    }
  }
}

export const Primary = (args) => <Logo size={args.size}></Logo>;

Primary.args = {
  size: SIZES.SMALL
};