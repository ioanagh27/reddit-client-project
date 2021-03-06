import { ActionTypes } from "../constants/action-types";

const initialState = {
   
        reddits: [],
        error: false,
        isLoading: false,
        searchTerm: '',
        selectedSubreddit: '/r/'
    }
   


export const redditReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case ActionTypes.SET_REDDITS:
            return {...state, reddits: payload};
        case ActionTypes.SET_SEARCH_TERM:
            return {...state, reddit: payload}
        default:
            return state; 
    }
}

