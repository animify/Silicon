import { ThemeTypographyScale } from '../theme/types';

export interface AsProp<T> {
    as?: T;
}

export interface ElementProps {
    as?: React.ElementType | (() => JSX.Element);
    size?: keyof ThemeTypographyScale;
}

export default function getElement(props: ElementProps, defaultElement: React.ElementType) {
    if (props.as) return props.as;
    if (props.size) return props.size;

    return defaultElement;
}
