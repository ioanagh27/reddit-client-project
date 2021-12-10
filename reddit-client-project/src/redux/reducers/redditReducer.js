import { ActionTypes } from "../constants/action-types";

const initialState = {
    reddits: [],
    isLoading: false,
    error: false,
    searchTerm: '',
    subreddits: '/r/'
}

export const redditReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case ActionTypes.SET_REDDITS:
            return state;
        default:
            return state; 
    }
}