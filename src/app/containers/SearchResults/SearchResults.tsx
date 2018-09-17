import * as React from 'react';
import { State } from "../../types";
import { RecipeCard } from "../RecipeCard";
import { connect } from "react-redux";
import './SearchResults.css';
import { getSanitizedRecipeIngredients } from "../../selectors";

type SearchResultsStateProps = {
    recipes: State['recipes'],
    // TODO: Investigate error that pops up when type Record<string, Record<string, string>> is used here
    recipeIdToMealHash: any
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
        recipes: state.recipes,
        recipeIdToMealHash: getSanitizedRecipeIngredients(state)
    }
};

export const SearchResultsContainer = connect(mapStateToProps)(SearchResults);
