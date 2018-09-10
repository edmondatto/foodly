import * as React from 'react';
import { State } from "../../types";
import { RecipeCard } from "../RecipeCard";
import { connect } from "react-redux";
import './SearchResults.css';

type SearchResultsStateProps = {
    recipes: State['recipes']
}

type SearchResultsOwnProps = {}

type SearchResultsProps = SearchResultsOwnProps & SearchResultsStateProps

export class SearchResults extends React.Component<SearchResultsProps> {


    render(){
        const { recipes } = this.props;
        // TODO: Clean this up!!!
        // @ts-ignore
        const renderSearchResults = recipes && recipes.meals.map(meal => <RecipeCard {...meal} key={meal.idMeal}/>);

        return(
            <>
                { renderSearchResults }
            </>
        );
    }
}

const mapStateToProps = (state: State) => {
    return {
        recipes: state.recipes
    }
};

export const SearchResultsContainer = connect(mapStateToProps)(SearchResults);