import React from 'react';
import { Theme, ThemeContainer } from '../theme/types';
import { useFela, CssFelaStyle } from 'react-fela';
import { BoxProps, boxRule } from '../utils/boxRule';
import { styleRule, CSSProps } from '../utils/styleRule';
import { VariantProps, variantRule } from '../utils/variantRule';
import getElement, { AsProp } from '../utils/getElement';
import { ExtendProps } from '../types';
import forwardRef from '../utils/forwardRef';

interface ContainerProps {
    size?: keyof ThemeContainer;
}

type Props<T> = AsProp<T> &
    ContainerProps &
    BoxProps &
    CSSProps<Props<T>> &
    VariantProps &
    Omit<React.HTMLProps<React.ElementType>, 'size'>;

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
    const Element = getElement(props, 'div');
    const { css } = useFela<Theme, Props<T>>(props);

    return (
        <Element ref={forwardedRef} className={css(boxRule, rule, variantRule, styleRule)} {...props}>
            {props.children}
        </Element>
    );
}

const Container = forwardRef(ContainerComponent);

Container.displayName = 'Container';

export default Container;
