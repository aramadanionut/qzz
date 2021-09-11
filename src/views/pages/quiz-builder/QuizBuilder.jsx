import React from "react";

import RadioBlocks from "components/common/forms/radio-blocks/RadioBlocks";
import Label from "components/common/forms/label/Label";
import { DIFFICULTIES } from "utils/constants";

import './QuizBuilder.scss';

export default function QuizBuilder(props) {
    const difficultyOptions = [
        { value: DIFFICULTIES.EASY, label: 'Easy' },
        { value: DIFFICULTIES.MEDIUM, label: 'Medium' },
        { value: DIFFICULTIES.HARD, label: 'Hard' },
    ];
    
    return (
        <div className="QuizBuilder">
            <h3 class="QuizBuilder__heading">Build your quiz</h3>

            <div className="QuizBuilder__form">
                <div className="QuizBuild__form__difficulty">
                    <Label text="Choose the difficulty"></Label>
                    <RadioBlocks
                        options={ difficultyOptions }>
                    </RadioBlocks>
                </div>

                <div className="QuizBuild__form__category">
                    <Label text="Choose the category"></Label>
                    <RadioBlocks
                        options={ difficultyOptions }>
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
