import React from 'react';

import Logo from './Logo';

export default {
  component: Logo,
  title: 'Components/Logo',
}

export const Primary = (args) => <Logo size={args.size}></Logo>;

Primary.args = {
  size: 'small'
};