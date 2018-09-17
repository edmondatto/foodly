import { WeatherData } from "./types";
import { Request } from "../types";

export enum ActionType {
    WEATHER_DATA_REQUEST_SENT = 'WEATHER_DATA_REQUEST_SENT',
    WEATHER_DATA_REQUEST_STATE_CHANGED = 'WEATHER_DATA_REQUEST_STATE_CHANGED',
    WEATHER_DATA_RECEIVED = 'WEATHER_DATA_RECEIVED'
}

export type AnyAction = WeatherDataRequestSent | WeatherDataRequestStateChanged | WeatherDataReceived;

export type WeatherDataRequestSent = {
    type: ActionType.WEATHER_DATA_REQUEST_SENT;
    payload: {
        location?: string;
    }
};

export type WeatherDataRequestStateChanged = {
    type: ActionType.WEATHER_DATA_REQUEST_STATE_CHANGED;
    payload: {
        requestState: Request['state'];
        error?: Request['error'];
    }
};

export type WeatherDataReceived = {
    type: ActionType.WEATHER_DATA_RECEIVED;
    payload: {
        weatherData: WeatherData
    }
}

export const weatherDataRequestSent = (location?: string): WeatherDataRequestSent => ({
    type: ActionType.WEATHER_DATA_REQUEST_SENT,
    payload: {
        location
    }
});

export const weatherDataRequestStateChanged = (
    requestState: WeatherDataRequestStateChanged['payload']['requestState'],
    error?: WeatherDataRequestStateChanged['payload']['error']
): WeatherDataRequestStateChanged => ({
    type: ActionType.WEATHER_DATA_REQUEST_STATE_CHANGED,
    payload: {
        requestState,
        error
    }
});

export const weatherDataReceived = (weatherData: WeatherData): WeatherDataReceived => ({
    type: ActionType.WEATHER_DATA_RECEIVED,
    payload: {
        weatherData
    }
});
