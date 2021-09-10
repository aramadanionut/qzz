import StoryRouter from 'storybook-react-router';
import { addDecorator } from '@storybook/react';

addDecorator(StoryRouter());

export const parameters = {
  actions: {
    argTypesRegex: "^on[A-Z].*"
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'dark',
        value: '#0b2c52',
      },
      {
        name: 'light',
        value: '#3b5998',
      },
    ],
  },
}