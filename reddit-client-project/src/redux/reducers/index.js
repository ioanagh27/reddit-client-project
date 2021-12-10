import { combineReducers } from "redux";
import { redditReducer } from "./redditReducer";

export const reducers = combineReducers({
    allReddits: redditReducer
})