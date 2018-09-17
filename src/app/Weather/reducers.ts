import {Reducer} from "redux";
import {State} from "./types";
import {initialState} from "./constants";
import {ActionType, AnyAction} from "./actions";

export const reducer: Reducer<State, AnyAction> = (state = initialState, action: AnyAction): State => {
    switch (action.type) {
        case ActionType.WEATHER_DATA_REQUEST_SENT:
            return {
                ...state,
                weatherRequest: {
                    ...state.weatherRequest,
                    state: "ACTIVE"
                }
            };
        case ActionType.WEATHER_DATA_REQUEST_STATE_CHANGED:
            return {
                ...state,
                weatherRequest: {
                    ...state.weatherRequest,
                    state: action.payload.requestState,
                    error: action.payload.error || ''
                }
            };
        case ActionType.WEATHER_DATA_RECEIVED:
            return {
                ...state,
                weatherData: action.payload.weatherData,
                weatherRequest: {
                    ...state.weatherRequest,
                    state: "PENDING"
                }
            };
        default:
            return state;
    }
};
