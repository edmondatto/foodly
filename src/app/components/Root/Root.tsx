import * as React from 'react';
import './Root.css'
import { SearchResults, SearchBar } from "../../Recipes";
import { NavBar } from "../NavBar";
import { WeatherWidget } from "../../Weather";

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
