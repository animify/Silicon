import React from 'react';
import { useFela, CssFelaStyle } from 'react-fela';
import { Theme } from '../theme/types';
import { BoxProps, boxRule } from '../utils/boxRule';
import { styleRule, StyleProps } from '../utils/styleRule';
import { VariantProps, variantRule } from '../utils/variantRule';

interface Props extends BoxProps, StyleProps<Props>, VariantProps {
    src: string;
    alt?: string;
}

const rule: CssFelaStyle<Theme, Props> = () => ({});

export default function Image(props: Props) {
    const { css } = useFela<Theme, Props>(props);

    return <img className={css(boxRule, rule, variantRule, styleRule)} alt={props.alt} src={props.src} />;
}
