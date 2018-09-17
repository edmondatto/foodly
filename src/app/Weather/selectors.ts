import { State } from "../types";

export const getMainWeatherData = (state: State) => {
    const weatherData = state.weather.weatherData;
    if (weatherData) {
        return weatherData.weather[0];
    }
    return;
};
