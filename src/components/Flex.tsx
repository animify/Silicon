import React from 'react';
import { Theme } from '../theme/types';
import { CssFelaStyle } from 'react-fela';
import { IStyle } from 'fela';
import getElement from '../utils/getElement';
import { ExtendProps, HTMLDivProps, ComponentTypes } from '../types';
import forwardRef from '../utils/forwardRef';
import { useRule } from '../hooks';

interface FlexProps {
    direction?: IStyle['flexDirection'];
    wrap?: IStyle['flexWrap'];
    align?: IStyle['alignItems'];
    justify?: IStyle['justifyContent'];
    grow?: IStyle['flexGrow'];
    shrink?: IStyle['flexShrink'];
}

type Props<T> = HTMLDivProps & ComponentTypes<T> & FlexProps;

const rule: CssFelaStyle<Theme, Props<any>> = (state) => ({
    display: 'flex',
    flexDirection: state.direction,
    flexWrap: state.wrap,
    justifyContent: state.justify,
    alignItems: state.align,
    flexGrow: state.grow,
    flexShrink: state.shrink,
});

function FlexComponent<T extends React.ReactType = 'div'>(props: ExtendProps<Props<T>, T>, forwardedRef: React.Ref<T>) {
    const { className, ...rest } = props;
    const classRule = useRule<Props<T>>({ rule, props, className });
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
