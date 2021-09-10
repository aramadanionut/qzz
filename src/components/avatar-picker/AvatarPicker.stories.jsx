import React from 'react';

import { AVATARS, POSITIONS } from 'utils/constants';

import AvatarPicker from './AvatarPicker';

export default {
  component: AvatarPicker,
  title: 'Components/AvatarPicker',
  argTypes: {
    
  }
}

export const Primary = (args) => (
  <AvatarPicker>
  </AvatarPicker>
)

Primary.args = {
};