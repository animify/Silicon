import * as CSS from 'csstype';
import { TLength } from '../types';
import { CssFelaStyle } from 'react-fela';

export type ThemeScalingKey = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface ThemeColor {
    primary: CSS.ColorProperty;
    secondary: CSS.ColorProperty;
    white: CSS.ColorProperty;
    black: CSS.ColorProperty;
    [key: string]: CSS.ColorProperty;
}

export interface ThemeFontFamily {
    heading: CSS.FontFamilyProperty;
    body: CSS.FontFamilyProperty;
    code: CSS.FontFamilyProperty;
}

export interface ThemeSpacing {
    '0': CSS.PaddingProperty<TLength> | CSS.MarginProperty<TLength>;
    '1': CSS.PaddingProperty<TLength> | CSS.MarginProperty<TLength>;
    '2': CSS.PaddingProperty<TLength> | CSS.MarginProperty<TLength>;
    '3': CSS.PaddingProperty<TLength> | CSS.MarginProperty<TLength>;
    '4': CSS.PaddingProperty<TLength> | CSS.MarginProperty<TLength>;
    '5': CSS.PaddingProperty<TLength> | CSS.MarginProperty<TLength>;
    '6': CSS.PaddingProperty<TLength> | CSS.MarginProperty<TLength>;
    '7': CSS.PaddingProperty<TLength> | CSS.MarginProperty<TLength>;
    '8': CSS.PaddingProperty<TLength> | CSS.MarginProperty<TLength>;
    '9': CSS.PaddingProperty<TLength> | CSS.MarginProperty<TLength>;
    '10': CSS.PaddingProperty<TLength> | CSS.MarginProperty<TLength>;
    '11': CSS.PaddingProperty<TLength> | CSS.MarginProperty<TLength>;
    '12': CSS.PaddingProperty<TLength> | CSS.MarginProperty<TLength>;
    [key: string]: CSS.PaddingProperty<TLength>;
}

export interface ThemeFontWeight {
    thin: CSS.FontWeightProperty;
    extraLight: CSS.FontWeightProperty;
    light: CSS.FontWeightProperty;
    regular: CSS.FontWeightProperty;
    medium: CSS.FontWeightProperty;
    semibold: CSS.FontWeightProperty;
    bold: CSS.FontWeightProperty;
    extraBold: CSS.FontWeightProperty;
    black: CSS.FontWeightProperty;
}

export interface ThemeTypographyScale {
    h1: CSS.FontSizeProperty<TLength>;
    h2: CSS.FontSizeProperty<TLength>;
    h3: CSS.FontSizeProperty<TLength>;
    h4: CSS.FontSizeProperty<TLength>;
    h5: CSS.FontSizeProperty<TLength>;
    h6: CSS.FontSizeProperty<TLength>;
    p: CSS.FontSizeProperty<TLength>;
    small: CSS.FontSizeProperty<TLength>;
}

export type ThemeContainer = Record<ThemeScalingKey, string>;

export type Variant = CssFelaStyle<Theme, {}> | Record<string, CssFelaStyle<Theme, {}>>;
export interface Variants {
    [key: string]: Variant;
}

export interface Theme {
    loadDefaultFont?: boolean;
    container: ThemeContainer;
    spacing: ThemeSpacing;
    color: ThemeColor;
    fontSize: ThemeTypographyScale;
    lineHeight: ThemeTypographyScale;
    letterSpacing: ThemeTypographyScale;
    fontFamily: ThemeFontFamily;
    fontWeight: ThemeFontWeight;
    variants: Variants;
}
