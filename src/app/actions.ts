import { Request } from "./types";

export enum ActionType {
    SEARCH_REQUEST_SENT = 'SEARCH_REQUEST_SENT',
    SEARCH_REQUEST_STATE_CHANGED = 'SEARCH_REQUEST_STATE_CHANGED',
}

export type AnyAction = SearchRequestSent | SearchRequestStateChanged;

export type SearchRequestSent = {
    type: ActionType.SEARCH_REQUEST_SENT;
    payload: {
        searchString: string
    }
}

export type SearchRequestStateChanged = {
    type: ActionType.SEARCH_REQUEST_STATE_CHANGED;
    payload: {
        requestState: Request['state'],
        error?: string,
        recipes?: []
    }
}

export const searchRequestSent = (searchString: string): SearchRequestSent => ({
    type: ActionType.SEARCH_REQUEST_SENT,
    payload: {
        searchString
    }
});

export const searchRequestStateChanged = (
    requestState: SearchRequestStateChanged['payload']['requestState'],
    error?: SearchRequestStateChanged['payload']['error'],
    recipes?: SearchRequestStateChanged['payload']['recipes']
): SearchRequestStateChanged => ({
    type: ActionType.SEARCH_REQUEST_STATE_CHANGED,
    payload: {
        requestState,
        error,
        recipes
    }
});