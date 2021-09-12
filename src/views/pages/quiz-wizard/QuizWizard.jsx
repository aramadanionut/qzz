import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";

import useFetch from "hooks/useFetch";

import { getQuizUrl, getQuizSteps } from "services/quiz.service";
import { parseQuestions } from "services/question.service";

import { BUTTON_TYPES, COLORS, DIRECTIONS, FETCH_STATUSES, QUIZ_MINUTES_PER_QUESTION, SIZES } from "utils/constants";

import { Question } from "components/question/Question";
import Spinner from "components/spinner/Spinner";
import Button from "components/common/buttons/button/Button";
import ProgressBar from "components/progress-bar/ProgressBar";

import './QuizWizard.scss';
import classNames from "classnames";
import Timer from "components/timer/Timer";
import { QUIZ_BUILDER_FORM } from "utils/forms";

export default function QuizWizard(props) {
    // History and location hooks
    const history = useHistory();
    const location = useLocation();
    const quizParams = location.state;

    // Form hook
    const { register, watch, handleSubmit } = useForm({ mode: 'onChange' });
    const answers = watch();

    // Fetch hook
    const url = getQuizUrl(quizParams);
    const count = quizParams[QUIZ_BUILDER_FORM.COUNT];
    const { status, data } = useFetch(url);

    // Parse fetch data
    const isDataFetched = (status === FETCH_STATUSES.FETCHED);
    const questions = parseQuestions(data);
    const steps = getQuizSteps(questions, answers);

    // Track current question index
    const [ questionIndex, setQuestionIndex ] = useState(0);
    const isFirstQuestion = questionIndex === 0;
    const isLastQuestion = questionIndex === steps.length - 1;

    // Classes
    const formActionClasses = classNames({
        QuizWizard__form__actions: true,
        'QuizWizard__form__actions--right': !!isFirstQuestion
    });

    // isSubmitting and isTimedOut
    const [ isSubmitting, setIsSubmitting ] = useState(false);
    const [ isTimedOut, setIsTimedOut ] = useState(false);

    const onSubmit = (timedOut) => (data) => {
        setIsSubmitting(true);
        setIsTimedOut(timedOut);

        setTimeout(() => {
            history.push('/results', {
                answers: data,
                questions,
                quizParams
            });
        }, 1500);
    }

    return (
        <div className="QuizWizard">

            {isSubmitting && (
                <div className="QuizWizard__spinner">
                    <Spinner
                        size={ 100 }
                        heading={ isTimedOut ? "Sorry, time's up" : '' }
                        text="Submitting your answers...">
                    </Spinner>
                </div>
            )}

            {!isSubmitting && !isDataFetched && (
                <div className="QuizWizard__spinner">
                    <Spinner
                        size={ 100 }
                        text="Think of some questions...">
                    </Spinner>
                </div>
            )}

            {!isSubmitting && isDataFetched && questions && (
                <form
                    className="QuizWizard__form"
                    onSubmit={ handleSubmit(onSubmit(false)) }>
                    

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
                                type={ BUTTON_TYPES.SUBMIT }
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
                        <Timer
                            minutes={ QUIZ_MINUTES_PER_QUESTION * count }
                            seconds={ 0 }
                            onFinished={ () => onSubmit(true)(answers) }>
                        </Timer>
                    </div>
                </form>
            )}
        </div>
    )
}