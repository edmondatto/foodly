import {delay} from "redux-saga";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { getCurrentWeather } from './services';
import {
    ActionType,
    weatherDataReceived,
    WeatherDataRequestSent,
    weatherDataRequestStateChanged
} from "./actions";

export const handleWeatherDataPolling = function*(action: WeatherDataRequestSent) {
    while (true) {
        yield put(weatherDataRequestStateChanged('ACTIVE'));

        try {
            const weatherData = yield call(getCurrentWeather);

            yield put(weatherDataReceived(weatherData));
        } catch (error) {
            yield put(weatherDataRequestStateChanged('FAILED', 'Oops! Something went wrong.'))
        }

        yield call(delay, 5000);
    }
};

export const saga = function*() {
    yield all([takeLatest(ActionType.WEATHER_DATA_REQUEST_SENT, handleWeatherDataPolling)])
};
