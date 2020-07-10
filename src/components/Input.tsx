import React from 'react';
import { useFela, CssFelaStyle } from 'react-fela';
import { Theme } from '../theme/types';
import { BoxProps, boxRule } from '../utils/boxRule';
import { CSSProps, styleRule } from '../utils/styleRule';
import { VariantProps, variantRule } from '../utils/variantRule';

interface InputProps {
    loading?: boolean;
}

type Props = InputProps & BoxProps & CSSProps<Props> & VariantProps & React.HTMLProps<HTMLInputElement>;

const rule: CssFelaStyle<Theme, Props> = (state) => ({
    border: `1px solid ${state.theme.color.black}`,
    color: state.theme.color.black,
    padding: '8px 16px',
    appearance: 'none',
    outline: 0,
    borderRadius: '4px',
    lineHeight: '24px',
    cursor: state.loading || state ? 'default' : undefined,
});

export default function Input(props: Props) {
    const { css } = useFela<Theme, Props>(props);

    return (
        <input
            className={css(boxRule, rule, variantRule, styleRule)}
            disabled={props.loading || props.disabled}
            value={props.value}
            {...props}
        />
    );
}
