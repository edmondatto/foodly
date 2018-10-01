import axios from "axios";
import { WeatherData } from "./types";

export async function getCurrentWeather (location: string = 'kampala') {
    const { data: weather } = await axios.get<WeatherData>(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=e729c9414031d2463ea4f0f3b1ecaa13`);
    return weather;
}
