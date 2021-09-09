import React from 'react';

import { AVATARS } from 'utils/constants';

import Avatar from './Avatar';

export default {
  component: Avatar,
  title: 'Components/Avatar',
  argTypes: {
    image: {
      options: [
        AVATARS.ASTRONAUT,
        AVATARS.BEAR,
        AVATARS.NINJA,
        AVATARS.DOG,
        AVATARS.DEFAULT,
      ],
      control: {
        type: 'radio'
      }
    }
  }
}

export const Primary = (args) => <Avatar image={ args.image }></Avatar>;

Primary.args = {
  image: AVATARS.DEFAULT
};