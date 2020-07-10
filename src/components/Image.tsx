import React from 'react';
import { useFela, CssFelaStyle } from 'react-fela';
import { Theme } from '../theme/types';
import { BoxProps, boxRule } from '../utils/boxRule';
import { styleRule, CSSProps } from '../utils/styleRule';
import { VariantProps, variantRule } from '../utils/variantRule';

interface ImageProps {
    src: string;
}

type Props = ImageProps & BoxProps & CSSProps<Props> & VariantProps & React.HTMLProps<HTMLImageElement>;

const rule: CssFelaStyle<Theme, Props> = () => ({});

function ImageComponent(props: Props) {
    const { css } = useFela<Theme, Props>(props);

    return <img className={css(boxRule, rule, variantRule, styleRule)} alt={props.alt} src={props.src} />;
}

const Image = React.forwardRef(ImageComponent);

Image.displayName = 'Image';

export default Image;
