import axios from 'axios';

export const searchForRecipe = (searchString: string) => {
    return axios({
        method: 'get',
        url: `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchString}`
    }).then(response => response.data.meals)
};
