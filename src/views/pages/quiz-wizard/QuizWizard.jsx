import React from "react";
import { useLocation } from "react-router-dom";

import useFetch from "hooks/useFetch";
import { Question } from "components/question/Question";
import { getQuizUrl } from "services/quiz.service";
import { parseQuizQuestion } from "services/questions.service";

export default function QuizWizard(props) {
    const location = useLocation();
    const quizParams = location.state;

    const url = getQuizUrl(quizParams);
    const { status, data, error } = useFetch(url);
    const questions = data && data.results && parseQuizQuestion(data.results);

    return (
        <div className="QuizWizard">
            Quiz Wizard
            {questions && questions.map(({ id, type, question, answers }) => (
                <Question
                    key={ id }
                    question={ question }
                    answers={ answers }>
                </Question>
            ))}
        </div>
    )
}