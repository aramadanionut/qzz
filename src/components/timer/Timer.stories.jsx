import React from 'react';

import Timer from './Timer';

export default {
  component: Timer,
  title: 'Components/Timer',
}

export const Primary = (args) => (
  <Timer { ...args }></Timer>
);

Primary.args = {
};