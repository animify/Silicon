import React from 'react';
import { Theme } from '../theme/types';
import { useFela, CssFelaStyle } from 'react-fela';
import { IStyle } from 'fela';
import { BoxProps, boxRule } from '../utils/boxRule';
import { CSSProps, styleRule } from '../utils/styleRule';
import { VariantProps, variantRule } from '../utils/variantRule';

interface FlexProps {
    children?: React.ReactNode;
    as?: React.ElementType;
    direction?: IStyle['flexDirection'];
    wrap?: IStyle['flexWrap'];
    align?: IStyle['alignItems'];
    justify?: IStyle['justifyContent'];
    grow?: IStyle['flexGrow'];
    shrink?: IStyle['flexShrink'];
}

type Props = FlexProps & BoxProps & CSSProps<Props> & VariantProps & React.HTMLProps<React.ElementType>;

const rule: CssFelaStyle<Theme, Props> = (state) => ({
    display: 'flex',
    flexDirection: state.direction,
    flexWrap: state.wrap,
    alignItems: state.align,
    justifyContent: state.justify,
    flexGrow: state.grow,
    flexShrink: state.shrink,
});

function FlexComponent(props: Props, forwardedRef: React.Ref<React.ElementType>) {
    const Element = props.as || 'div';
    const { css } = useFela<Theme, Props>(props);

    return (
        <Element ref={forwardedRef} className={css(boxRule, rule, variantRule, styleRule)}>
            {props.children}
        </Element>
    );
}

const Flex = React.forwardRef(FlexComponent);

Flex.displayName = 'Flex';

export default Flex;
