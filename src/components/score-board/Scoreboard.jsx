import React from "react";
import PropTypes from 'prop-types';

import Avatar from "components/avatar/Avatar";
import Rating from "components/rating/Rating";

import { AVATARS, QUESTION_DIFFICULTIES } from "utils/constants";
import { sortByKey } from "utils/helpers";

import './Scoreboard.scss';

export default function Scoreboard(props) {
    const { entries } = props;

    const sortedEntries = sortByKey(entries, 'score');

    return (
        <div className="Scoreboard">
            <div className="Scoreboard__heading">
                <div className="Scoreboard__heading__avatar"></div>
                <div className="Scoreboard__heading__difficulty">Difficulty</div>
                <div className="Scoreboard__heading__score">Score</div>
            </div>
            {sortedEntries.map(({ user, difficulty, score }, index) => (
                <ScoreboardEntry
                    key={ `scoreboard-entry-${index}` }
                    user={ user }
                    difficulty={ difficulty }
                    score={ score }
                />
            ))}
        </div>
    )
};

const ScoreboardEntry = (props) => {
    const { user, difficulty, score } = props;

    const ratingValue = Object.values(QUESTION_DIFFICULTIES).indexOf(difficulty) + 1;
    const ratingsCount = Object.values(QUESTION_DIFFICULTIES).length;

    return (
        <div className="Scoreboard__entry">
            <div className="Scoreboard__entry__avatar">
                <Avatar
                    name={ user.name }
                    image={ user.avatar }
                />
            </div>
            <div className="Scoreboard__entry__difficulty">
                <Rating
                    size={ 6 }
                    value={ ratingValue }
                    total={ ratingsCount }
                />
            </div>
            <div className="Scoreboard__entry__score">
                <span className="Scoreboard__entry__score__value">{ score }</span>
                <span className="Scoreboard__entry__score__label">points</span>
            </div>
        </div>
    )
}

Scoreboard.propTypes = {
    entries: PropTypes.arrayOf(PropTypes.shape({
        user: PropTypes.shape({ name: PropTypes.string, avatar: PropTypes.oneOf(Object.values(AVATARS))}),
        difficulty: PropTypes.oneOf(Object.values(QUESTION_DIFFICULTIES)),
        score: PropTypes.number
    }))
};

Scoreboard.defaultProps = {
    entries: []
};
