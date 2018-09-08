import {delay} from "redux-saga";

export const saga = function*() {
    yield delay(3000, console.info('Saga is running'))
};
