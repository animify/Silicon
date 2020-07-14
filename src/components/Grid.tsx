import React from 'react';
import { Theme } from '../theme/types';
import { CssFelaStyle } from 'react-fela';
import { IStyle } from 'fela';
import getElement from '../utils/getElement';
import { ExtendProps, HTMLDivProps, ComponentTypes } from '../types';
import forwardRef from '../utils/forwardRef';
import { useRule } from '../hooks';

interface GridProps {
    gridGap?: IStyle['gridGap'];
    gridColumnGap?: IStyle['gridColumnGap'];
    gridRowGap?: IStyle['gridRowGap'];
    gridColumn?: IStyle['gridColumn'];
    gridRow?: IStyle['gridRow'];
    gridAutoFlow?: IStyle['gridAutoFlow'];
    gridAutoColumns?: IStyle['gridAutoColumns'];
    gridAutoRows?: IStyle['gridAutoRows'];
    gridTemplateColumns?: IStyle['gridTemplateColumns'];
    gridTemplateRows?: IStyle['gridTemplateRows'];
    gridTemplateAreas?: IStyle['gridTemplateAreas'];
    gridArea?: IStyle['gridArea'];
}

type Props<T> = HTMLDivProps & ComponentTypes<T> & GridProps;

const rule: CssFelaStyle<Theme, Props<any>> = (state) => ({
    gridGap: state.gridGap,
    gridColumnGap: state.gridColumnGap,
    gridRowGap: state.gridRowGap,
    gridColumn: state.gridColumn,
    gridRow: state.gridRow,
    gridAutoFlow: state.gridAutoFlow,
    gridAutoColumns: state.gridAutoColumns,
    gridAutoRows: state.gridAutoRows,
    gridTemplateColumns: state.gridTemplateColumns,
    gridTemplateRows: state.gridTemplateRows,
    gridTemplateAreas: state.gridTemplateAreas,
    gridArea: state.gridArea,
});

function GridComponent<T extends React.ReactType = 'div'>(
    props: ExtendProps<Props<T>, T>,
    forwardedRef: React.Ref<React.ElementType>,
) {
    const { className, ...rest } = props;
    const classRule = useRule<Props<T>>({ rule, props, className });
    const Element = getElement(props, 'div');

    return (
        <Element ref={forwardedRef} className={classRule} {...rest}>
            {props.children}
        </Element>
    );
}

const Grid = forwardRef(GridComponent);

Grid.displayName = 'Grid';

export default Grid;
