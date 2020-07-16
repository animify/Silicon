import { CssFelaStyle } from 'react-fela';
import { Theme } from '../../theme/types';
import { GridProps } from './Grid';

export const gridStyles: CssFelaStyle<Theme, GridProps<any>> = ({ theme, ...props }) => ({
    gridGap: props.gridGap,
    gridColumnGap: props.gridColumnGap,
    gridRowGap: props.gridRowGap,
    gridColumn: props.gridColumn,
    gridRow: props.gridRow,
    gridAutoFlow: props.gridAutoFlow,
    gridAutoColumns: props.gridAutoColumns,
    gridAutoRows: props.gridAutoRows,
    gridTemplateColumns: props.gridTemplateColumns,
    gridTemplateRows: props.gridTemplateRows,
    gridTemplateAreas: props.gridTemplateAreas,
    gridArea: props.gridArea,
});
