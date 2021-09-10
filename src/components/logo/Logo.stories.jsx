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

export const Primary = (args) => (
  <Logo
    showName={ args.showName }
    showTagline={ args.showTagline }
    size={ args.size }>
  </Logo>
);

Primary.args = {
  showName: true,
  showTagline: true,
  size: SIZES.SMALL
};