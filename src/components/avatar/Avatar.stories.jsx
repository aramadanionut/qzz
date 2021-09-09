import React from 'react';

import { AVATARS, POSITIONS } from 'utils/constants';

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
    },
    imagePosition: {
      options: [
        POSITIONS.START,
        POSITIONS.END
      ],
      control: {
        type: 'radio'
      }
    }
  }
}

export const Primary = (args) => (
  <Avatar
    name={ args.name }
    image={ args.image }
    imagePosition={ args.imagePosition }>
  </Avatar>
)

Primary.args = {
  name: 'John Smith',
  image: AVATARS.DEFAULT
};