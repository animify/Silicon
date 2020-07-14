export interface AsProp<T> {
    as?: T;
}

export default function getElement<T>(props: AsProp<T>, defaultElement: React.ElementType) {
    if (props.as) return props.as;

    return defaultElement;
}
