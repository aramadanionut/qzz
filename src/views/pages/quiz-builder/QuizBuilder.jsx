import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import Label from "components/common/forms/label/Label";
import Button from "components/common/buttons/button/Button";
import Spinner from "components/spinner/Spinner";
import { RadioBlocks } from "components/common/forms/radio-blocks/RadioBlocks";

import useFetch from "hooks/useFetch";
import { quizCategoryLookupUrl, parseQuizCategories } from "services/quiz.service";
import { countOptions, typeOptions, difficultyOptions, buildCategoryOptions } from "services/options.service";
import { BUTTON_TYPES, FETCH_STATUSES } from "utils/constants";

import './QuizBuilder.scss';
import { QUIZ_BUILDER_FORM } from "utils/forms";

export default function QuizBuilder(props) {
    const history = useHistory();

    const { register, handleSubmit, watch, formState } = useForm({ mode: 'onChange '});

    const { status, data } = useFetch(quizCategoryLookupUrl);

    const isDataFetched = (status === FETCH_STATUSES.FETCHED);
    const categories = parseQuizCategories(data);
    const categoryOptions = buildCategoryOptions(categories);

    const difficulty = watch(QUIZ_BUILDER_FORM.DIFFICULTY);
    const type = watch(QUIZ_BUILDER_FORM.TYPE);
    const count = watch(QUIZ_BUILDER_FORM.COUNT);
    const category = watch(QUIZ_BUILDER_FORM.CATEGORY);

    // TODO: implement proper validation using formState.isValid
    const formIsValid = difficulty && type && count && category;

    const onSubmit = (data) => {
        history.push('/quiz-wizard', data);
    };

    return (
        <div className="QuizBuilder">
            <h3 className="QuizBuilder__heading">Build your quiz</h3>

            {!isDataFetched && (
                <div className="QuizBuilder__spinner">
                    <Spinner
                        size={ 100 }
                        text="Just a moment..">
                    </Spinner>
                </div>
            )}

            {isDataFetched && (
                <form
                    className="QuizBuilder__form"
                    onSubmit={ handleSubmit(onSubmit) }>
                    <div className="QuizBuilder__form__field QuizBuild__form__difficulty">
                        <Label text="How difficult do you want it to be?"></Label>
                        <RadioBlocks
                            options={ difficultyOptions }
                            { ...register(QUIZ_BUILDER_FORM.DIFFICULTY, { required: true }) }>
                        </RadioBlocks>
                    </div>

                    <div className="QuizBuilder__form__field QuizBuild__form__type">
                        <Label text="What kind of questions do you want?"></Label>
                        <RadioBlocks
                            options={ typeOptions }
                            { ...register(QUIZ_BUILDER_FORM.TYPE, { required: true }) }>
                        </RadioBlocks>
                    </div>

                    <div className="QuizBuilder__form__field QuizBuild__form__count">
                        <Label text="How many questions do you want?"></Label>
                        <RadioBlocks
                            options={ countOptions }
                            { ...register(QUIZ_BUILDER_FORM.COUNT, { required: true }) }>
                        </RadioBlocks>
                    </div>

                    <div className="QuizBuilder__form__field QuizBuild__form__category">
                        <Label text="Which category would you like?"></Label>
                        <RadioBlocks
                            options={ categoryOptions }
                            { ...register(QUIZ_BUILDER_FORM.CATEGORY, { required: true }) }>
                        </RadioBlocks>
                    </div>

                    {formIsValid && (
                        <div className="QuizBuilder__form__button">
                            <Button type={ BUTTON_TYPES.SUBMIT }>Start quiz</Button>
                        </div>
                    )}
                </form>
            )}
        </div>
    );
}

QuizBuilder.propTypes = {
};

QuizBuilder.defaultProps = {
};
