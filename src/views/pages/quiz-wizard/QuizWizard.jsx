import React from "react";
import { useLocation } from "react-router-dom";

import useFetch from "hooks/useFetch";
import { getQuizUrl } from "services/quiz.service";

export default function QuizWizard(props) {
    const location = useLocation();
    const quizParams = location.state;

    const url = getQuizUrl(quizParams);
    const { status, data, error } = useFetch(url);

    console.log(data);

    return (
        <div className="QuizWizard">
            Quiz Wizard
        </div>
    )
}