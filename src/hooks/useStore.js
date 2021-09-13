import { useState, useEffect } from "react";

import Storage from "utils/storage";
import Dispatcher from 'utils/dispatcher';

let store = {};

const dispatcher = new Dispatcher();
const storage = new Storage();

function createStore(value) {
    store = value;
}

function getStore(key) {
    return store[key];
}

function setStore(key, value) {
    store[key] = value;
    storage.set(key, value);
    dispatcher.emit('data', store);
}

function useStore(key, initialValue) {
    const [ value, setData ] = useState(() => {
        return store[key] || storage.get(key) || initialValue || null;
    });

    useEffect(() => {
        const fn = dispatcher.on('data', (data) => {
            let value = data[key];

            if (!value) return;

            if (Array.isArray(value)) {
                setData(value);

            } else if (typeof(value) == 'object') {
                setData({ ...value });

            } else {
                setData(value);
            }
        })

        return () => {
            setImmediate(() => {
                dispatcher.off('data', fn);
            });
        }
    });

    return [
        value,
        (v) => {
            setStore(key, v)
        }
    ];
}

export {
    getStore,
    useStore,
    setStore,
    createStore
};