import React from 'react';
import { ThemeTypographyScale, Theme, ThemeFontWeight, ThemeFontFamily } from '../theme/types';
import { CssFelaStyle } from 'react-fela';
import { IStyle } from 'fela';
import getFromTheme from '../utils/getFromTheme';
import getElement from '../utils/getElement';
import { ExtendProps, ComponentTypes, HTMLTextareaProps } from '../types';
import forwardRef from '../utils/forwardRef';
import { useRule } from '../hooks';

interface TextProps {
    family?: keyof ThemeFontFamily;
    size?: keyof ThemeTypographyScale;
    letterSpacing?: keyof ThemeTypographyScale;
    lineHeight?: keyof ThemeTypographyScale;
    weight?: keyof ThemeFontWeight;
    textAlign?: IStyle['textAlign'];
    textTransform?: IStyle['textTransform'];
}

type Props<T> = Omit<HTMLTextareaProps, 'size'> & ComponentTypes<T> & TextProps;

const rule: CssFelaStyle<Theme, Props<any>> = (state) => {
    const fontSize = getFromTheme(state.size || 'p', 'fontSize', state.theme);
    const fontWeight = getFromTheme(state.weight || 'regular', 'fontWeight', state.theme);
    const isHeader = !['p', 'small'].includes(fontSize);
    const fontFamily = getFromTheme(state.family || (isHeader ? 'heading' : 'body'), 'fontFamily', state.theme);
    const letterSpacing = getFromTheme(state.letterSpacing || state.size, 'letterSpacing', state.theme);
    const lineHeight = getFromTheme(state.lineHeight || state.size, 'lineHeight', state.theme);

    return {
        fontFamily,
        fontSize,
        letterSpacing,
        lineHeight,
        fontWeight,
        textAlign: state.textAlign,
        textTransform: state.textTransform,
    };
};

function TextComponent<T extends React.ReactType = 'p'>(
    props: ExtendProps<Props<T>, T>,
    forwardedRef: React.Ref<React.ElementType>,
) {
    const { className, ...rest } = props;
    const classRule = useRule<Props<T>>({ rule, props, className });
    const Element = getElement(props, 'p');

    return (
        <Element ref={forwardedRef} className={classRule} {...rest}>
            {props.children}
        </Element>
    );
}

const Text = forwardRef(TextComponent);

Text.displayName = 'Text';

export default Text;
