import { CssFelaStyle } from 'react-fela';
import { Theme } from '../../theme/types';
import { ButtonProps } from './Button';

export const buttonStyles: CssFelaStyle<Theme, ButtonProps<any>> = ({ theme, ...props }) => ({
    backgroundColor: theme.color.primary,
    color: theme.color.white,
    fontWeight: theme.fontWeight.medium,
    padding: '8px 16px',
    appearance: 'none',
    outline: 0,
    border: 0,
    borderRadius: '4px',
    lineHeight: '24px',
    cursor: props.loading || props.disabled ? 'default' : 'pointer',
    nested: {
        ':hover:not(:disabled)': {},
        ':active:not(:disabled)': {
            backgroundColor: theme.color.secondary,
        },
    },
});
