import { CssFelaStyle } from 'react-fela';
import { Theme } from '../../theme/types';
import { FlexProps } from './Flex';

export const flexStyles: CssFelaStyle<Theme, FlexProps<any>> = ({ theme, ...props }) => ({
    display: 'flex',
    flexDirection: props.direction,
    flexWrap: props.wrap,
    justifyContent: props.justify,
    alignItems: props.align,
    flexGrow: props.grow,
    flexShrink: props.shrink,
});
