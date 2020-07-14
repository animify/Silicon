import React from 'react';
import { CssFelaStyle } from 'react-fela';
import { Theme } from '../theme/types';
import getElement from '../utils/getElement';
import { ExtendProps, HTMLImgProps, ComponentTypes } from '../types';
import forwardRef from '../utils/forwardRef';
import { useRule } from '../hooks';

type Props<T> = HTMLImgProps & ComponentTypes<T>;

const rule: CssFelaStyle<Theme, Props<any>> = () => ({});

function ImageComponent<T extends React.ReactType = 'img'>(
    props: ExtendProps<Props<T>, T>,
    forwardedRef: React.Ref<T>,
) {
    const { className, ...rest } = props;
    const classRule = useRule<Props<T>>({ rule, props, className });
    const Element = getElement(props, 'img');

    return <Element ref={forwardedRef} className={classRule} {...rest} />;
}

const Image = forwardRef(ImageComponent);

Image.displayName = 'Image';

export default Image;
