import * as React from 'react';
import { SearchBar } from "../SearchBar";
import './Root.css'
import { SearchResults } from "../SearchResults";
import { NavBar } from "../../components/NavBar";

export class Root extends React.Component {
    public render() {
        return (
            <div className="root">
                <NavBar/>
                <SearchBar/>
                <SearchResults/>
            </div>
        );
    }
}

export default Root;
