import keyMirror from "keymirror";

import { Avatar01Astronaut, Avatar02Bear, Avatar03Ninja, Avatar04Dog, Avatar05Cat, DefaultAvatar } from 'assets/img/avatars/index';

// Generic

export const COLORS = keyMirror({
    PRIMARY: null,
    SECONDARY: null
});

export const SIZES = keyMirror({
    SMALL: null,
    MEDIUM: null,
    LARGE: null
});

export const DIRECTIONS = keyMirror({
    LEFT: null,
    RIGHT: null
});

export const POSITIONS = keyMirror({
    START: null,
    CENTER: null,
    END: null
});

export const BUTTON_TYPES = {
    BUTTON: 'button',
    SUBMIT: 'submit'
};

export const SELECT_TYPES = {
    SINGLE: 'single',
    MULTIPLE: 'multiple'
};

// Avatars

export const AVATARS = keyMirror({
    ASTRONAUT: null,
    CAT: null,
    DOG: null,
    BEAR: null,
    NINJA: null,
    DEFAULT: null
});

export const AVATAR_IMAGES = {
    [AVATARS.ASTRONAUT]: Avatar01Astronaut,
    [AVATARS.BEAR]: Avatar02Bear,
    [AVATARS.NINJA]: Avatar03Ninja,
    [AVATARS.DOG]: Avatar04Dog,
    [AVATARS.CAT]: Avatar05Cat,
    [AVATARS.DEFAULT]: DefaultAvatar
};

// Question related

export const QUESTION_DIFFICULTIES = {
    EASY: 'easy',
    MEDIUM: 'medium',
    HARD: 'hard'
};

export const QUESTION_COUNT = [ 10, 15, 20 ];

export const QUESTION_TYPES = {
    ANY: 'any',
    BOOLEAN: 'boolean',
    MULTIPLE: 'multiple'
};

// Quiz related

export const QUIZ_MINUTES_PER_QUESTION = 1;

export const QUIZ_SCORE_QUESTION_BASE_POINTS = 10;

export const QUIZ_SCORE_DIFFICULTY_MULTIPLIER = {
    [ QUESTION_DIFFICULTIES.EASY ]: 1,
    [ QUESTION_DIFFICULTIES.MEDIUM ]: 1.5,
    [ QUESTION_DIFFICULTIES.HARD ]: 2
};

// Fetch related

export const QUIZ_QUERY_PARAMS_KEYS = {
    DIFFICULTY: 'difficulty',
    AMOUNT: 'amount',
    CATEGORY: 'category',
    TYPE: 'type'
};

export const FETCH_STATUSES = keyMirror({
    FETCHING: null,
    FETCHED: null,
    FETCH_ERROR: null
});

export const MOBILE_BREAKPOINT = 768;