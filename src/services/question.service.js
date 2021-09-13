import { QUESTION_TYPES } from "utils/constants";
import { slugify, shuffleArray, sortByKey } from "utils/helpers";

const cache = {};

const mapAnswer = (answer, correct = false) => ({
    value: slugify(answer),
    label: answer,
    correct
});

export const parseQuestions = (data = {}) => {
    if (!data || !data.results) {
        return [];
    }

    const key = JSON.stringify(data.results);

    if (cache[key]) {
        return cache[key];
    }

    const questions = data.results.map(({ question, correct_answer, incorrect_answers, type }) => {
        const allAnswers = [
            mapAnswer(correct_answer, true),
            ...incorrect_answers.map((answer) => mapAnswer(answer, false))
        ];

        let answers = type === QUESTION_TYPES.BOOLEAN
            ? sortByKey(allAnswers, 'value', 'desc')
            : shuffleArray(allAnswers);

        return {
            id: slugify(question),
            type,
            question: question,
            answers,
            correctAnswer: slugify(correct_answer)
        };
    });

    cache[key] = questions;

    return questions;
};
