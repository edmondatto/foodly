import { call, fork } from 'redux-saga/effects';
import { saga as recipesSaga } from './Recipes';
import { saga as weatherSaga } from './Weather';

export const saga = function*() {
    yield fork(weatherSaga);
    yield call(recipesSaga);
};
