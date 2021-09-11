import React from "react";

import RadioBlocks from "components/common/forms/radio-blocks/RadioBlocks";
import Label from "components/common/forms/label/Label";
import { DIFFICULTIES } from "utils/constants";
import { QuizService } from "services/quiz.service";

import './QuizBuilder.scss';
import useFetch from "hooks/useFetch";

const quizService = new QuizService();

export default function QuizBuilder(props) {
    const difficultyOptions = [
        { value: DIFFICULTIES.EASY, label: 'Easy' },
        { value: DIFFICULTIES.MEDIUM, label: 'Medium' },
        { value: DIFFICULTIES.HARD, label: 'Hard' },
    ];

    const url = quizService.categoryLookupUrl;
    const { status, data, error } = useFetch(url);
    const categories = quizService.parseCategories(data);

    const categoryOptions = categories.map(({ value, label }) => ({
        value,
        label
    }));

    return (
        <div className="QuizBuilder">
            <h3 className="QuizBuilder__heading">Build your quiz</h3>

            <div className="QuizBuilder__form">
                <div className="QuizBuilder__form__field QuizBuild__form__difficulty">
                    <Label text="Choose the difficulty"></Label>
                    <RadioBlocks
                        options={ difficultyOptions }>
                    </RadioBlocks>
                </div>

                <div className="QuizBuilder__form__field QuizBuild__form__category">
                    <Label text="Choose the category"></Label>
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
