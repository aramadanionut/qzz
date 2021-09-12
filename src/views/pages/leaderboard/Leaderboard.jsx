import React from "react";

import Scoreboard from "components/score-board/Scoreboard";

import './Leaderboard.scss';

export default function Leaderboard(props) {
    return (
        <div className="Leaderboard">
            <h3 className="Leaderboard__heading">Leaderboard</h3>
            <div className="Leaderboard__scoreboard">
                <Scoreboard></Scoreboard>
            </div>
        </div>
    );
}

