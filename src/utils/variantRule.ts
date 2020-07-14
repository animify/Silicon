import { Variants, Theme } from '../theme/types';
import { CssFelaStyle } from 'react-fela';

export interface VariantProp {
    variant?: keyof Variants;
}

export const variantRule: CssFelaStyle<Theme, VariantProp> = (state) => {
    const style = state.variant ? state.theme.variants[state.variant] : {};

    if (typeof style === 'function') {
        return style(state);
    }

    return style;
};
