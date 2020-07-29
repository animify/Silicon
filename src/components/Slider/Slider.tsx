import React from 'react';
import getElement from '../../utils/getElement';
import forwardRef from '../../utils/forwardRef';
import { ExtendProps, HTMLInputProps, ComponentTypes } from '../../types';
import { useRule } from '../../hooks';
import { sliderStyles } from './styles';

interface Props {
    progress: number;
    loading?: boolean;
}

export type SliderProps<T> = HTMLInputProps & ComponentTypes<T> & Props;

function SliderComponent<T extends React.ReactType = 'input'>(
    props: ExtendProps<SliderProps<T>, T>,
    forwardedRef: React.Ref<T>,
) {
    const { className, ...rest } = props;
    const classRule = useRule<SliderProps<T>>({ style: sliderStyles, props, className });
    const Element = getElement(props, 'input');

    return (
        <Element
            ref={forwardedRef}
            className={classRule}
            disabled={props.loading || props.disabled}
            type="range"
            style={{ '--progress': props.progress * 100 + '%' } as React.CSSProperties}
            {...rest}
        />
    );
}

const Slider = forwardRef(SliderComponent);

Slider.displayName = 'Slider';

export default Slider;
