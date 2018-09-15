import { searchForRecipe } from './services'
import { all, call, put, takeLatest } from "redux-saga/effects";
import { ActionType, recipesReceived, SearchRequestSent, searchRequestStateChanged } from "./actions";

export const saga = function*() {
    yield all([takeLatest(ActionType.SEARCH_REQUEST_SENT, handleSearch)])
};

export const handleSearch = function*(action: SearchRequestSent) {
    const { payload: { searchString } } = action;
    yield put(searchRequestStateChanged('ACTIVE'));

    try {
        const recipes = yield call(searchForRecipe, searchString);

        yield put(searchRequestStateChanged('SUCCEEDED'));
        yield put(recipesReceived(recipes));
    } catch (error) {
        yield put(searchRequestStateChanged('FAILED', 'Oops! Something went wrong.'))
    }
};
