import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import Label from "components/common/forms/label/Label";
import Button from "components/common/buttons/button/Button";
import Spinner from "components/spinner/Spinner";
import { Select } from "components/common/forms/select/Select";

import useFetch from "hooks/useFetch";
import { quizCategoryLookupUrl, parseQuizCategories } from "services/quiz.service";
import { countOptions, typeOptions, difficultyOptions, buildCategoryOptions } from "utils/options";
import { BUTTON_TYPES, FETCH_STATUSES, QUIZ_MINUTES_PER_QUESTION } from "utils/constants";

import './QuizBuilder.scss';
import { QUIZ_BUILDER_FORM } from "utils/forms";
import { pluralize } from "utils/helpers";

export default function QuizBuilder(props) {
    const history = useHistory();
    const { register, handleSubmit, watch } = useForm({ mode: 'onChange' });
    
    const { status, data } = useFetch(quizCategoryLookupUrl, true);
    const isDataFetched = (status === FETCH_STATUSES.FETCHED);
    const categories = parseQuizCategories(data);
    const categoryOptions = buildCategoryOptions(categories);

    // TODO: refactor to watch();
    const difficulty = watch(QUIZ_BUILDER_FORM.DIFFICULTY);
    const type = watch(QUIZ_BUILDER_FORM.TYPE);
    const count = watch(QUIZ_BUILDER_FORM.COUNT);
    const category = watch(QUIZ_BUILDER_FORM.CATEGORY);

    // TODO: implement proper validation using formState.isValid
    const formIsValid = difficulty && type && count && category;

    const onSubmit = (data) => {
        history.push('/quiz', data);
    };

    return (
        <div className="QuizBuilder">

            {!isDataFetched && (
                <div className="QuizBuilder__spinner">
                    <Spinner
                        size={ 100 }
                        text="Just a moment..">
                    </Spinner>
                </div>
            )}

            {isDataFetched && (
                <div className="QuizBuilder__container">
                    <h3 className="QuizBuilder__heading">Build your quiz</h3>
                    
                    <form
                        className="QuizBuilder__form"
                        onSubmit={ handleSubmit(onSubmit) }>
                        <div className="QuizBuilder__form__field QuizBuild__form__difficulty">
                            <Label
                                info="The higher the difficulty, the more points you get"
                                text="How difficult do you want it to be?">
                            </Label>
                            <Select
                                inline={ true }
                                options={ difficultyOptions }
                                { ...register(QUIZ_BUILDER_FORM.DIFFICULTY, { required: true }) }>
                            </Select>
                        </div>

                        <div className="QuizBuilder__form__field QuizBuild__form__type">
                            <Label
                                info="More choices, more points"
                                text="What type of questions do you want?">
                            </Label>
                            <Select
                                inline={ true }
                                options={ typeOptions }
                                { ...register(QUIZ_BUILDER_FORM.TYPE, { required: true }) }>
                            </Select>
                        </div>

                        <div className="QuizBuilder__form__field QuizBuild__form__count">
                            <Label
                                info={ `You will get ${QUIZ_MINUTES_PER_QUESTION} ${pluralize('minute', QUIZ_MINUTES_PER_QUESTION)} for each question`}
                                text="How many questions do you want?">                                    
                            </Label>
                            <Select
                                inline={ true }
                                options={ countOptions }
                                { ...register(QUIZ_BUILDER_FORM.COUNT, { required: true }) }>
                            </Select>
                        </div>

                        <div className="QuizBuilder__form__field QuizBuild__form__category">
                            <Label
                                text="Which category are you interested in?">
                            </Label>
                            <Select
                                inline={ true }
                                options={ categoryOptions }
                                { ...register(QUIZ_BUILDER_FORM.CATEGORY, { required: true }) }>
                            </Select>
                        </div>

                        {formIsValid && (
                            <div className="QuizBuilder__form__button">
                                <Button type={ BUTTON_TYPES.SUBMIT }>Start quiz</Button>
                            </div>
                        )}
                    </form>
                </div>
            )}
        </div>
    );
}

QuizBuilder.propTypes = {
};

QuizBuilder.defaultProps = {
};
