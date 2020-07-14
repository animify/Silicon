import React from 'react';
import { useFela, CssFelaStyle } from 'react-fela';
import { Theme } from '../theme/types';
import { BoxProps, boxRule } from '../utils/boxRule';
import { styleRule, CSSProps } from '../utils/styleRule';
import { VariantProps, variantRule } from '../utils/variantRule';
import getElement, { AsProp } from '../utils/getElement';
import { ExtendProps } from '../types';
import forwardRef from '../utils/forwardRef';

type Props<T> = AsProp<T> & BoxProps & CSSProps<Props<T>> & VariantProps & React.ImgHTMLAttributes<T>;

const rule: CssFelaStyle<Theme, Props<any>> = () => ({});

function ImageComponent<T extends React.ReactType = 'img'>(
    props: ExtendProps<Props<T>, T>,
    forwardedRef: React.Ref<T>,
) {
    const Element = getElement(props, 'img');
    const { css } = useFela<Theme, Props<T>>(props);

    return <Element ref={forwardedRef} className={css(boxRule, rule, variantRule, styleRule)} {...props} />;
}

const Image = forwardRef(ImageComponent);

Image.displayName = 'Image';

export default Image;
