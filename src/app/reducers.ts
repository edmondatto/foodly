import { ActionType, AnyAction } from "./actions";
import { initialState } from "./constants";

export function reducer(state = initialState, action: AnyAction) {
    switch (action.type) {
        case ActionType.SEARCH_REQUEST_SENT:
            return {
                ...state,
                searchString: action.payload.searchString
            };
        case ActionType.SEARCH_REQUEST_STATE_CHANGED:
            return {
                ...state,
                error: action.payload.error,
                recipes: action.payload.recipes,
                searchRequest: {
                    state: action.payload.requestState
                }
            };
        default:
            return state;
    }
}