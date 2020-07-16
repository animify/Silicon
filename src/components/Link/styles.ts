import { CssFelaStyle } from 'react-fela';
import { Theme } from '../../theme/types';
import { LinkProps } from './Link';
import getFromTheme from '../../utils/getFromTheme';

export const linkStyles: CssFelaStyle<Theme, LinkProps<any>> = ({ theme, ...props }) => {
    const fontSize = getFromTheme(props.size || 'p', 'fontSize', theme);
    const fontWeight = getFromTheme(props.weight || 'regular', 'fontWeight', theme);
    const isHeader = !['p', 'small'].includes(fontSize);
    const fontFamily = getFromTheme(props.family || (isHeader ? 'heading' : 'body'), 'fontFamily', theme);
    const letterSpacing = getFromTheme(props.letterSpacing || props.size, 'letterSpacing', theme);
    const lineHeight = getFromTheme(props.lineHeight || props.size, 'lineHeight', theme);

    return {
        textDecoration: 'none',
        color: theme.color.primary,
        fontFamily,
        fontSize,
        letterSpacing,
        lineHeight,
        fontWeight,
        textAlign: props.textAlign,
        cursor: 'pointer',

        nested: {
            '&:hover': {
                textDecoration: 'underline',
            },
        },
    };
};
