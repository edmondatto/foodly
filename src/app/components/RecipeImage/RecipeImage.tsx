import * as React from 'react';
import './RecipeImage.css'

type RecipeImageProps = React.ImgHTMLAttributes<HTMLImageElement>

export const RecipeImage: React.SFC<RecipeImageProps> = ({ src }) => {
    return(
        <img src={ src } />
    );
};
