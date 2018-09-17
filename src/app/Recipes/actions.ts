import { Recipe } from "./types";
import { Request } from "../types";

export enum ActionType {
    SEARCH_REQUEST_SENT = 'SEARCH_REQUEST_SENT',
    SEARCH_REQUEST_STATE_CHANGED = 'SEARCH_REQUEST_STATE_CHANGED',
    RECIPES_RECEIVED = 'RECIPES_RECEIVED'
}

export type AnyAction = SearchRequestSent | SearchRequestStateChanged | RecipesReceived;

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
        error?: Request['error'],
    }
}

export type RecipesReceived = {
    type: ActionType.RECIPES_RECEIVED;
    payload: {
        recipes: Recipe[]
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
): SearchRequestStateChanged => ({
    type: ActionType.SEARCH_REQUEST_STATE_CHANGED,
    payload: {
        requestState,
        error,
    }
});

export const recipesReceived = (recipes: Recipe[]): RecipesReceived => ({
    type: ActionType.RECIPES_RECEIVED,
    payload: {
        recipes
    }
});
