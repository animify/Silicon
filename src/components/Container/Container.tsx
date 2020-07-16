import React from 'react';
import { ThemeScalingKey } from '../../theme/types';
import getElement from '../../utils/getElement';
import { ExtendProps, HTMLDivProps, ComponentTypes } from '../../types';
import forwardRef from '../../utils/forwardRef';
import { useRule } from '../../hooks';
import { containerStyles } from './styles';

interface Props {
    size?: ThemeScalingKey;
}

export type ContainerProps<T> = Omit<HTMLDivProps, 'size'> & ComponentTypes<T> & Props;

function ContainerComponent<T extends React.ReactType = 'div'>(
    props: ExtendProps<ContainerProps<T>, T>,
    forwardedRef: React.Ref<T>,
) {
    const { className, ...rest } = props;
    const classRule = useRule<ContainerProps<T>>({ style: containerStyles, props, className });
    const Element = getElement(props, 'div');

    return (
        <Element ref={forwardedRef} className={classRule} {...rest}>
            {props.children}
        </Element>
    );
}

const Container = forwardRef(ContainerComponent);

Container.displayName = 'Container';

export default Container;
