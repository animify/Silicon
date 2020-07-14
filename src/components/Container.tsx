import React from 'react';
import { Theme, ThemeContainer } from '../theme/types';
import { CssFelaStyle } from 'react-fela';
import getElement from '../utils/getElement';
import { ExtendProps, HTMLDivProps, ComponentTypes } from '../types';
import forwardRef from '../utils/forwardRef';
import { useRule } from '../hooks';

interface ContainerProps {
    size?: keyof ThemeContainer;
}

type Props<T> = Omit<HTMLDivProps, 'size'> & ComponentTypes<T> & ContainerProps;

const rule: CssFelaStyle<Theme, Props<any>> = (state) => ({
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: state.theme.container[state.size || 'lg'],
});

function ContainerComponent<T extends React.ReactType = 'div'>(
    props: ExtendProps<Props<T>, T>,
    forwardedRef: React.Ref<T>,
) {
    const { className, ...rest } = props;
    const classRule = useRule<Props<T>>({ rule, props, className });
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
