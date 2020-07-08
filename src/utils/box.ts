import { IStyle } from 'fela';
import { CssFelaStyle } from 'react-fela';
import { Theme } from '../Themes/types';

export interface BoxProps {
    m?: IStyle['margin'];
    mt?: IStyle['margin'];
    mb?: IStyle['margin'];
    mr?: IStyle['margin'];
    ml?: IStyle['margin'];
    mx?: IStyle['margin'];
    my?: IStyle['margin'];
    p?: IStyle['padding'];
    pt?: IStyle['padding'];
    pb?: IStyle['padding'];
    pr?: IStyle['padding'];
    pl?: IStyle['padding'];
    px?: IStyle['padding'];
    py?: IStyle['padding'];
    width?: IStyle['width'];
    height?: IStyle['height'];
    display?: IStyle['display'];
    minWidth?: IStyle['minWidth'];
    minHeight?: IStyle['minHeight'];
    maxWidth?: IStyle['maxWidth'];
    maxHeight?: IStyle['maxHeight'];
    verticalAlign?: IStyle['verticalAlign'];
    overflow?: IStyle['overflow'];
    overflowX?: IStyle['overflowX'];
    overflowY?: IStyle['overflowY'];
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
        width: state.width,
        height: state.height,
        display: state.display,
        minWidth: state.minWidth,
        minHeight: state.minHeight,
        maxWidth: state.maxWidth,
        maxHeight: state.maxHeight,
        verticalAlign: state.verticalAlign,
        overflow: state.overflow,
        overflowX: state.overflowX,
        overflowY: state.overflowY,
    };
};
