import React from 'react';
import { ThemeTypographyScale, Theme, ThemeFontWeight, ThemeFontFamily } from '../theme/types';
import { useFela, CssFelaStyle } from 'react-fela';
import { IStyle } from 'fela';
import { BoxProps, boxRule } from '../utils/boxRule';
import { StyleProps, styleRule } from '../utils/styleRule';

interface Props extends BoxProps, StyleProps<Props> {
    children: React.ReactNode;
    href?: string;
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
        textDecoration: 'none',
        color: state.theme.color.primary,
        fontFamily: state.theme.font.family[family],
        fontSize: state.theme.font.size[size],
        letterSpacing: state.theme.font.letterSpacing[size],
        lineHeight: state.theme.font.lineHeight[size],
        fontWeight: state.theme.font.weight[weight],
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
        <a className={css(boxRule, rule, styleRule(props))} href={props.href}>
            {props.children}
        </a>
    );
}
