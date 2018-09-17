import * as React from 'react';
import { SearchBar } from "../../Recipes/containers/SearchBar/index";
import './Root.css'
import { SearchResults } from "../../Recipes";
import { NavBar } from "../NavBar";
import { WeatherWidget } from "../../Weather/containers/WeatherWidget";

export class Root extends React.Component {
    public render() {
        return (
            <div className="root">
                <NavBar/>
                <SearchBar/>
                <WeatherWidget />
                <SearchResults/>
            </div>
        );
    }
}

export default Root;
