import React from 'react';
import { useFela, CssFelaStyle } from 'react-fela';
import { Theme } from '../theme/types';
import { BoxProps, boxRule } from '../utils/boxRule';
import { StyleProps, styleRule } from '../utils/styleRule';
import { VariantProps, variantRule } from '../utils/variantRule';

interface Props extends BoxProps, StyleProps<Props>, VariantProps {
    kind: 'primary' | 'secondary';
    children: React.ReactNode;
    loading?: boolean;
    disabled?: boolean;
}

const rule: CssFelaStyle<Theme, Props> = (state) => ({
    backgroundColor: state.theme.color.primary,
    color: state.theme.color.white,
    fontWeight: state.theme.fontWeight.medium,
    padding: '8px 16px',
    appearance: 'none',
    outline: 0,
    border: 0,
    borderRadius: '4px',
    lineHeight: '24px',
    letterSpacing: '0.4px',
    cursor: state.loading || state.disabled ? 'default' : 'pointer',
    nested: {
        ':hover:not(:disabled)': {},
        ':active:not(:disabled)': {
            backgroundColor: state.theme.color.secondary,
        },
    },
});

export default function Button(props: Props) {
    const { css } = useFela<Theme, Props>(props);

    return (
        <button className={css(boxRule, rule, variantRule, styleRule)} disabled={props.loading || props.disabled}>
            {props.children}
        </button>
    );
}
