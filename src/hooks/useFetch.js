import { useRef, useEffect, useReducer } from 'react';
import { FETCH_STATUSES } from 'utils/constants';

export default function useFetch(url) {
    const cache = useRef({});

    const initialState = {
        status: 'idle',
        error: null,
        data: null
    };

    const [ state, dispatch ] = useReducer((state, action) => {
        switch (action.type) {
            case FETCH_STATUSES.FETCHING: 
                return {
                    ...initialState,
                    status: FETCH_STATUSES.FETCHING
                };
            
            case FETCH_STATUSES.FETCHED: 
                return {
                    ...initialState,
                    status: FETCH_STATUSES.FETCHED,
                    data: action.payload
                };

            case FETCH_STATUSES.FETCH_ERROR:
                return {
                    ...initialState,
                    status: FETCH_STATUSES.FETCH_ERROR,
                    error: action.payload
                };

            default:
                return state;
        }
    }, initialState);

    useEffect(() => {
        let cancelRequest = false;

        if (!url) return;

        const fetchData = async () => {
            dispatch({ 
                type: FETCH_STATUSES.FETCHING
            });

            if (cache.current[url]) {
                const data = cache.current[url];
                dispatch({
                    type: FETCH_STATUSES.FETCHED,
                    payload: data
                });

            } else {
                try {
                    const response = await fetch(url);
                    const data = await response.json();

                    cache.current[url] = data;

                    if (cancelRequest) return;

                    dispatch({
                        type: FETCH_STATUSES.FETCHED,
                        payload: data
                    });
                } catch (error) {
                    if (cancelRequest) return;

                    dispatch({
                        type: FETCH_STATUSES.FETCH_ERROR,
                        payload: error.message
                    });
                }
            }
        };

        fetchData();

        return function cleanup() {
            cancelRequest = true;
        };
    }, [ url ]);

    return state;
};