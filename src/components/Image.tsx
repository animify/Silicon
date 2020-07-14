import React from 'react';
import { useFela, CssFelaStyle } from 'react-fela';
import { Theme } from '../theme/types';
import { BoxProps, boxRule } from '../utils/boxRule';
import { styleRule, CSSProps } from '../utils/styleRule';
import { VariantProps, variantRule } from '../utils/variantRule';

type Props = BoxProps & CSSProps<Props> & VariantProps & React.ImgHTMLAttributes<HTMLImageElement>;

const rule: CssFelaStyle<Theme, Props> = () => ({});

function ImageComponent(props: Props, forwardedRef: React.Ref<HTMLImageElement>) {
    const { css } = useFela<Theme, Props>(props);

    return <img ref={forwardedRef} className={css(boxRule, rule, variantRule, styleRule)} {...props} />;
}

const Image = React.forwardRef(ImageComponent);

Image.displayName = 'Image';

export default Image;
