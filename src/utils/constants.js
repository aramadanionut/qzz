import keyMirror from "keymirror";

import {
    Avatar01Astronaut,
    Avatar02Bear,
    Avatar03Ninja,
    Avatar04Dog,
    DefaultAvatar
} from 'assets/img/avatars/index';

export const SIZES = keyMirror({
    SMALL: null,
    MEDIUM: null,
    LARGE: null
});

export const POSITIONS = keyMirror({
    START: null,
    CENTER: null,
    END: null
})

export const AVATARS = keyMirror({
    ASTRONAUT: null,
    BEAR: null,
    NINJA: null,
    DOG: null,
    DEFAULT: null
});

export const AVATAR_IMAGES = {
    [AVATARS.ASTRONAUT]: Avatar01Astronaut,
    [AVATARS.BEAR]: Avatar02Bear,
    [AVATARS.NINJA]: Avatar03Ninja,
    [AVATARS.DOG]: Avatar04Dog,
    [AVATARS.DEFAULT]: DefaultAvatar
};

