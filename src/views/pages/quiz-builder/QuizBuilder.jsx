import React from "react";
import { useForm } from "react-hook-form";

import { RadioBlocks } from "components/common/forms/radio-blocks/RadioBlocks";
import Label from "components/common/forms/label/Label";
import Button from "components/common/buttons/button/Button";

import useFetch from "hooks/useFetch";
import { QuizService } from "services/quiz.service";
import { BUTTON_TYPES, FETCH_STATUSES, QUESTION_COUNT, QUESTION_DIFFICULTIES, QUESTION_TYPES } from "utils/constants";
import { QUESTION_DIFFICULTIES_LABELS, QUESTION_TYPES_LABELS } from "utils/copy";

import './QuizBuilder.scss';
import Spinner from "components/spinner/Spinner";

const quizService = new QuizService();

const countOptions = Object.values(QUESTION_COUNT).map((count) => ({ value: count.toString(), label: count.toString() }));
const typeOptions = Object.values(QUESTION_TYPES).map((type) => ({ value: type, label: QUESTION_TYPES_LABELS[type] }));
const difficultyOptions = Object.values(QUESTION_DIFFICULTIES).map((difficulty) => ({ value: difficulty, label: QUESTION_DIFFICULTIES_LABELS[difficulty] }));

export default function QuizBuilder(props) {
    const { register, handleSubmit, watch, formState } = useForm({ mode: 'onChange '});

    const { status, data } = useFetch(quizService.categoryLookupUrl);

    const isDataFetched = (status === FETCH_STATUSES.FETCHED);
    const categories = quizService.parseCategories(data);
    const categoryOptions = categories.map(({ value, label }) => ({ value: value.toString(), label }));

    const onSubmit = (data) => {
        console.log(data, formState);
    }

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
                            { ...register('difficulty', { required: true }) }>
                        </RadioBlocks>
                    </div>

                    <div className="QuizBuilder__form__field QuizBuild__form__type">
                        <Label text="What kind of questions do you want?"></Label>
                        <RadioBlocks
                            options={ typeOptions }
                            { ...register('type', { required: true }) }>
                        </RadioBlocks>
                    </div>

                    <div className="QuizBuilder__form__field QuizBuild__form__count">
                        <Label text="How many questions do you want?"></Label>
                        <RadioBlocks
                            options={ countOptions }
                            { ...register('count', { required: true }) }>
                        </RadioBlocks>
                    </div>

                    <div className="QuizBuilder__form__field QuizBuild__form__category">
                        <Label text="Which category would you like?"></Label>
                        <RadioBlocks
                            options={ categoryOptions }
                            { ...register('category', { required: true }) }>
                        </RadioBlocks>
                    </div>

                    {formState.isValid && (
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
