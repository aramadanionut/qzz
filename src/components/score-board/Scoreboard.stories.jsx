import React from 'react';
import { AVATARS, QUESTION_DIFFICULTIES } from 'utils/constants';

import Scoreboard from './Scoreboard';

export default {
  component: Scoreboard,
  title: 'Components/Scoreboard',
}

export const Primary = (args) => (
  <Scoreboard { ...args }>
  </Scoreboard>
)

Primary.args = {
    entries: [
        {
            user: { name: 'danarama', avatar: AVATARS.ASTRONAUT },
            difficulty: QUESTION_DIFFICULTIES.EASY,
            score: 100
        },
        {
            user: { name: 'ronaoros', avatar: AVATARS.DOG },
            difficulty: QUESTION_DIFFICULTIES.MEDIUM,
            score: 200
        }
    ]
};