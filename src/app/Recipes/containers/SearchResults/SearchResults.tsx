import * as React from 'react';
import { connect } from "react-redux";
import { State } from "../../../types";
import { RecipeCard } from "../RecipeCard";
import './SearchResults.css';
import {getRecipes, getSanitizedRecipeIngredients} from "../../selectors";

type SearchResultsStateProps = {
    recipes: State['recipes']['recipes'],
    recipeIdToMealHash: Record<string, Record<string, string>> | null;
}

type SearchResultsOwnProps = {}

type SearchResultsProps = SearchResultsOwnProps & SearchResultsStateProps

export class SearchResults extends React.Component<SearchResultsProps> {


    render(){
        const { recipes, recipeIdToMealHash } = this.props;
        console.log('>>>>', recipeIdToMealHash);

        return(
            <>
                { recipes && recipes.map(recipe => <RecipeCard {...recipe} key={recipe.idMeal}/>) }
            </>
        );
    }
}

const mapStateToProps = (state: State) => {
    return {
        recipes: getRecipes(state),
        recipeIdToMealHash: getSanitizedRecipeIngredients(state)
    }
};

export const SearchResultsContainer = connect(mapStateToProps)(SearchResults);
