import React, { useState, useEffect, useCallback } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";

import Spinner from "components/spinner/Spinner";
import Score from "components/score/Score";
import Button from "components/common/buttons/button/Button";

import { scoreQuiz } from "services/quiz.service";
import { isObjEmpty } from "utils/helpers";

import './QuizResults.scss';
import { STORE_KEYS } from "utils/store-keys";
import { useStore } from "hooks/useStore";

export default function QuizResults(props) {
    const history = useHistory();
    const location = useLocation();
    const state = location.state || {};

    if (isObjEmpty(state)) {
        history.push('/builder');
    }

    const { questions, answers, quizParams } = state;

    const [ user ] = useStore(STORE_KEYS.USER);
    const [ leaderboard, setLeaderboard ] = useStore(STORE_KEYS.LEADERBOARD, []);
    const [ isCalculating, setIsCalculating ] = useState(true);

    const [ result, setResult ] = useState({
        score: 0,
        scorePerQuestion: 0,
        correct: 0,
        total: 0
    });

    const saveScore = () => {
        const quizResult = scoreQuiz({
            questions,
            answers,
            params: quizParams
        });

        setResult(quizResult);

        if (quizResult.score > 0) {
            leaderboard.push({
                user,
                difficulty: quizParams.difficulty,
                score: quizResult.score,
            });

            // TODO: add update to useStore
            setLeaderboard(leaderboard);
        }
    };

    useEffect(() => {
        const timeoutID = setTimeout(() => {
            saveScore();
            setIsCalculating(false);
        }, 1000);

        return () => clearTimeout(timeoutID);
    }, []);

    return (
        <div className="QuizResults">
            {isCalculating && (
                <div className="QuizResults__spinner">
                    <Spinner
                        size={ 40 }
                        text="Let's see how you did">
                    </Spinner>
                </div>
            )}

            {!isCalculating && (
                <div className="QuizResults__score">
                    <Score
                        score={ result.score }
                        scorePerQuestion={ result.scorePerQuestion }
                        correct={ result.correct }
                        total={ result.total }>
                    </Score>
                </div>
            )}

            {!isCalculating && (
                <div className="QuizResults__actions">
                    <Link to="/builder">
                        <Button>
                            Try again?
                        </Button>
                    </Link>
                </div>
            )}
        </div>
    )
}