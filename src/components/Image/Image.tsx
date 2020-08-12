import React from 'react';
import getElement from '../../utils/getElement';
import { ExtendProps, HTMLImgProps, ComponentTypes } from '../../types';
import forwardRef from '../../utils/forwardRef';
import { useRule } from '../../hooks';
import { imageStyles } from './styles';

export type ImageProps<T = {}> = HTMLImgProps & ComponentTypes<T>;

function ImageComponent<T extends React.ReactType = 'img'>(
    props: ExtendProps<ImageProps<T>, T>,
    forwardedRef: React.Ref<T>,
) {
    const { className, ...rest } = props;
    const classRule = useRule<ImageProps<T>>({ style: imageStyles, props, className, variantKey: 'image' });
    const Element = getElement(props, 'img');

    return <Element ref={forwardedRef} className={classRule} {...rest} />;
}

const Image = forwardRef(ImageComponent);

Image.displayName = 'Image';

export default Image;
