import { call } from 'redux-saga/effects';
import { saga as recipesSaga } from './Recipes';

export const saga = function*() {
    yield call(recipesSaga);
};
