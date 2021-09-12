import React from "react";
import { useLocation } from "react-router-dom";

import './QuizResults.scss';

export default function QuizResults(props) {
    const location = useLocation();
    const state = location.state;

    console.log(state);

    return (
        <div className="QuizResults">
            Results are in
        </div>
    )
}