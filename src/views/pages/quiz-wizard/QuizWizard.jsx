import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";

import useFetch from "hooks/useFetch";

import { getQuizUrl, getQuizSteps } from "services/quiz.service";
import { parseQuestions } from "services/questions.service";

import { COLORS, DIRECTIONS, FETCH_STATUSES, SIZES } from "utils/constants";

import { Question } from "components/question/Question";
import Spinner from "components/spinner/Spinner";
import Button from "components/common/buttons/button/Button";
import ProgressBar from "components/progress-bar/ProgressBar";

import './QuizWizard.scss';

export default function QuizWizard(props) {
    const location = useLocation();
    const quizParams = location.state;

    const { register, watch, handleSubmit, formState } = useForm({ mode: 'onChange' });

    const url = getQuizUrl(quizParams);
    const { status, data } = useFetch(url);

    const isDataFetched = (status === FETCH_STATUSES.FETCHED);
    const questions = parseQuestions(data);
    const answers = watch();

    const steps = getQuizSteps(questions, answers);

    const [ questionIndex, setQuestionIndex ] = useState(0);
    const isLastQuestion = questionIndex === steps.length - 1;


    console.log(answers);

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
                                    answers={ answers }
                                    { ...register(id, { required: true })}>
                                </Question>
                            </div>
                        )
                    ))}

                    <div className="QuizWizard__form__actions">
                        <Button
                            size={ SIZES.SMALL }
                            direction={ DIRECTIONS.LEFT }
                            onClick={() => setQuestionIndex(questionIndex - 1)}>
                            Previous
                        </Button>

                        {!isLastQuestion && (
                            <Button
                                size={ SIZES.SMALL }
                                onClick={() => setQuestionIndex(questionIndex + 1)}>
                                Next
                            </Button>
                        )}

                        {isLastQuestion && (
                            <Button
                                size={ SIZES.SMALL }
                                color={ COLORS.SECONDARY }
                                direction={ DIRECTIONS.RIGHT }
                                onClick={ () => console.log('submitting') }>
                                Submit
                            </Button>
                        )}
                    </div>

                    <div className="QuizWizard__form__progress-bar">
                        <ProgressBar
                            activeStepIndex={ questionIndex }
                            steps={ steps }
                            onChange={ setQuestionIndex }>
                        </ProgressBar>
                    </div>
                </div>
            )}
        </div>
    )
}