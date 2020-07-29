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
        height: 4,
        background: `linear-gradient(
            to right,
            ${theme.color.primary} calc(var(--progress)),
            ${theme.color.dark80} 0%
        )`,
    },

    '::-webkit-slider-thumb': {
        appearance: 'none',
        borderRadius: '50%',
        backgroundColor: theme.color.white,
        marginTop: -4,
        height: 12,
        width: 12,
        transformOrigin: 'center',
        boxShadow: '0 1px 2px rgba(0, 0, 0, .16), 0 1px 2px 2px rgba(0, 0, 0, .08)',
        transition: 'transform 70ms ease',
        transform: 'scale(1)',

        '&:hover': {
            transform: 'scale(1.1)',
        },
    },
});
