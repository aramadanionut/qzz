import { QUESTION_TYPES, QUIZ_QUERY_PARAMS_KEYS } from "utils/constants";
import { buildQueryParams } from "utils/helpers";

export const quizCategoryLookupUrl = 'https://opentdb.com/api_category.php';

export const getQuizUrl = (data) => {
    const baseUrl = 'https://opentdb.com/api.php';
    
    const {
        difficulty,
        type,
        count,
        category
    } = data;
    
    const params = {
        [ QUIZ_QUERY_PARAMS_KEYS.DIFFICULTY ]: difficulty.toLowerCase(),
        [ QUIZ_QUERY_PARAMS_KEYS.AMOUNT ]: parseInt(count),
        [ QUIZ_QUERY_PARAMS_KEYS.CATEGORY ]: parseInt(category)
    };

    if (type !== QUESTION_TYPES.ANY) {
        params[ QUIZ_QUERY_PARAMS_KEYS.TYPE ] = type.toLowerCase()
    }

    return `${baseUrl}?${buildQueryParams(params)}`
}

export const parseQuizCategories = (data) => {
    if (!data) {
        return [];
    }

    if (data && data.trivia_categories) {
        if (!data.trivia_categories.length) {
            return [];
        }

        return data.trivia_categories
            .sort((a, b) => a.name.localeCompare(b.name))
            .map(({ id, name }) => ({
                value: id,
                label: name
            }));
    }
}