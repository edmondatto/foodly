import { searchForRecipe } from './services'
import {all, call, put, takeLatest} from "redux-saga/effects";
import {ActionType, SearchRequestSent, searchRequestStateChanged} from "./actions";

export const saga = function*() {
    yield all([takeLatest(ActionType.SEARCH_REQUEST_SENT, handleSearch)])
};

export const handleSearch = function*(action: SearchRequestSent) {
    const { payload: { searchString } } = action;
    yield put(searchRequestStateChanged('ACTIVE'));

    try {
        const response = yield call(searchForRecipe, searchString);
        // TODO: Find a way to use the fork effect in order to use Task.running() to implement the 'LAGGING' functionality
        const recipes = response.data;

        console.info(response);
        yield put(searchRequestStateChanged('SUCCEEDED', undefined, recipes))
    } catch (error) {
        yield put(searchRequestStateChanged('FAILED', 'Oops! Something went wrong.'))
    }
};
