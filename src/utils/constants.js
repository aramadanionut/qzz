import keyMirror from "keymirror";

import { Avatar01Astronaut, Avatar02Bear, Avatar03Ninja, Avatar04Dog, DefaultAvatar } from 'assets/img/avatars/index';

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
    BEAR: null,
    DOG: null,
    NINJA: null,
    DEFAULT: null
});

export const AVATAR_IMAGES = {
    [AVATARS.ASTRONAUT]: Avatar01Astronaut,
    [AVATARS.BEAR]: Avatar02Bear,
    [AVATARS.DOG]: Avatar04Dog,
    [AVATARS.NINJA]: Avatar03Ninja,
    [AVATARS.DEFAULT]: DefaultAvatar
};

// Quiz related

export const QUIZ_MINUTES_PER_QUESTION = 2;

// Question related

export const QUESTION_DIFFICULTIES = {
    EASY: 'easy',
    MEDIUM: 'medium',
    HARD: 'hard'
};

export const QUESTION_COUNT = [ 10, 15, 20 ];

export const QUESTION_TYPES = {
    ANY: 'any',
    SINGLE: 'boolean',
    MULTIPLE: 'multiple'
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