import {State} from "./types";

export const initialState: State = {
    weatherRequest: {
        state: "PENDING",
        error: ''
    },
    weatherData: null
};