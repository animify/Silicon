import { CssFelaStyle } from 'react-fela';
import { Theme } from '../../theme/types';
import { SliderProps } from './Slider';

export const sliderStyles: CssFelaStyle<Theme, SliderProps<any>> = ({ theme, ...props }) => ({
    backgroundColor: 'transparent',
    appearance: 'none',
    height: 5,
    cursor: props.loading || props.disabled ? 'default' : undefined,

    '::-webkit-slider-runnable-track': {
        cursor: 'pointer',
        appearance: 'none',
        borderRadius: 3,
        height: 6,
        background: `linear-gradient(
            to right,
            rgba(${theme.color.primary}, .6) calc(var(--progress)),
            rgba(${theme.color.primary}, .2) 0%
        )`,
    },

    '::-webkit-slider-thumb': {
        appearance: 'none',
        borderRadius: 2,
        backgroundColor: theme.color.primary,
        marginTop: -3,
        height: 12,
        width: 5,
        transformOrigin: 'center',
        transition: 'transform 70ms ease',
        transform: 'scale(1)',
    },
});
