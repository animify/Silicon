import React from 'react';
import { Theme } from '../theme/types';
import { useFela, CssFelaStyle } from 'react-fela';
import { IStyle } from 'fela';
import { BoxProps, boxRule } from '../utils/boxRule';
import { CSSProps, styleRule } from '../utils/styleRule';
import { VariantProps, variantRule } from '../utils/variantRule';
import getElement, { AsProp } from '../utils/getElement';
import { ExtendProps } from '../types';
import forwardRef from '../utils/forwardRef';

interface FlexProps {
    direction?: IStyle['flexDirection'];
    wrap?: IStyle['flexWrap'];
    align?: IStyle['alignItems'];
    justify?: IStyle['justifyContent'];
    grow?: IStyle['flexGrow'];
    shrink?: IStyle['flexShrink'];
}

type Props<T> = FlexProps & AsProp<T> & BoxProps & CSSProps<Props<T>> & VariantProps & React.HTMLProps<T>;

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
    const Element = getElement(props, 'div');
    const { css } = useFela<Theme, Props<T>>(props);

    return (
        <Element ref={forwardedRef} className={css(boxRule, rule, variantRule, styleRule)} {...props}>
            {props.children}
        </Element>
    );
}

const Flex = forwardRef(FlexComponent);

Flex.displayName = 'Flex';

export default Flex;
