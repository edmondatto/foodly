import * as React from 'react';
import { Recipe } from '../../types';
import { RecipeImage } from '../../components/RecipeImage';
import './RecipeCard.css';

type RecipeCardProps = Recipe;

export class RecipeCard extends React.Component<RecipeCardProps>{
    render() {
        const { strMeal, strInstructions, strMealThumb } = this.props;

        return(
            <section>
                <h4>{ strMeal }</h4>
                <p>{ strInstructions }</p>
                { strMealThumb &&  <RecipeImage src={strMealThumb} /> }
            </section>
        );
    }
}
