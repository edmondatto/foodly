import * as React from 'react';
import { IconContext } from "react-icons/lib";
import { IoIosList, IoIosPricetags, IoIosGlobe, IoIosPlayCircle } from 'react-icons/io';
import { Recipe } from '../../types';
import { RecipeImage } from '../../components/RecipeImage';
import './RecipeCard.css';

type RecipeCardProps = {
    recipe: Recipe;
    ingredientsHash: Record<string, Record<string, string>>;
}

export class RecipeCard extends React.Component<RecipeCardProps>{
    render() {
        const {
            strMeal,
            strInstructions,
            strMealThumb,
            strArea,
            strCategory,
            strYoutube,
            strTags,
            idMeal
        } = this.props.recipe;
        const { ingredientsHash } = this.props;

        return(
            <section className={'recipeCard'}>
                <section className={'imageContainer'}>
                    { strMealThumb &&  <RecipeImage src={strMealThumb} /> }
                </section>
                <section className={'recipe'}>
                    <header className={'recipeHeader'}>
                        <h1 className={'recipeName'}>
                            { strMeal }
                        </h1>
                        <h3 className={'recipeOrigin'}>
                            <IconContext.Provider
                                value={{ className: 'reactIcons' }}
                            >
                                <IoIosGlobe/>
                            </IconContext.Provider>
                            { `  ${ strArea }` }
                        </h3>
                        <h3 className={'recipeCategory'}>
                            <IconContext.Provider
                                value={{ className: 'reactIcons' }}
                            >
                                <IoIosList/>
                            </IconContext.Provider>
                            { `  ${ strCategory }` }
                        </h3>
                    </header>
                    <section className={'recipeInstructions'}>
                        { strInstructions }
                    </section>
                    <section className={'recipeIngredientsSection'}>
                        {
                            Object.keys(ingredientsHash[idMeal]).map((ingredientName) => (
                                <div className={'recipeIngredientQuantityPair'}>
                                    <span style={{ fontWeight: 'bold' }}>{ ingredientName }:</span>  { ingredientsHash[idMeal][ingredientName] }
                                </div>
                            ))
                        }
                    </section>
                    <footer className={'recipeFooter'}>
                        <div className={'videoLinkContainer'}>
                            <a href={ strYoutube } target={'_blank'} className={'videoLink'}>
                            <span>
                                <IconContext.Provider
                                    value={{ className: 'reactIcons', style: {fill: 'rgb(19, 85, 137)'} }}
                                >
                                    <IoIosPlayCircle/>
                                </IconContext.Provider>
                            </span>
                                Play YouTube instruction video
                            </a>
                        </div>
                        <div style={{ flex: '1' }}>
                            <IconContext.Provider
                                value={{ className: 'react-icons', style: {fill: 'rgb(19, 85, 137)'} }}
                            >
                                <IoIosPricetags/>
                            </IconContext.Provider>
                            { ` ${ strTags } ` }
                        </div>
                    </footer>
                </section>
            </section>
        );
    }
}
