import { combineReducers } from 'redux';
import { reducer as recipesReducer } from './Recipes';
import { reducer as weatherReducer } from "./Weather";
import {State} from "./types";

export const reducer = combineReducers<State>({
    recipes: recipesReducer,
    weather: weatherReducer
});
