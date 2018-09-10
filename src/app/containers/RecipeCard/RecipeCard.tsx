import * as React from 'react';
import { Meal } from "../../types";
import { RecipeImage } from "../../components/RecipeImage";
import './RecipeCard.css';

export class RecipeCard extends React.Component<Meal>{
    render() {
        const { strMeal, strInstructions, strMealThumb } = this.props;

        return(
            <section>
                <h4>{ strMeal }</h4>
                <p>{ strInstructions }</p>
                { strMealThumb && <RecipeImage imageUrl={strMealThumb} /> }
            </section>
        );
    }
}