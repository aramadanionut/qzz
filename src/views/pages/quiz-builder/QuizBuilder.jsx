import React from "react";

import RadioBlocks from "components/common/forms/radio-blocks/RadioBlocks";
import Label from "components/common/forms/label/Label";

import useFetch from "hooks/useFetch";
import { QuizService } from "services/quiz.service";
import { QUESTION_COUNT, QUESTION_DIFFICULTIES, QUESTION_TYPES } from "utils/constants";
import { QUESTION_DIFFICULTIES_LABELS, QUESTION_TYPES_LABELS } from "utils/copy";

import './QuizBuilder.scss';

const quizService = new QuizService();

export default function QuizBuilder(props) {
    const url = quizService.categoryLookupUrl;
    const { status, data, error } = useFetch(url);
    const categories = quizService.parseCategories(data);

    const countOptions = Object.values(QUESTION_COUNT).map((count) => ({ value: count, label: count.toString() }));
    const typeOptions = Object.values(QUESTION_TYPES).map((type) => ({ value: type, label: QUESTION_TYPES_LABELS[type] }));
    const difficultyOptions = Object.values(QUESTION_DIFFICULTIES).map((difficulty) => ({ value: difficulty, label: QUESTION_DIFFICULTIES_LABELS[difficulty] }));

    const categoryOptions = categories.map(({ value, label }) => ({ value, label }));

    return (
        <div className="QuizBuilder">
            <h3 className="QuizBuilder__heading">Build your quiz</h3>

            <div className="QuizBuilder__form">
                <div className="QuizBuilder__form__field QuizBuild__form__difficulty">
                    <Label text="How difficult do you want it to be?"></Label>
                    <RadioBlocks
                        options={ difficultyOptions }>
                    </RadioBlocks>
                </div>

                <div className="QuizBuilder__form__field QuizBuild__form__type">
                    <Label text="What kind of questions do you want?"></Label>
                    <RadioBlocks
                        options={ typeOptions }>
                    </RadioBlocks>
                </div>

                <div className="QuizBuilder__form__field QuizBuild__form__count">
                    <Label text="How many questions do you want?"></Label>
                    <RadioBlocks
                        options={ countOptions }>
                    </RadioBlocks>
                </div>

                <div className="QuizBuilder__form__field QuizBuild__form__category">
                    <Label text="Which category would you like?"></Label>
                    <RadioBlocks
                        options={ categoryOptions }>
                    </RadioBlocks>
                </div>
            </div>
        </div>
    );
}

QuizBuilder.propTypes = {
};

QuizBuilder.defaultProps = {
};
