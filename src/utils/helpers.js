export const buildQueryParams = (params) => {
    return Object
        .keys(params)
        .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
        .join('&');
};

export const shuffleArray = (array) => {
    return array
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)
};

export const slugify = (str) => {
    str = str.replace(/^\s+|\s+$/g, '');
    str = str.toLowerCase();
  
    const from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
    const to   = "aaaaeeeeiiiioooouuuunc------";

    for (let i = 0, l = from.length; i < l ; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    str = str
        .replace(/[^a-z0-9 -]/g, '') 
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');

    return str;
};

export const padStringLeft = (string, pad, length) => {
    return (new Array(length + 1).join(pad) + string).slice(-length);
};

export const pluralize = (string, count) => {
    return `${string}${count > 1 ? 's' : ''}`;
};

export const sortByKey = (array, key) => {
    return array.sort((a, b) => {
        if (a[key] < b[key]) return 1;
        if (a[key] > b[key]) return -1;
        return 0;
    });
};

export const isObjEmpty = (obj) => obj && Object.keys(obj).length === 0 && obj.constructor === Object;