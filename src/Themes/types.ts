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
    '0': string;
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

export interface ThemeTypographyScale {
    h1: string | number;
    h2: string | number;
    h3: string | number;
    h4: string | number;
    h5: string | number;
    h6: string | number;
    p: string | number;
    small: string | number;
}

export interface Theme {
    screens: ThemeScreens;
    spacing: ThemeSpacing;
    color: ThemeColor;
    font: {
        size: ThemeTypographyScale;
        lineHeight: ThemeTypographyScale;
        letterSpacing: ThemeTypographyScale;
        family: ThemeFontFamily;
        weight: ThemeFontWeight;
    };
}
