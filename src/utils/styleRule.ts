import { CssFelaStyle } from 'react-fela';
import { Theme } from '../theme/types';

export interface StyleProps<Props = {}> {
    style?: CssFelaStyle<Theme, Omit<Props, 'style'>>;
}

const emptyRuleFn: CssFelaStyle<{}, {}> = () => ({});

export const styleRule: CssFelaStyle<Theme, StyleProps> = (state) => {
    const style = state.style || emptyRuleFn;

    if (typeof style === 'function') {
        return style(state);
    }

    return style;
};
