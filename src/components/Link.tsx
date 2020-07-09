import React from 'react';
import { ThemeTypographyScale, Theme, ThemeFontWeight, ThemeFontFamily } from '../Themes/types';
import { useFela, CssFelaStyle } from 'react-fela';
import emptyRuleFn from '../utils/emptyRuleFn';
import { IStyle } from 'fela';
import { BoxProps, boxRule } from '../utils/box';

interface Props extends BoxProps {
    children: React.ReactNode;
    href?: string;
    family?: keyof ThemeFontFamily;
    size?: keyof ThemeTypographyScale;
    weight?: keyof ThemeFontWeight;
    textAlign?: IStyle['textAlign'];
    style?: CssFelaStyle<Theme, Omit<Props, 'style'>>;
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

export default function Link({ style = emptyRuleFn, ...props }: Props) {
    const { css } = useFela<Theme, Props>(props);

    return (
        <a className={css(boxRule, rule, style)} href={props.href}>
            {props.children}
        </a>
    );
}
