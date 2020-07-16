import { CssFelaStyle } from 'react-fela';
import { Theme } from '../theme/types';

export interface CSSProps<Props = {}> {
    css?: CssFelaStyle<Theme, Props>;
}

const emptyRuleFn: CssFelaStyle<{}, {}> = () => ({});

export const cssRule: CssFelaStyle<Theme, CSSProps> = (state) => {
    const css = state.css || emptyRuleFn;

    if (typeof css === 'function') {
        return css(state);
    }

    return css;
};
