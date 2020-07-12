import React from 'react';
import { Theme, ThemeContainer } from '../theme/types';
import { useFela, CssFelaStyle } from 'react-fela';
import { BoxProps, boxRule } from '../utils/boxRule';
import { styleRule, CSSProps } from '../utils/styleRule';
import { VariantProps, variantRule } from '../utils/variantRule';

interface ContainerProps {
    children?: React.ReactNode;
    as?: React.ElementType;
    size?: keyof ThemeContainer;
}

type Props = ContainerProps &
    BoxProps &
    CSSProps<Props> &
    VariantProps &
    Omit<React.HTMLProps<React.ElementType>, 'size'>;

const rule: CssFelaStyle<Theme, Props> = (state) => ({
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: state.theme.container[state.size || 'lg'],
});

function ContainerComponent(props: Props, forwardedRef: React.Ref<React.ElementType>) {
    const Element = props.as || 'div';
    const { css } = useFela<Theme, Props>(props);

    return (
        <Element ref={forwardedRef} className={css(boxRule, rule, variantRule, styleRule)}>
            {props.children}
        </Element>
    );
}

const Container = React.forwardRef(ContainerComponent);

Container.displayName = 'Container';

export default Container;
