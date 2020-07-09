import React from 'react';
import { useFela, CssFelaStyle } from 'react-fela';
import { Theme } from '../Themes/types';
import emptyRuleFn from '../utils/emptyRuleFn';
import { BoxProps, boxRule } from '../utils/box';

interface Props extends BoxProps {
    kind: 'primary' | 'secondary';
    children: React.ReactNode;
    style?: CssFelaStyle<Theme, Omit<Props, 'style'>>;
    loading?: boolean;
    disabled?: boolean;
}

const rule: CssFelaStyle<Theme, Props> = (state) => ({
    backgroundColor: state.theme.color.primary,
    color: state.theme.color.white,
    fontWeight: state.theme.font.weight.medium,
    padding: '12px 24px',
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

export default function Button({ style = emptyRuleFn, ...props }: Props) {
    const { css } = useFela<Theme, Props>(props);

    return (
        <button className={css(boxRule, rule, style)} disabled={props.loading || props.disabled}>
            {props.children}
        </button>
    );
}
