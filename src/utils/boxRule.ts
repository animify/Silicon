import { CssFelaStyle } from 'react-fela';
import { Theme } from '../theme/types';
import * as CSS from 'csstype';
import { TLength } from '../types';
import getFromTheme from './getFromTheme';

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
    borderTopWidth?: CSS.BorderTopWidthProperty<TLength>;
    borderRightWidth?: CSS.BorderRightWidthProperty<TLength>;
    borderLeftWidth?: CSS.BorderLeftWidthProperty<TLength>;
    borderBottomWidth?: CSS.BorderBottomWidthProperty<TLength>;
    borderStyle?: CSS.BorderStyleProperty;
    borderTopStyle?: CSS.BorderTopStyleProperty;
    borderRightStyle?: CSS.BorderRightStyleProperty;
    borderLeftStyle?: CSS.BorderLeftStyleProperty;
    borderBottomStyle?: CSS.BorderBottomStyleProperty;
    bg?: CSS.BackgroundColorProperty;
    color?: CSS.ColorProperty;
    borderColor?: CSS.BorderColorProperty;
}

export const boxRule: CssFelaStyle<Theme, BoxProps> = (state) => {
    const margin = getFromTheme(state.m, 'spacing', state.theme);
    const padding = getFromTheme(state.p, 'spacing', state.theme);

    const marginTop = getFromTheme(state.mt ?? state.my, 'spacing', state.theme);
    const marginBottom = getFromTheme(state.mb ?? state.my, 'spacing', state.theme);
    const marginLeft = getFromTheme(state.ml ?? state.mx, 'spacing', state.theme);
    const marginRight = getFromTheme(state.mr ?? state.mx, 'spacing', state.theme);

    const paddingTop = getFromTheme(state.pt ?? state.py, 'spacing', state.theme);
    const paddingBottom = getFromTheme(state.pb ?? state.py, 'spacing', state.theme);
    const paddingLeft = getFromTheme(state.pl ?? state.px, 'spacing', state.theme);
    const paddingRight = getFromTheme(state.pr ?? state.px, 'spacing', state.theme);

    const color = getFromTheme(state.color, 'color', state.theme);
    const backgroundColor = getFromTheme(state.bg, 'color', state.theme);
    const borderColor = getFromTheme(state.borderColor, 'color', state.theme);

    const props = {
        margin,
        padding,
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
        borderTopWidth: state.borderTopWidth,
        borderRightWidth: state.borderRightWidth,
        borderLeftWidth: state.borderLeftWidth,
        borderBottomWidth: state.borderBottomWidth,
        borderTopStyle: state.borderTopStyle,
        borderRightStyle: state.borderRightStyle,
        borderLeftStyle: state.borderLeftStyle,
        borderBottomStyle: state.borderBottomStyle,
        backgroundColor,
        color,
        borderColor,
    };

    Object.keys(props).forEach((key) => (props[key] === undefined ? delete props[key] : {}));

    return props;
};
