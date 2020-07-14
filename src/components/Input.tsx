import React from 'react';
import { useFela, CssFelaStyle } from 'react-fela';
import { Theme } from '../theme/types';
import { BoxProps, boxRule } from '../utils/boxRule';
import { CSSProps, styleRule } from '../utils/styleRule';
import { VariantProps, variantRule } from '../utils/variantRule';

interface InputProps {
    loading?: boolean;
}

type Props = InputProps & BoxProps & CSSProps<Props> & VariantProps & React.InputHTMLAttributes<HTMLInputElement>;

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

function InputComponent(props: Props, forwardedRef: React.Ref<HTMLInputElement>) {
    const { css } = useFela<Theme, Props>(props);

    return (
        <input
            ref={forwardedRef}
            className={css(boxRule, rule, variantRule, styleRule)}
            disabled={props.loading || props.disabled}
            {...props}
        />
    );
}

const Input = React.forwardRef(InputComponent);

Input.displayName = 'Input';

export default Input;
