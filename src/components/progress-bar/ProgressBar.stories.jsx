import React from 'react';

import ProgressBar from './ProgressBar';

export default {
  component: ProgressBar,
  title: 'Components/ProgressBar',
}

export const Primary = (args) => (
  <ProgressBar { ...args }>
  </ProgressBar>
);

Primary.args = {
};