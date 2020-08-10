import React from 'react';
import { ThemeTypographyScale, ThemeFontWeight, ThemeFontFamily } from '../../theme/types';
import { IStyle } from 'fela';
import getElement from '../../utils/getElement';
import { ExtendProps, ComponentTypes, HTMLTextareaProps } from '../../types';
import forwardRef from '../../utils/forwardRef';
import { useRule } from '../../hooks';
import { textStyles } from './styles';

interface Props {
    family?: keyof ThemeFontFamily;
    size?: keyof ThemeTypographyScale;
    letterSpacing?: keyof ThemeTypographyScale;
    lineHeight?: keyof ThemeTypographyScale;
    weight?: keyof ThemeFontWeight;
    textAlign?: IStyle['textAlign'];
    textTransform?: IStyle['textTransform'];
}

export type TextProps<T> = Omit<HTMLTextareaProps, 'size'> & ComponentTypes<T> & Props;

function TextComponent<T extends React.ReactType = 'p'>(
    props: ExtendProps<TextProps<T>, T>,
    forwardedRef: React.Ref<React.ElementType>,
) {
    const { className, ...rest } = props;
    const classRule = useRule<TextProps<T>>({ style: textStyles, props, className });
    const Element = getElement(props, 'p', true);

    return (
        <Element ref={forwardedRef} className={classRule} {...rest}>
            {props.children}
        </Element>
    );
}

const Text = forwardRef(TextComponent);

Text.displayName = 'Text';

export default Text;
