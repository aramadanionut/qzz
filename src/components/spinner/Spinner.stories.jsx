import React from 'react';

import Spinner from './Spinner';

export default {
  component: Spinner,
  title: 'Components/Spinner',
}

export const Primary = (args) => (
  <Spinner
    size={ args.size }
    text={ args.text }>
  </Spinner>
)

Primary.args = {
    size: 40,
    text: 'Just a moment'
};