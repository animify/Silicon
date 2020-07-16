import React from 'react';
import { ThemeScalingKey } from '../../theme/types';
import getElement from '../../utils/getElement';
import { ExtendProps, ComponentTypes, HTMLButtonProps } from '../../types';
import forwardRef from '../../utils/forwardRef';
import { useRule } from '../../hooks';
import { buttonStyles } from '.';

interface Props {
    kind?: 'primary' | 'secondary';
    loading?: boolean;
    size?: ThemeScalingKey;
}

export type ButtonProps<T> = HTMLButtonProps & ComponentTypes<T> & Props;

function ButtonComponent<T extends React.ReactType = 'button'>(
    props: ExtendProps<ButtonProps<T>, T>,
    forwardedRef: React.Ref<T>,
) {
    const { className, ...rest } = props;
    const classRule = useRule<ButtonProps<T>>({ style: buttonStyles, props, className });
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
