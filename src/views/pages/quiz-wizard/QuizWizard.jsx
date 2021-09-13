import React, { useState, useEffect, useCallback } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import classNames from "classnames";

import useFetch from "hooks/useFetch";
import useWindowSize from "hooks/useWindowSize";

import { getQuizUrl, getQuizSteps } from "services/quiz.service";
import { parseQuestions } from "services/question.service";

import { BUTTON_TYPES, COLORS, DIRECTIONS, FETCH_STATUSES, QUESTION_DIFFICULTIES, QUIZ_MINUTES_PER_QUESTION, SIZES } from "utils/constants";
import { QUIZ_BUILDER_FORM } from "utils/forms";
import { isObjEmpty } from "utils/helpers";

import { Question } from "components/question/Question";
import Spinner from "components/spinner/Spinner";
import Button from "components/common/buttons/button/Button";
import ProgressBar from "components/progress-bar/ProgressBar";
import Timer from "components/timer/Timer";
import Rating from "components/rating/Rating";

import './QuizWizard.scss';
import useModal from "hooks/useModal";
import Modal from "components/modal/Modal";

export default function QuizWizard(props) {
    // Window size hook
    const windowSize = useWindowSize();

    // History and location hooks
    const history = useHistory();
    const location = useLocation();
    const quizParams = location.state;

    if (isObjEmpty(quizParams)) {
        history.push('/builder');
    }

    // Form hook
    const { register, watch, handleSubmit } = useForm({ mode: 'onChange' });
    const formValues = watch();

    // Fetch hook
    const url = getQuizUrl(quizParams);
    const count = quizParams[QUIZ_BUILDER_FORM.COUNT];
    const { status, data } = useFetch(url);

    // Parse fetch data
    const isDataFetched = (status === FETCH_STATUSES.FETCHED);
    const questions = parseQuestions(data);
    const steps = getQuizSteps(questions, formValues);

    // Track current question index
    const [ selectedQuestion, setSelectedQuestion ] = useState(null);
    const [ questionIndex, setQuestionIndex ] = useState(0);

    const isFirstQuestion = questionIndex === 0;
    const isLastQuestion = questionIndex === steps.length - 1;

    const goToQuestion = useCallback(
        (index) => {
            setSelectedQuestion(questions[index]);
            setQuestionIndex(index);
        },
        [ questions ]
    );

    // Navigate to first question on data load
    useEffect(() => {
        if (isDataFetched) {
            goToQuestion(0);
        }
    }, [ isDataFetched, goToQuestion ]);

    // Classes
    const formClasses = classNames({
        QuizWizard__form: true,
        'QuizWizard__form--mobile': windowSize.isMobile
    });

    const formActionClasses = classNames({
        QuizWizard__form__actions: true,
        'QuizWizard__form__actions--right': !!isFirstQuestion
    });

    const formProgressBarClasses = classNames({
        'QuizWizard__form__progress-bar': true,
        'QuizWizard__form__progress-bar--vertical': windowSize.isMobile
    });

    // isSubmitting and isTimedOut
    const [ isSubmitting, setIsSubmitting ] = useState(false);
    const [ isTimedOut, setIsTimedOut ] = useState(false);

    const ratingValue = Object.values(QUESTION_DIFFICULTIES).indexOf(quizParams[QUIZ_BUILDER_FORM.DIFFICULTY]) + 1;
    const ratingsCount = Object.values(QUESTION_DIFFICULTIES).length;

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
    };

    const {isShowing, toggle} = useModal();

    return (
        <div className="QuizWizard">

            <button className="button-default" onClick={toggle}>Show Modal</button>

            <Modal isShowing={ isShowing } hide={ toggle }>
                <p> Test </p>
            </Modal>

            {isSubmitting && (
                <div className="QuizWizard__spinner">
                    <Spinner
                        size={ 40 }
                        heading={ isTimedOut ? "Sorry, time's up" : '' }
                        text="Checking your answers">
                    </Spinner>
                </div>
            )}

            {!isSubmitting && !isDataFetched && (
                <div className="QuizWizard__spinner">
                    <Spinner
                        size={ 40 }
                        text="Thinking of some questions">
                    </Spinner>
                </div>
            )}

            {!isSubmitting && isDataFetched && questions && !questions.length && (
                <div className="QuizWizard__empty">
                    <p className="QuizWizard__empty__heading">Sorry, I can't think of that many questions.</p>
                    <p className="QuizWizard__empty__text">Want to try to build a new quiz?</p>
                    <div className="QuizWizard__empty__actions">
                        <Link to="/builder">
                            <Button>Try again</Button>
                        </Link>
                    </div>
                </div>
            )}

            {!isSubmitting && isDataFetched && questions && questions.length > 0 && (
                <div className="QuizWizard__quiz">
                    <h3 className="QuizWizard__heading">
                        <span className="QuizWizard__heading__text"> { quizParams.categoryName } </span>
                        <span className="QuizWizard__heading__difficulty">
                            Difficulty
                            <Rating
                                size={ 6 }
                                value={ ratingValue }
                                total={ ratingsCount }
                            />
                        </span>
                    </h3>


                    <form
                        className={ formClasses }
                        onSubmit={ handleSubmit(onSubmit(false)) }>

                        {questions && questions.length && selectedQuestion && (
                            <div className="QuizWizard__form__questions">
                                <div
                                    key={ selectedQuestion.id }
                                    className="QuizWizard__form__question">
                                    <Question
                                        id={ selectedQuestion.id }
                                        type={ selectedQuestion.type }
                                        question={ selectedQuestion.question }
                                        answer={ formValues[selectedQuestion.id] }
                                        answers={ selectedQuestion.answers }
                                        { ...register(selectedQuestion.id) }>
                                    </Question>
                                </div>
                            </div>
                        )}

                        <div className={ formActionClasses }>
                            {!isFirstQuestion && (
                                <Button
                                    simple={ windowSize.isMobile }
                                    size={ SIZES.SMALL }
                                    direction={ DIRECTIONS.LEFT }
                                    onClick={() => goToQuestion(questionIndex - 1)}>
                                    Previous
                                </Button>
                            )}

                            {!isLastQuestion && (
                                <Button
                                    simple={ windowSize.isMobile }
                                    size={ SIZES.SMALL }
                                    onClick={() => goToQuestion(questionIndex + 1)}>
                                    Next
                                </Button>
                            )}

                            {isLastQuestion && (
                                <Button
                                    simple={ windowSize.isMobile }
                                    type={ BUTTON_TYPES.SUBMIT }
                                    size={ SIZES.SMALL }
                                    color={ COLORS.SECONDARY }
                                    direction={ DIRECTIONS.RIGHT }
                                    onClick={ () => console.log('submitting') }>
                                    Submit
                                </Button>
                            )}
                        </div>

                        <div className={ formProgressBarClasses }>
                            <ProgressBar
                                inline={ !windowSize.isMobile }
                                activeStepIndex={ questionIndex }
                                steps={ steps }
                                onChange={ goToQuestion }>
                            </ProgressBar>
                        </div>

                        <div className="QuizWizard__form__timer">
                            <Timer
                                inline={ !windowSize.isMobile }
                                minutes={ QUIZ_MINUTES_PER_QUESTION * count }
                                seconds={ 0 }
                                onFinished={ () => onSubmit(true)(formValues) }>
                            </Timer>
                        </div>
                    </form>
                </div>
            )}
        </div>
    )
}