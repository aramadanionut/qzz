import { QUESTION_COUNT, QUESTION_DIFFICULTIES, QUESTION_TYPES } from "utils/constants";
import { QUESTION_DIFFICULTIES_LABELS, QUESTION_TYPES_LABELS } from "utils/copy";

export const countOptions = Object
    .values(QUESTION_COUNT)
    .map((count) => ({
        value: count.toString(),
        label: count.toString()
    }));

export const typeOptions = Object
    .values(QUESTION_TYPES)
    .map((type) => ({
        value: type,
        label: QUESTION_TYPES_LABELS[type]
    }));

export const difficultyOptions = Object
    .values(QUESTION_DIFFICULTIES)
    .map((difficulty) => ({
        value: difficulty,
        label: QUESTION_DIFFICULTIES_LABELS[difficulty]
    }));

export const buildCategoryOptions = (categories) => {
    return categories
        .map(({ value, label }) => ({
            value: value.toString(),
            label
        }));
}