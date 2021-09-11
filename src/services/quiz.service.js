export class QuizService {

    get categoryLookupUrl() {
        return 'https://opentdb.com/api_category.php';
    }

    parseCategories(data) {
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

}