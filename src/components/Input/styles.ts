import { CssFelaStyle } from 'react-fela';
import { Theme } from '../../theme/types';
import { InputProps } from './Input';

export const inputStyles: CssFelaStyle<Theme, InputProps<any>> = ({ theme, ...props }) => ({
    border: `1px solid ${theme.color.black}`,
    color: theme.color.black,
    padding: '8px 16px',
    appearance: 'none',
    outline: 0,
    borderRadius: '4px',
    lineHeight: '24px',
    cursor: props.loading || props.disabled ? 'default' : undefined,
});
