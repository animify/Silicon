import React from 'react';
import { ThemeTypographyScale, Theme, ThemeFontWeight, ThemeFontFamily } from '../theme/types';
import { CssFelaStyle } from 'react-fela';
import { IStyle } from 'fela';
import getFromTheme from '../utils/getFromTheme';
import getElement from '../utils/getElement';
import forwardRef from '../utils/forwardRef';
import { ExtendProps, HTMLAnchorProps, ComponentTypes } from '../types';
import useRule from '../utils/useRule';

interface LinkProps {
    family?: keyof ThemeFontFamily;
    size?: keyof ThemeTypographyScale;
    letterSpacing?: keyof ThemeTypographyScale;
    lineHeight?: keyof ThemeTypographyScale;
    weight?: keyof ThemeFontWeight;
    textAlign?: IStyle['textAlign'];
}

type Props<T> = Omit<HTMLAnchorProps, 'size'> & ComponentTypes<T> & LinkProps;

const rule: CssFelaStyle<Theme, Props<any>> = (state) => {
    const fontSize = getFromTheme(state.size || 'p', 'fontSize', state.theme);
    const fontWeight = getFromTheme(state.weight || 'regular', 'fontWeight', state.theme);
    const isHeader = !['p', 'small'].includes(fontSize);
    const fontFamily = getFromTheme(state.family || (isHeader ? 'heading' : 'body'), 'fontFamily', state.theme);
    const letterSpacing = getFromTheme(state.letterSpacing || state.size, 'letterSpacing', state.theme);
    const lineHeight = getFromTheme(state.lineHeight || state.size, 'lineHeight', state.theme);

    return {
        textDecoration: 'none',
        color: state.theme.color.primary,
        fontFamily,
        fontSize,
        letterSpacing,
        lineHeight,
        fontWeight,
        textAlign: state.textAlign,

        nested: {
            '&:hover': {
                textDecoration: 'underline',
            },
        },
    };
};

function LinkComponent<T extends React.ReactType = 'a'>(props: ExtendProps<Props<T>, T>, forwardedRef: React.Ref<T>) {
    const { className, ...rest } = props;
    const classRule = useRule<Props<T>>({ rule, props, className });
    const Element = getElement(props, 'a');

    return (
        <Element ref={forwardedRef} className={classRule} {...rest}>
            {props.children}
        </Element>
    );
}

const Link = forwardRef(LinkComponent);

Link.displayName = 'Link';

export default Link;
