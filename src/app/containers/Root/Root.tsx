import * as React from 'react';
import { SearchBar } from "../SearchBar";
import './Root.css'

export class Root extends React.Component {
    public render() {
        return (
            <h1 className="root">
                Welcome to Foodly
                <SearchBar/>
            </h1>
        );
    }
}

export default Root;