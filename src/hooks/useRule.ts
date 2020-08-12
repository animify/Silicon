import { useFela, CssFelaStyle } from 'react-fela';
import classNames from 'classnames';
import { Theme } from '../theme/types';
import { boxRule } from '../utils/boxRule';
import { variantRule, VariantProp } from '../utils/variantRule';
import { cssRule } from '../utils/cssRule';

interface HookProps<P> {
    style: CssFelaStyle<Theme, P>;
    props: P & VariantProp;
    variantKey?: string;
    className?: string;
}

export default function useRule<P>({ style, props, className, variantKey }: HookProps<P>): string {
    const { css } = useFela<Theme, P>(props);

    const variants = Array.isArray(props.variant) ? props.variant : [props.variant];
    const variantRules = variants.map(variantRule(variantKey));

    return classNames(className, css(style, ...variantRules, boxRule, cssRule));
}
