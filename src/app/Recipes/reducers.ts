import { ActionType, AnyAction } from "./actions";
import { initialState } from "./constants";
import { State } from "./types";
import { Reducer } from "redux";

export const reducer: Reducer<State, AnyAction> = (state = initialState, action: AnyAction): State => {
    switch (action.type) {
        case ActionType.SEARCH_REQUEST_SENT:
            return {
                ...state,
                searchString: action.payload.searchString
            };
        case ActionType.SEARCH_REQUEST_STATE_CHANGED:
            return {
                ...state,
                searchRequest: {
                    ...state.searchRequest,
                    state: action.payload.requestState,
                    error: action.payload.error || '',
                }
            };
        case ActionType.RECIPES_RECEIVED:
            return {
                ...state,
                recipes: action.payload.recipes
            };
        default:
            return state;
    }
};
