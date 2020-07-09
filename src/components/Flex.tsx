import React from 'react';
import { Theme } from '../theme/types';
import { useFela, CssFelaStyle } from 'react-fela';
import { IStyle } from 'fela';
import { BoxProps, boxRule } from '../utils/boxRule';
import { StyleProps, styleRule } from '../utils/styleRule';
import { VariantProps, variantRule } from '../utils/variantRule';

interface Props extends BoxProps, StyleProps<Props>, VariantProps {
    children: React.ReactNode;
    as?: keyof React.ReactHTML;
    direction?: IStyle['flexDirection'];
    wrap?: IStyle['flexWrap'];
    align?: IStyle['alignItems'];
    justify?: IStyle['justifyContent'];
}

const rule: CssFelaStyle<Theme, Props> = (state) => ({
    display: 'flex',
    flexDirection: state.direction,
    flexWrap: state.wrap,
    alignItems: state.align,
    justifyContent: state.justify,
});

export default function Flex(props: Props) {
    const Element = props.as || 'div';
    const { css } = useFela<Theme, Props>(props);

    return <Element className={css(boxRule, rule, variantRule, styleRule)}>{props.children}</Element>;
}
