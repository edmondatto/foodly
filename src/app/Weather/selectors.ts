import { createSelector } from "reselect";
import { State } from "../types";

export const getWeatherData = (state: State) => state.weather.weatherData;

export const getMainWeatherData = createSelector(
    getWeatherData,
    (weatherData) => {
        if (weatherData) {
            return weatherData.weather[0];
        }
        return;
    }
);
