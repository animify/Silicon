import React from 'react';
import { Theme } from '../Themes/types';
import { useFela, CssFelaStyle } from 'react-fela';
import emptyRuleFn from '../utils/emptyRuleFn';
import { IStyle } from 'fela';
import { BoxProps, boxRule } from '../utils/box';

interface Props extends BoxProps {
    children: React.ReactNode;
    as?: keyof React.ReactHTML;
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
    style?: CssFelaStyle<Theme, Omit<Props, 'style'>>;
}

const rule: CssFelaStyle<Theme, Props> = (state) => ({
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

export default function Grid({ style = emptyRuleFn, ...props }: Props) {
    const Element = props.as || 'div';
    const { css } = useFela<Theme, Props>(props);

    return <Element className={css(boxRule, rule, style)}>{props.children}</Element>;
}
