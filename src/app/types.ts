import {State as RecipesState} from './Recipes';
import { State as WeatherState } from './Weather';

export type State = {
    recipes: RecipesState;
    weather: WeatherState;
}

export type Request = {
    state: 'PENDING' | 'ACTIVE' | 'LAGGING' | 'SUCCEEDED' | 'FAILED';
    error: string;
};

export type ThemeName = 'light' | 'dark';

export type Theme = {
    background: string;
    fontColor: string

}
