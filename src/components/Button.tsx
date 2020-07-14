import React from 'react';
import { useFela, CssFelaStyle } from 'react-fela';
import { Theme } from '../theme/types';
import { BoxProps, boxRule } from '../utils/boxRule';
import { CSSProps, styleRule } from '../utils/styleRule';
import { VariantProps, variantRule } from '../utils/variantRule';
import getElement, { AsProp } from '../utils/getElement';
import { ExtendProps } from '../types';
import forwardRef from '../utils/forwardRef';

interface InputProps {
    kind?: 'primary' | 'secondary';
    loading?: boolean;
}

type Props<T> = AsProp<T> &
    InputProps &
    BoxProps &
    CSSProps<Props<T>> &
    VariantProps &
    React.ButtonHTMLAttributes<HTMLButtonElement>;

const rule: CssFelaStyle<Theme, Props<any>> = (state) => ({
    backgroundColor: state.theme.color.primary,
    color: state.theme.color.white,
    fontWeight: state.theme.fontWeight.medium,
    padding: '8px 16px',
    appearance: 'none',
    outline: 0,
    border: 0,
    borderRadius: '4px',
    lineHeight: '24px',
    cursor: state.loading || state.disabled ? 'default' : 'pointer',
    nested: {
        ':hover:not(:disabled)': {},
        ':active:not(:disabled)': {
            backgroundColor: state.theme.color.secondary,
        },
    },
});

function ButtonComponent<T extends React.ReactType = 'button'>(
    props: ExtendProps<Props<T>, T>,
    forwardedRef: React.Ref<T>,
) {
    const { css } = useFela<Theme, Props<T>>(props);
    const Element = getElement(props, 'button');

    return (
        <Element
            ref={forwardedRef}
            className={css(boxRule, rule, variantRule, styleRule)}
            disabled={props.loading || props.disabled}
            {...props}
        >
            {props.children}
        </Element>
    );
}

const Button = forwardRef(ButtonComponent);

Button.displayName = 'Button';

export default Button;
