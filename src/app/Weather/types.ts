import { Request } from "../types";

export type State = {
    weatherRequest: Request;
    weatherData: WeatherData | null;
}

export type WeatherData = {
    coord: Coordinates;
    weather: Weather;
    base: string;
    main: {
        temp: number;
        pressure: number;
        humidity: number;
        temp_min: number;
        temp_max: number;
        sea_level: number;
        grnd_level: number;
    };
    wind: {
        speed: number;
        deg: number;
    };
    clouds: {
        all: number;
    }
    dt: number;
    sys: {
        message: number;
        country: string;
        sunrise: number;
        sunset: string;
    },
    id: number;
    name: string;
    cod: number;
}

export type Coordinates = {
    lon: number;
    lat: number;
}

export type Weather = {
    id: number;
    main: string;
    description: string;
    icon: string
};
