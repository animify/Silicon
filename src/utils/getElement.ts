export interface AsProp<T> {
    as?: T;
}

export interface ElementProps {
    as?: React.ElementType | (() => JSX.Element);
}

export default function getElement(props: ElementProps, defaultElement: React.ElementType) {
    if (props.as) return props.as;

    return defaultElement;
}
