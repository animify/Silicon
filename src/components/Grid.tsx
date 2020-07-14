import React from 'react';
import { Theme } from '../theme/types';
import { useFela, CssFelaStyle } from 'react-fela';
import { IStyle } from 'fela';
import { BoxProps, boxRule } from '../utils/boxRule';
import { CSSProps, styleRule } from '../utils/styleRule';
import { VariantProps, variantRule } from '../utils/variantRule';
import getElement, { AsProp } from '../utils/getElement';
import { ExtendProps } from '../types';
import forwardRef from '../utils/forwardRef';

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

type Props<T> = GridProps & AsProp<T> & BoxProps & CSSProps<T> & VariantProps & React.HTMLProps<T>;

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
    const Element = getElement(props, 'div');
    const { css } = useFela<Theme, Props<T>>(props);

    return (
        <Element ref={forwardedRef} className={css(boxRule, rule, variantRule, styleRule)} {...props}>
            {props.children}
        </Element>
    );
}

const Grid = forwardRef(GridComponent);

Grid.displayName = 'Grid';

export default Grid;
