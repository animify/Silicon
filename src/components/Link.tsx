import React from 'react';
import { ThemeTypographyScale, Theme, ThemeFontWeight, ThemeFontFamily } from '../theme/types';
import { useFela, CssFelaStyle } from 'react-fela';
import { IStyle } from 'fela';
import { BoxProps, boxRule } from '../utils/boxRule';
import { CSSProps, styleRule } from '../utils/styleRule';
import { VariantProps, variantRule } from '../utils/variantRule';
import getFromTheme from '../utils/getFromTheme';

interface LinkProps {
    children: React.ReactNode;
    family?: keyof ThemeFontFamily;
    size?: keyof ThemeTypographyScale;
    letterSpacing?: keyof ThemeTypographyScale;
    lineHeight?: keyof ThemeTypographyScale;
    weight?: keyof ThemeFontWeight;
    textAlign?: IStyle['textAlign'];
}

type Props = LinkProps & BoxProps & CSSProps<Props> & VariantProps & React.HTMLProps<HTMLAnchorElement>;

const rule: CssFelaStyle<Theme, Props> = (state) => {
    const fontSize = getFromTheme(state.size || 'p', 'fontSize', state.theme);
    const fontWeight = getFromTheme(state.weight || 'regular', 'fontWeight', state.theme);
    const isHeader = !['p', 'small'].includes(fontSize);
    const fontFamily = getFromTheme(state.family || (isHeader ? 'heading' : 'body'), 'fontFamily', state.theme);
    const letterSpacing = getFromTheme(state.letterSpacing || state.size, 'letterSpacing', state.theme);
    const lineHeight = getFromTheme(state.lineHeight || state.size, 'lineHeight', state.theme);

    return {
        textDecoration: 'none',
        color: state.theme.color.primary,
        fontFamily,
        fontSize,
        letterSpacing,
        lineHeight,
        fontWeight,
        textAlign: state.textAlign,

        nested: {
            '&:hover': {
                textDecoration: 'underline',
            },
        },
    };
};

export default function Link(props: Props) {
    const { css } = useFela<Theme, Props>(props);

    return (
        <a className={css(boxRule, rule, variantRule, styleRule)} href={props.href}>
            {props.children}
        </a>
    );
}
