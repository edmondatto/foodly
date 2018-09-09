import {State} from "./types";

export const initialState: State = {
    searchRequest: {state: 'PENDING', error: ''},
    recipes: null,
    searchString: null
};