import { CssFelaStyle } from 'react-fela';
import { Theme } from '../../theme/types';
import { ContainerProps } from './Container';

export const containerStyles: CssFelaStyle<Theme, ContainerProps<any>> = ({ theme, ...props }) => ({
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: theme.container[props.size || 'lg'],
});
