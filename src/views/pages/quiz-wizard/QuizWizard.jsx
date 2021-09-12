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
import classNames from "classnames";
import Timer from "components/timer/Timer";

export default function QuizWizard(props) {
    // Location hook
    const location = useLocation();
    const quizParams = location.state;

    // Form hook
    const { register, watch, handleSubmit, formState } = useForm({ mode: 'onChange' });
    const answers = watch();

    // Fetch hook
    const url = getQuizUrl(quizParams);
    const { status, data } = useFetch(url);

    // Data parsing
    const isDataFetched = (status === FETCH_STATUSES.FETCHED);
    const questions = parseQuestions(data);
    const steps = getQuizSteps(questions, answers);

    // Track index
    const [ questionIndex, setQuestionIndex ] = useState(0);
    const isFirstQuestion = questionIndex === 0;
    const isLastQuestion = questionIndex === steps.length - 1;

    // Classes
    const formActionClasses = classNames({
        QuizWizard__form__actions: true,
        'QuizWizard__form__actions--right': !!isFirstQuestion
    })

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
                    

                    {questions && questions.length && (
                        <div className="QuizWizard__form__questions">
                            {questions.map(({ id, type, question, answers }, index) => {
                                if (questionIndex === index) {
                                    return (
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
                                }
                            })}
                        </div>
                    )}

                    <div className={ formActionClasses }>
                        {!isFirstQuestion && (
                            <Button
                                size={ SIZES.SMALL }
                                direction={ DIRECTIONS.LEFT }
                                onClick={() => setQuestionIndex(questionIndex - 1)}>
                                Previous
                            </Button>
                        )}

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

                    <div className="QuizWizard__form__timer">
                        <Timer></Timer>
                    </div>
                </div>
            )}
        </div>
    )
}