import React from 'react';
import { useFela, CssFelaStyle } from 'react-fela';
import { Theme } from '../themers/types';
import { BoxProps, boxRule } from '../utils/boxRule';
import { styleRule, StyleProps } from '../utils/styleRule';

interface Props extends BoxProps, StyleProps<Props> {
    src: string;
    alt?: string;
}

const rule: CssFelaStyle<Theme, Props> = () => ({});

export default function Image(props: Props) {
    const { css } = useFela<Theme, Props>(props);

    return <img className={css(boxRule, rule, styleRule(props))} alt={props.alt} src={props.src} />;
}
