import React from 'react';
import { ThemeTypographyScale, Theme, ThemeFontWeight, ThemeFontFamily } from '../Themes/types';
import { useFela, CssFelaStyle } from 'react-fela';
import { IStyle } from 'fela';
import { BoxProps, boxRule } from '../utils/boxRule';
import { StyleProps, styleRule } from '../utils/styleRule';

interface Props extends BoxProps, StyleProps<Props> {
    children: React.ReactNode;
    family?: keyof ThemeFontFamily;
    size?: keyof ThemeTypographyScale;
    weight?: keyof ThemeFontWeight;
    textAlign?: IStyle['textAlign'];
}

const rule: CssFelaStyle<Theme, Props> = (state) => {
    const size = state.size || 'p';
    const weight = state.weight || 'regular';
    const isHeader = !['p', 'small'].includes(size);
    const family = state.family || (isHeader ? 'heading' : 'body');

    return {
        fontFamily: state.theme.font.family[family],
        fontSize: state.theme.font.size[size],
        letterSpacing: state.theme.font.letterSpacing[size],
        lineHeight: state.theme.font.lineHeight[size],
        fontWeight: state.theme.font.weight[weight],
        textAlign: state.textAlign,
    };
};

export default function Text(props: Props) {
    const { css } = useFela<Theme, Props>(props);
    const Element = props.size || 'p';

    return <Element className={css(boxRule, rule, styleRule(props))}>{props.children}</Element>;
}
