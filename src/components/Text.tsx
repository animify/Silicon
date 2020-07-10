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
    as?: React.ElementType;
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
    Omit<React.HTMLProps<HTMLHeadingElement | HTMLParagraphElement>, 'size'>;

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

function TextComponent(props: Props, forwardedRef: React.Ref<React.ElementType>) {
    const { css } = useFela<Theme, Props>(props);
    const Element = props.as || props.size || 'p';

    return (
        <Element ref={forwardedRef} className={css(boxRule, rule, variantRule, styleRule)}>
            {props.children}
        </Element>
    );
}

const Text = React.forwardRef(TextComponent);

Text.displayName = 'Text';

export default Text;
