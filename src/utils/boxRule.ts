import { CssFelaStyle } from 'react-fela';
import { Theme } from '../theme/types';
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
    bg?: CSS.BackgroundColorProperty;
    color?: CSS.ColorProperty;
    borderColor?: CSS.BorderColorProperty;
}

const getFromTheme = (val: string | number | undefined, prop: keyof Theme, theme: Theme) => {
    if (!val) return val;
    if (typeof val === 'number') return val;

    const result = theme[prop][val];

    if (!result) return val;

    return result;
};

export const boxRule: CssFelaStyle<Theme, BoxProps> = (state) => {
    const margin = getFromTheme(state.m, 'spacing', state.theme);
    const padding = getFromTheme(state.p, 'spacing', state.theme);

    const marginTop = getFromTheme(state.mt, 'spacing', state.theme) ?? state.mt ?? state.my;
    const marginBottom = getFromTheme(state.mb, 'spacing', state.theme) ?? state.mb ?? state.my;
    const marginLeft = getFromTheme(state.ml, 'spacing', state.theme) ?? state.ml ?? state.mx;
    const marginRight = getFromTheme(state.mr, 'spacing', state.theme) ?? state.mr ?? state.mx;

    const paddingTop = getFromTheme(state.pt, 'spacing', state.theme) ?? state.pt ?? state.py;
    const paddingBottom = getFromTheme(state.pb, 'spacing', state.theme) ?? state.pb ?? state.py;
    const paddingLeft = getFromTheme(state.pl, 'spacing', state.theme) ?? state.pl ?? state.px;
    const paddingRight = getFromTheme(state.pr, 'spacing', state.theme) ?? state.pr ?? state.px;

    const color = getFromTheme(state.color, 'color', state.theme);
    const backgroundColor = getFromTheme(state.bg, 'color', state.theme);
    const borderColor = getFromTheme(state.borderColor, 'color', state.theme);

    return {
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
        backgroundColor,
        color,
        borderColor,
    };
};
