import React from "react";
import PropTypes from 'prop-types';

import Avatar from "components/avatar/Avatar";
import { AVATARS, QUESTION_DIFFICULTIES } from "utils/constants";

import './Scoreboard.scss';

export default function Scoreboard(props) {
    const { entries } = props;

    return (
        <div className="Scoreboard">
            <div className="Scoreboard__heading">
                <div className="Scoreboard__heading__avatar"></div>
                <div className="Scoreboard__heading__difficulty">Difficulty</div>
                <div className="Scoreboard__heading__score">Score</div>
            </div>
            {entries.map(({ user, difficulty, score }, index) => (
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

    return (
        <div className="Scoreboard__entry">
            <div className="Scoreboard__entry__avatar">
                <Avatar
                    name={ user.name }
                    image={ user.avatar }
                />
            </div>
            <div className="Scoreboard__entry__difficulty">
                { difficulty }
            </div>
            <div className="Scoreboard__entry__score">
                { score } points
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
