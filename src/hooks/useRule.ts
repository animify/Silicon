import { useFela, CssFelaStyle } from 'react-fela';
import classNames from 'classnames';
import { Theme } from '../theme/types';
import { boxRule } from '../utils/boxRule';
import { variantRule } from '../utils/variantRule';
import { cssRule } from '../utils/cssRule';

interface HookProps<P> {
    style: CssFelaStyle<Theme, P>;
    props: P;
    className?: string;
}

export default function useRule<P>({ style, props, className }: HookProps<P>): string {
    const { css } = useFela<Theme, P>(props);

    return classNames(className, css(style, boxRule, variantRule, cssRule));
}
