import { useFela, CssFelaStyle } from 'react-fela';
import classNames from 'classnames';
import { Theme } from '../theme/types';
import { boxRule } from '../utils/boxRule';
import { variantRule } from '../utils/variantRule';
import { styleRule } from '../utils/styleRule';

interface HookProps<P> {
    rule: CssFelaStyle<Theme, P>;
    props: P;
    className?: string;
}

export default function useRule<P>({ rule, props, className }: HookProps<P>): string {
    const { css } = useFela<Theme, P>(props);

    return classNames(className, css(rule, boxRule, variantRule, styleRule));
}
