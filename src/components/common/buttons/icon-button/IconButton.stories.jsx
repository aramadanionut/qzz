import React from 'react';

import { faTimes, faSignInAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import IconButton from './IconButton';

const ICONS = {
    CLOSE: faTimes,
    SIGN_IN: faSignInAlt,
    DELETE: faTrashAlt
};

export default {
  component: IconButton,
  title: 'Buttons/IconButton',
  argTypes: {
    icon: {
      options: Object.keys(ICONS),
      mappings: ICONS,
      control: {
        type: 'radio',
        labels: {
            CLOSE: 'Close',
            SIGN_IN: 'Sign In',
            DELETE: 'Delete'
        }
      }
    },
  }
}

export const Primary = (args) => (
  <IconButton icon={ ICONS[args.icon] }/>
);

Primary.args = {
    icon: ICONS.CLOSE
};