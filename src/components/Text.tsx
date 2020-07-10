import React from 'react';
import { ThemeTypographyScale, Theme, ThemeFontWeight, ThemeFontFamily } from '../theme/types';
import { useFela, CssFelaStyle } from 'react-fela';
import { IStyle } from 'fela';
import { BoxProps, boxRule } from '../utils/boxRule';
import { CSSProps, styleRule } from '../utils/styleRule';
import { VariantProps, variantRule } from '../utils/variantRule';
import getFromTheme from '../utils/getFromTheme';

interface TextProps {
    children: React.ReactNode;
    family?: keyof ThemeFontFamily;
    size?: keyof ThemeTypographyScale;
    letterSpacing?: keyof ThemeTypographyScale;
    lineHeight?: keyof ThemeTypographyScale;
    weight?: keyof ThemeFontWeight;
    textAlign?: IStyle['textAlign'];
}

type Props = TextProps &
    BoxProps &
    CSSProps<Props> &
    VariantProps &
    React.HTMLProps<HTMLHeadingElement | HTMLParagraphElement>;

const rule: CssFelaStyle<Theme, Props> = (state) => {
    const fontSize = getFromTheme(state.size || 'p', 'fontSize', state.theme);
    const fontWeight = getFromTheme(state.weight || 'regular', 'fontWeight', state.theme);
    const isHeader = !['p', 'small'].includes(fontSize);
    const fontFamily = getFromTheme(state.family || (isHeader ? 'heading' : 'body'), 'fontFamily', state.theme);
    const letterSpacing = getFromTheme(state.letterSpacing || state.size, 'letterSpacing', state.theme);
    const lineHeight = getFromTheme(state.lineHeight || state.size, 'lineHeight', state.theme);

    return {
        fontFamily,
        fontSize,
        letterSpacing,
        lineHeight,
        fontWeight,
        textAlign: state.textAlign,
    };
};

export default function Text(props: Props) {
    const { css } = useFela<Theme, Props>(props);
    const Element = props.size || 'p';

    return <Element className={css(boxRule, rule, variantRule, styleRule)}>{props.children}</Element>;
}
