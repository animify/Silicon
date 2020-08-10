export interface AsProp<T> {
    as?: T;
}

export default function getElement<T>(
    props: AsProp<T> & { size?: any },
    defaultElement: React.ElementType,
    hasSize = false,
) {
    if (props.as) return props.as;
    if (hasSize && props.size) return props.size;

    return defaultElement;
}
