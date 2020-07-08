import React from 'react';
import { ThemeTypographyScale, Theme, ThemeFontWeight } from '../Themes/types';
import { useFela, CssFelaStyle } from 'react-fela';
import emptyRuleFn from '../utils/emptyRuleFn';

interface Props {
    children: React.ReactNode;
    size?: keyof ThemeTypographyScale;
    weight?: keyof ThemeFontWeight;
    style?: CssFelaStyle<Theme, Omit<Props, 'style'>>;
}

const rule: CssFelaStyle<Theme, Props> = (state) => {
    const size = state.size || 'p';
    const weight = state.weight || 'regular';
    const isHeader = !['p', 'small'].includes(size);

    return {
        fontFamily: isHeader ? state.theme.font.family.heading : state.theme.font.family.body,
        fontSize: state.theme.font.size[size],
        letterSpacing: state.theme.font.letterSpacing[size],
        lineHeight: state.theme.font.lineHeight[size],
        fontWeight: state.theme.font.weight[weight],
    };
};

export default function Text({ style = emptyRuleFn, ...props }: Props) {
    const { css } = useFela<Theme, Props>(props);
    const Element = props.size || 'p';

    return <Element className={css(rule, style)}>{props.children}</Element>;
}
