import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Spinner from "components/spinner/Spinner";

import './QuizResults.scss';
import { scoreQuiz } from "services/quiz.service";
import Score from "components/score/Score";

export default function QuizResults(props) {
    const location = useLocation();
    const state = location.state;
    const { questions, answers, quizParams } = state;

    const [ isCalculating, setIsCalculating ] = useState(true);
    const [ result, setResult ] = useState({ correct: 0, total: 0 });

    useEffect(() => {
        const timeoutID = setTimeout(() => {
            const result = scoreQuiz({
                questions,
                answers,
                params: quizParams
            });

            setResult(result);
            setIsCalculating(false);
        }, 1000);

        return () => clearTimeout(timeoutID);
    }, [])

    return (
        <div className="QuizResults">
            {isCalculating && (
                <div className="QuizResults__spinner">
                    <Spinner
                        size={ 40 }
                        text="Let's see here...">
                    </Spinner>
                </div>
            )}

            {!isCalculating && (
                <div className="QuizResults__score">
                    <Score
                        correct={ result.correct }
                        total={ result.total }>
                    </Score>
                </div>
            )}
        </div>
    )
}