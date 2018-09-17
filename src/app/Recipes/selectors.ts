import { State } from "../types";

export const getRecipes = (state: State) => state.recipes.recipes;

export const getSanitizedRecipeIngredients = (state: State): Record<string, Record<string, string>> | undefined => {
    const recipes = getRecipes(state);

    if (!recipes) return;

    const mealIdToIngredientsHash: Record<string, Record<string, string>> = {};

    recipes.forEach(recipe => {
        const ingredientToQuantityHash: Record<string, string> = {};

        for (let count = 1; count <= 20; count += 1) {
            const ingredientName: string = recipe[`strIngredient${count}`];

            if (ingredientName) {
                ingredientToQuantityHash[ingredientName] = recipe[`strMeasure${count}`];
                mealIdToIngredientsHash[recipe.idMeal] = ingredientToQuantityHash;
            } else {
                return;
            }
        }
    });
    return mealIdToIngredientsHash;
};
