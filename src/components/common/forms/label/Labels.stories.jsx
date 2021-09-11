import React from 'react';

import Label from './Label';

export default {
  component: Label,
  title: 'Forms/Label',
}

export const Primary = (args) => (
  <Label { ...args }>
  </Label>
);

Primary.args = {
    text: 'This is a field label',
    serif: false,
    large: false
};