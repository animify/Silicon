import React from 'react';
import { CssFelaStyle } from 'react-fela';
import { Theme } from '../theme/types';
import getElement from '../utils/getElement';
import { ExtendProps, ComponentTypes, HTMLButtonProps } from '../types';
import forwardRef from '../utils/forwardRef';
import useRule from '../utils/useRule';

interface ButtonProps {
    kind?: 'primary' | 'secondary';
    loading?: boolean;
}

type Props<T> = HTMLButtonProps & ComponentTypes<T> & ButtonProps;

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
    const { className, ...rest } = props;
    const classRule = useRule<Props<T>>({ rule, props, className });
    const Element = getElement(props, 'button');

    return (
        <Element ref={forwardedRef} className={classRule} disabled={props.loading || props.disabled} {...rest}>
            {props.children}
        </Element>
    );
}

const Button = forwardRef(ButtonComponent);

Button.displayName = 'Button';

export default Button;
