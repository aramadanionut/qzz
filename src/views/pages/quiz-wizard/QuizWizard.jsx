import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import useFetch from "hooks/useFetch";
import { getQuizUrl } from "services/quiz.service";
import { parseQuizQuestion } from "services/questions.service";
import { FETCH_STATUSES } from "utils/constants";

import { Question } from "components/question/Question";
import Spinner from "components/spinner/Spinner";
import Button from "components/common/buttons/button/Button";

import './QuizWizard.scss';

export default function QuizWizard(props) {
    const location = useLocation();
    const quizParams = location.state;

    const url = getQuizUrl(quizParams);
    const { status, data } = useFetch(url);

    const isDataFetched = (status === FETCH_STATUSES.FETCHED);
    const questions = data && data.results && parseQuizQuestion(data.results);

    const [ questionIndex, setQuestionIndex ] = useState(0);

    return (
        <div className="QuizWizard">

            {!isDataFetched && (
                <div className="QuizWizard__spinner">
                    <Spinner
                        size={ 100 }
                        text="Think of some questions..">
                    </Spinner>
                </div>
            )}

            {isDataFetched && questions && (
                <div className="QuizWizard__form">
                    {questions.map(({ id, type, question, answers }, index) => (
                        questionIndex === index && (
                            <div
                                key={ id }
                                className="QuizWizard__form__question">
                                <Question
                                    id={ id }
                                    type={ type }
                                    question={ question }
                                    answers={ answers }>
                                </Question>
                            </div>
                        )
                    ))}

                    <div className="QuizWizard__form__button">
                        <Button onClick={() => setQuestionIndex(questionIndex + 1)}>Next</Button>
                    </div>
                </div>
            )}
        </div>
    )
}