import {REST_API} from "../constants";

export const FETCH_CARD = "FETCH_CARD";


export const fetchCardTaskFromDB = (id) => ({
    type: REST_API,
    method: FETCH_CARD,
    payload: {
        id
    }
});

export const fetchCardTask = (task) => ({
    type: FETCH_CARD,
    payload: task
});
