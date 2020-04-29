import * as React from 'react';
import { Theme, ThemeName} from "../../types";
import './NavBar.css';

export type NavBarProps = {
    themeName: ThemeName;
    theme: Theme;
    changeTheme: () => void;
}

export class NavBar extends React.Component<NavBarProps, {}> {
    render() {
        const { themeName, theme, changeTheme } = this.props;

        return (
            <nav style={{ background: theme.background }}>
                <a
                    href="#"
                    className={ 'nav-logo' }
                    style={{ color: theme.fontColor }}
                >
                    Foodly
                </a>
                <button
                    onClick={changeTheme}
                    className="themeToggleButton"
                    style={{ background: theme.background, color: theme.fontColor }}
                >
                    { themeName === 'light' ? 'Switch to Dark Theme' : 'Switch to Light Theme' }
                </button>
            </nav>
        );
    }
}
