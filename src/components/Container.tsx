import React from 'react';
import { Theme, ThemeContainer } from '../Themes/types';
import { useFela, CssFelaStyle } from 'react-fela';
import emptyRuleFn from '../utils/emptyRuleFn';
import { BoxProps, boxRule } from '../utils/box';

interface Props extends BoxProps {
    children: React.ReactNode;
    as?: keyof React.ReactHTML;
    size?: keyof ThemeContainer;
    style?: CssFelaStyle<Theme, Omit<Props, 'style'>>;
}

const rule: CssFelaStyle<Theme, Props> = (state) => ({
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: state.theme.container[state.size || 'lg'],
});

export default function Container({ style = emptyRuleFn, ...props }: Props) {
    const Element = props.as || 'div';
    const { css } = useFela<Theme, Props>(props);

    return <Element className={css(boxRule, rule, style)}>{props.children}</Element>;
}
