import React from "react";
import PropTypes from 'prop-types';

import Avatar from "components/avatar/Avatar";
import Rating from "components/rating/Rating";
import Button from "components/common/buttons/button/Button";

import { AVATARS, QUESTION_DIFFICULTIES } from "utils/constants";
import { sortByKey } from "utils/helpers";

import './Scoreboard.scss';
import { Link } from "react-router-dom";

export default function Scoreboard(props) {
    const { entries } = props;

    const sortedEntries = sortByKey(entries || [], 'score', 'desc').filter((entry) => !!entry.score);
    const hasEntries = sortedEntries.length > 0;

    return (
        <div className="Scoreboard">
            {!hasEntries && (
                <div className="Scoreboard__empty">
                    <div className="Scoreboard__empty__text">
                        <p>The scoreboard is empty.</p>
                        <p>Now's your time to shine!</p>
                    </div>
                    <div className="Scoreboard__empty__actions">
                        <Link to="/builder">
                            <Button>Play</Button>
                        </Link>
                    </div>
                </div>
            )}
            
            {hasEntries && (
                <div className="Scoreboard__entries">
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
            )}
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
                    name={ user.username }
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
        user: PropTypes.shape({ username: PropTypes.string, avatar: PropTypes.oneOf(Object.values(AVATARS))}),
        difficulty: PropTypes.oneOf(Object.values(QUESTION_DIFFICULTIES)),
        score: PropTypes.number
    }))
};

Scoreboard.defaultProps = {
    entries: []
};
