import React from 'react';
import { useFela, CssFelaStyle } from 'react-fela';
import { Theme } from '../Themes/types';
import emptyRuleFn from '../utils/emptyRuleFn';
import { BoxProps, boxRule } from '../utils/box';

interface Props extends BoxProps {
    src: string;
    alt?: string;
    style?: CssFelaStyle<Theme, Omit<Props, 'style'>>;
}

const rule: CssFelaStyle<Theme, Props> = () => ({});

export default function Image({ style = emptyRuleFn, ...props }: Props) {
    const { css } = useFela<Theme, Props>(props);

    return <img className={css(boxRule, rule, style)} alt={props.alt} src={props.src} />;
}
