import React from "react";
import { useForm } from "react-hook-form";

import { RadioBlocks } from "components/common/forms/radio-blocks/RadioBlocks";
import Label from "components/common/forms/label/Label";
import Button from "components/common/buttons/button/Button";
import Spinner from "components/spinner/Spinner";

import useFetch from "hooks/useFetch";
import { QuizService } from "services/quiz.service";
import { countOptions, typeOptions, difficultyOptions, buildCategoryOptions } from "services/options.service";
import { BUTTON_TYPES, FETCH_STATUSES } from "utils/constants";

import './QuizBuilder.scss';

const quizService = new QuizService();

export default function QuizBuilder(props) {
    const { register, handleSubmit, formState } = useForm({ mode: 'onChange '});

    const { status, data } = useFetch(quizService.categoryLookupUrl);

    const isDataFetched = (status === FETCH_STATUSES.FETCHED);
    const categories = quizService.parseCategories(data);
    const categoryOptions = buildCategoryOptions(categories);

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
