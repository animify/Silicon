import React from 'react';
import getElement from '../../utils/getElement';
import forwardRef from '../../utils/forwardRef';
import { ExtendProps, HTMLInputProps, ComponentTypes } from '../../types';
import { useRule } from '../../hooks';
import { inputStyles } from './styles';

interface Props {
    loading?: boolean;
}

export type InputProps<T> = HTMLInputProps & ComponentTypes<T> & Props;

function InputComponent<T extends React.ReactType = 'input'>(
    props: ExtendProps<InputProps<T>, T>,
    forwardedRef: React.Ref<T>,
) {
    const { className, ...rest } = props;
    const classRule = useRule<InputProps<T>>({ style: inputStyles, props, className });
    const Element = getElement(props, 'input');

    return <Element ref={forwardedRef} className={classRule} disabled={props.loading || props.disabled} {...rest} />;
}

const Input = forwardRef(InputComponent);

Input.displayName = 'Input';

export default Input;
