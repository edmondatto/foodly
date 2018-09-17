import axios from "axios";

export const getCurrentWeather = (location: string = 'kampala') => {
    return axios({
        method: 'get',
        url: `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=e729c9414031d2463ea4f0f3b1ecaa13`
    }).then(response => response.data)
};
