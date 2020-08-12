import React from 'react';
import { ThemeTypographyScale, ThemeFontWeight, ThemeFontFamily } from '../../theme/types';
import { IStyle } from 'fela';
import getElement from '../../utils/getElement';
import forwardRef from '../../utils/forwardRef';
import { ExtendProps, HTMLAnchorProps, ComponentTypes } from '../../types';
import { useRule } from '../../hooks';
import { linkStyles } from './styles';

interface Props {
    family?: keyof ThemeFontFamily;
    size?: keyof ThemeTypographyScale;
    letterSpacing?: keyof ThemeTypographyScale;
    lineHeight?: keyof ThemeTypographyScale;
    weight?: keyof ThemeFontWeight;
    textAlign?: IStyle['textAlign'];
}

export type LinkProps<T = {}> = Omit<HTMLAnchorProps, 'size'> & ComponentTypes<T> & Props;

function LinkComponent<T extends React.ReactType = 'a'>(
    props: ExtendProps<LinkProps<T>, T>,
    forwardedRef: React.Ref<T>,
) {
    const { className, ...rest } = props;
    const classRule = useRule<LinkProps<T>>({ style: linkStyles, props, className, variantKey: 'link' });
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
