import { Theme, ThemeName } from "./types";

export const themes: Record<ThemeName, Theme> = {
    light: {
        background: '#eee',
        fontColor: '#135589'
    },
    dark: {
        background: '#135589',
        fontColor: '#eee'
    }
};
