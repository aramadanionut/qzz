import React from 'react';
import useState from 'storybook-addon-state';

import ProgressBar from './ProgressBar';

export default {
  component: ProgressBar,
  title: 'Components/ProgressBar',
};

export const Primary = (args) => {
  const [ index, setIndex ] = useState('clicks', 0);

  return (
    <ProgressBar
      { ...args }
      activeStepIndex={ index }
      onChange={ (index) => setIndex(index) }>
    </ProgressBar>
  )
};

Primary.args = {
  vertical: false,
  canNavigate: false,
  inline: true,
  steps: [
    { index: 0, completed: false },
    { index: 1, completed: false },
    { index: 2, completed: false },
    { index: 3, completed: false },
    { index: 4, completed: false },
    { index: 5, completed: false },
    { index: 6, completed: false },
    { index: 7, completed: false },
    { index: 8, completed: false },
    { index: 9, completed: false },
  ]
};