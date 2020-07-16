import React from 'react';
import { IStyle } from 'fela';
import getElement from '../../utils/getElement';
import { ExtendProps, HTMLDivProps, ComponentTypes } from '../../types';
import forwardRef from '../../utils/forwardRef';
import { useRule } from '../../hooks';
import { flexStyles } from './styles';

interface Props {
    direction?: IStyle['flexDirection'];
    wrap?: IStyle['flexWrap'];
    align?: IStyle['alignItems'];
    justify?: IStyle['justifyContent'];
    grow?: IStyle['flexGrow'];
    shrink?: IStyle['flexShrink'];
}

export type FlexProps<T> = HTMLDivProps & ComponentTypes<T> & Props;

function FlexComponent<T extends React.ReactType = 'div'>(
    props: ExtendProps<FlexProps<T>, T>,
    forwardedRef: React.Ref<T>,
) {
    const { className, ...rest } = props;
    const classRule = useRule<FlexProps<T>>({ style: flexStyles, props, className });
    const Element = getElement(props, 'div');

    return (
        <Element ref={forwardedRef} className={classRule} {...rest}>
            {props.children}
        </Element>
    );
}

const Flex = forwardRef(FlexComponent);

Flex.displayName = 'Flex';

export default Flex;
