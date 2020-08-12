import type { Theme } from '../theme/types';
import { CssFelaStyle } from 'react-fela';

export interface VariantProp {
    variant?: string | string[];
}

export const variantRule = (variantKey: string | undefined) => (
    variant: string | undefined,
): CssFelaStyle<Theme, VariantProp> => (state) => {
    if (!variant) return {};

    const style = variantKey ? state.theme.variants[variantKey][variant] : state.theme.variants[variant];

    if (typeof style === 'function') {
        return style(state);
    }

    return style;
};
