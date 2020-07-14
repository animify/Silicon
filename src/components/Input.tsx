import React from 'react';
import { CssFelaStyle } from 'react-fela';
import { Theme } from '../theme/types';
import getElement from '../utils/getElement';
import forwardRef from '../utils/forwardRef';
import { ExtendProps, HTMLInputProps, ComponentTypes } from '../types';
import { useRule } from '../hooks';

interface InputProps {
    loading?: boolean;
}

type Props<T> = HTMLInputProps & ComponentTypes<T> & InputProps;

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
    const { className, ...rest } = props;
    const classRule = useRule<Props<T>>({ rule, props, className });
    const Element = getElement(props, 'input');

    return <Element ref={forwardedRef} className={classRule} disabled={props.loading || props.disabled} {...rest} />;
}

const Input = forwardRef(InputComponent);

Input.displayName = 'Input';

export default Input;
