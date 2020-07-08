import React from 'react';
import { Theme } from '../Themes/types';
import { useFela, CssFelaStyle } from 'react-fela';
import emptyRuleFn from '../utils/emptyRuleFn';
import { IStyle } from 'fela';
import { BoxProps, boxRule } from '../utils/box';

interface Props extends BoxProps {
    children: React.ReactNode;
    direction?: IStyle['flexDirection'];
    wrap?: IStyle['flexWrap'];
    align?: IStyle['alignItems'];
    justify?: IStyle['justifyContent'];
    style?: CssFelaStyle<Theme, Omit<Props, 'style'>>;
}

const rule: CssFelaStyle<Theme, Props> = (state) => ({
    display: 'flex',
    flexDirection: state.direction,
    flexWrap: state.wrap,
    alignItems: state.align,
    justifyContent: state.justify,
});

export default function Flex({ style = emptyRuleFn, ...props }: Props) {
    const { css } = useFela<Theme, Props>(props);

    return <div className={css(rule, style, boxRule)}>{props.children}</div>;
}
