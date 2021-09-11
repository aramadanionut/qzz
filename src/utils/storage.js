export default class Storage {

    set(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    get(key) {
        const saved = localStorage.getItem(key);

        if (!saved) {
            return null;
        }

        return JSON.parse(saved);
    }
    
};