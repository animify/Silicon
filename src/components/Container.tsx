import React from 'react';
import { Theme, ThemeContainer } from '../theme/types';
import { useFela, CssFelaStyle } from 'react-fela';
import { BoxProps, boxRule } from '../utils/boxRule';
import { styleRule, CSSProps } from '../utils/styleRule';
import { VariantProps, variantRule } from '../utils/variantRule';

interface ContainerProps {
    children: React.ReactNode;
    as?: keyof React.ReactHTML;
    size?: keyof ThemeContainer;
}

type Props = ContainerProps & BoxProps & CSSProps<Props> & VariantProps & React.HTMLProps<keyof React.ReactHTML>;

const rule: CssFelaStyle<Theme, Props> = (state) => ({
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: state.theme.container[state.size || 'lg'],
});

export default function Container(props: Props) {
    const Element = props.as || 'div';
    const { css } = useFela<Theme, Props>(props);

    return <Element className={css(boxRule, rule, variantRule, styleRule)}>{props.children}</Element>;
}
