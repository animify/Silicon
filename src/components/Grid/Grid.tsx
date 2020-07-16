import React from 'react';
import { IStyle } from 'fela';
import getElement from '../../utils/getElement';
import { ExtendProps, HTMLDivProps, ComponentTypes } from '../../types';
import forwardRef from '../../utils/forwardRef';
import { useRule } from '../../hooks';
import { gridStyles } from '.';

interface Props {
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

export type GridProps<T> = HTMLDivProps & ComponentTypes<T> & Props;

function GridComponent<T extends React.ReactType = 'div'>(
    props: ExtendProps<GridProps<T>, T>,
    forwardedRef: React.Ref<React.ElementType>,
) {
    const { className, ...rest } = props;
    const classRule = useRule<GridProps<T>>({ style: gridStyles, props, className });
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
