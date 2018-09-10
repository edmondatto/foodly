import * as React from 'react';
import './RecipeImage.css'

type RecipeImageProps = {
    imageUrl: string
}

export const RecipeImage: React.SFC<RecipeImageProps> = (props) => {
    return(
        <img src={ props.imageUrl } />
    );
};