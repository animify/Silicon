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

export interface ThemeScreens {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    [key: string]: string;
}

export interface ThemeSpacing {
    '1': string;
    '2': string;
    '3': string;
    '4': string;
    '5': string;
    '6': string;
    '7': string;
    '8': string;
    '9': string;
    '10': string;
    '11': string;
    '12': string;
    [key: string]: string;
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
    screens: ThemeScreens;
    spacing: ThemeSpacing;
    color: ThemeColor;
    font: {
        family: ThemeFontFamily;
        weight: ThemeFontWeight;
    };
}
