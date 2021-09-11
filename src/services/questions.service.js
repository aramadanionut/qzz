import { slugify, shuffleArray } from "utils/helpers";

const mapAnswer = (answer, correct = false) => ({
    value: slugify(answer),
    label: answer,
    correct
});

export const parseQuizQuestion = (questions = []) => {
    return questions.map(({ question, correct_answer, incorrect_answers, type }) => {
        const answers = shuffleArray([
            mapAnswer(correct_answer, true),
            ...incorrect_answers.map(mapAnswer)
        ]);

        return {
            id: slugify(question),
            type,
            question,
            answers
        };
    })
}