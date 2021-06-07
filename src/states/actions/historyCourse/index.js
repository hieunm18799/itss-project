import {STORE_HISTORY,ADD_HISTORY} from "./types";

export const storeHistory = (payload) => {
    return {
        type: STORE_HISTORY,
        payload
    }
}

export const addLesson =  (payload) => {
    return {
        type: ADD_HISTORY,
        payload
    }
}

