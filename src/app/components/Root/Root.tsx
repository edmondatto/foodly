import * as React from 'react';
import './Root.css'
import { SearchResults, SearchBar } from "../../Recipes";
import { NavBar } from "../NavBar";
import { WeatherWidget } from "../../Weather";
import { ThemeName } from "../../types";
import { themes } from "../../constants";

export type RootState = {
    themeName: ThemeName;
}

export class Root extends React.Component {
    state: RootState = {
        themeName: 'dark'
    };

    toggleTheme = () => {
        this.setState(() => ({
            themeName: this.state.themeName === 'light' ? 'dark' : 'light'
        }))
    };

    public render() {
        const { Provider, Consumer } = React.createContext(this.state.themeName);
        const { themeName } = this.state;

        return (
            <Provider value={themeName}>
                <div className="root">
                    <Consumer>
                        {themeName =>
                            <>
                                <NavBar
                                    themeName={themeName}
                                    theme={themes[themeName]}
                                    changeTheme={this.toggleTheme}
                                />
                                <SearchBar/>
                                <WeatherWidget/>
                                <SearchResults/>
                            </>
                        }
                    </Consumer>
                </div>
            </Provider>
        );
    }
}

export default Root;
