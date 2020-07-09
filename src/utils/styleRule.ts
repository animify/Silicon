import { CssFelaStyle } from 'react-fela';
import { Theme } from '../Themes/types';

export interface StyleProps<Props = {}> {
    style?: CssFelaStyle<Theme, Omit<Props, 'style'>>;
}

const emptyRuleFn: CssFelaStyle<{}, {}> = () => ({});

export const styleRule = ({ style }: StyleProps) => style || emptyRuleFn;
