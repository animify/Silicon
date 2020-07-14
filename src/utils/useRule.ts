import { useFela, CssFelaStyle } from 'react-fela';
import classNames from 'classnames';
import { Theme } from '../theme/types';
import { boxRule } from './boxRule';
import { variantRule } from './variantRule';
import { styleRule } from './styleRule';

interface HookProps<P> {
    rule: CssFelaStyle<Theme, P>;
    props: P;
    className?: string;
}

export default function useRule<P>({ rule, props, className }: HookProps<P>): string {
    const { css } = useFela<Theme, P>(props);
    const keysOfProps = keys<P>();

    return classNames(className, css(boxRule, rule, variantRule, styleRule));
}
