import React from "react";

import Scoreboard from "components/score-board/Scoreboard";
import { useStore } from "hooks/useStore";
import { STORE_KEYS } from "utils/store-keys";

import './Leaderboard.scss';

export default function Leaderboard(props) {
    const [ leaderboardEntries, setLeaderboardEntries ] = useStore(STORE_KEYS.LEADERBOARD);

    return (
        <div className="Leaderboard">
            <h3 className="Leaderboard__heading">Leaderboard</h3>
            <div className="Leaderboard__scoreboard">
                <Scoreboard entries={ leaderboardEntries }></Scoreboard>
            </div>
        </div>
    );
}

