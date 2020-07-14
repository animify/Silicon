import React from 'react';
import { useFela, CssFelaStyle } from 'react-fela';
import { Theme } from '../theme/types';
import { BoxProps, boxRule } from '../utils/boxRule';
import { CSSProps, styleRule } from '../utils/styleRule';
import { VariantProps, variantRule } from '../utils/variantRule';
import getElement, { AsProp } from '../utils/getElement';
import forwardRef from '../utils/forwardRef';
import { ExtendProps } from '../types';

interface InputProps {
    loading?: boolean;
}

type Props<T> = InputProps & AsProp<T> & BoxProps & CSSProps<Props<T>> & VariantProps & React.InputHTMLAttributes<T>;

const rule: CssFelaStyle<Theme, Props<any>> = (state) => ({
    border: `1px solid ${state.theme.color.black}`,
    color: state.theme.color.black,
    padding: '8px 16px',
    appearance: 'none',
    outline: 0,
    borderRadius: '4px',
    lineHeight: '24px',
    cursor: state.loading || state ? 'default' : undefined,
});

function InputComponent<T extends React.ReactType = 'input'>(
    props: ExtendProps<Props<T>, T>,
    forwardedRef: React.Ref<T>,
) {
    const Element = getElement(props, 'input');
    const { css } = useFela<Theme, Props<T>>(props);

    return (
        <Element
            ref={forwardedRef}
            className={css(boxRule, rule, variantRule, styleRule)}
            disabled={props.loading || props.disabled}
            {...props}
        />
    );
}

const Input = forwardRef(InputComponent);

Input.displayName = 'Input';

export default Input;
