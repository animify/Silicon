import { CssFelaStyle } from 'react-fela';
import { Theme } from '../Themes/types';
import * as CSS from 'csstype';
import { TLength } from '../types';

export interface BoxProps {
    m?: CSS.MarginProperty<TLength>;
    mt?: CSS.MarginProperty<TLength>;
    mb?: CSS.MarginProperty<TLength>;
    mr?: CSS.MarginProperty<TLength>;
    ml?: CSS.MarginProperty<TLength>;
    mx?: CSS.MarginProperty<TLength>;
    my?: CSS.MarginProperty<TLength>;
    p?: CSS.PaddingProperty<TLength>;
    pt?: CSS.PaddingProperty<TLength>;
    pb?: CSS.PaddingProperty<TLength>;
    pr?: CSS.PaddingProperty<TLength>;
    pl?: CSS.PaddingProperty<TLength>;
    px?: CSS.PaddingProperty<TLength>;
    py?: CSS.PaddingProperty<TLength>;
    position?: CSS.PositionProperty;
    width?: CSS.WidthProperty<TLength>;
    height?: CSS.HeightProperty<TLength>;
    display?: CSS.DisplayProperty;
    minWidth?: CSS.MinWidthProperty<TLength>;
    minHeight?: CSS.MinHeightProperty<TLength>;
    maxWidth?: CSS.MaxWidthProperty<TLength>;
    maxHeight?: CSS.MaxHeightProperty<TLength>;
    overflow?: CSS.OverflowProperty;
    overflowX?: CSS.OverflowXProperty;
    overflowY?: CSS.OverflowYProperty;
    border?: CSS.BorderProperty<TLength>;
    borderTop?: CSS.BorderTopProperty<TLength>;
    borderRight?: CSS.BorderRightProperty<TLength>;
    borderBottom?: CSS.BorderBottomProperty<TLength>;
    borderLeft?: CSS.BorderLeftProperty<TLength>;
    borderRadius?: CSS.BorderRadiusProperty<TLength>;
    borderWidth?: CSS.BorderWidthProperty<TLength>;
    borderStyle?: CSS.BorderStyleProperty;
}

export const boxRule: CssFelaStyle<Theme, BoxProps> = (state) => {
    const marginTop = state.mt ?? state.my ?? state.m;
    const marginBottom = state.mb ?? state.my ?? state.m;
    const marginLeft = state.ml ?? state.mx ?? state.m;
    const marginRight = state.mr ?? state.mx ?? state.m;

    const paddingTop = state.pt ?? state.py ?? state.p;
    const paddingBottom = state.pb ?? state.py ?? state.p;
    const paddingLeft = state.pl ?? state.px ?? state.p;
    const paddingRight = state.pr ?? state.px ?? state.p;

    return {
        marginTop,
        marginBottom,
        marginLeft,
        marginRight,
        paddingTop,
        paddingBottom,
        paddingLeft,
        paddingRight,
        position: state.position,
        width: state.width,
        height: state.height,
        display: state.display,
        minWidth: state.minWidth,
        minHeight: state.minHeight,
        maxWidth: state.maxWidth,
        maxHeight: state.maxHeight,
        overflow: state.overflow,
        overflowX: state.overflowX,
        overflowY: state.overflowY,
        border: state.border,
        borderTop: state.borderTop,
        borderRight: state.borderRight,
        borderBottom: state.borderBottom,
        borderLeft: state.borderLeft,
        borderRadius: state.borderRadius,
        borderWidth: state.borderWidth,
        borderStyle: state.borderStyle,
    };
};
