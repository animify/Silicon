export interface ThemeColor {
    primary: string;
    secondary: string;
    white: string;
    black: string;
}

export interface ThemeFontFamily {
    heading: string;
    body: string;
    code: string;
}

export interface ThemeFontWeight {
    thin: number;
    extraLight: number;
    light: number;
    regular: number;
    medium: number;
    semibold: number;
    bold: number;
    extraBold: number;
    black: number;
}

export interface Theme {
    color: ThemeColor;
    font: {
        family: ThemeFontFamily;
        weight: ThemeFontWeight;
    };
}
