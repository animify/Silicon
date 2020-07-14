export type TLength = string | 0 | number;

export type Prefer<P, T> = P & Omit<T, keyof P>;
export type ReactPropsWithRef<T extends React.ReactType> = Pick<
    React.ComponentPropsWithRef<T>,
    keyof React.ComponentPropsWithRef<T>
>;
export type ExtendProps<OwnProps, Type extends React.ReactType> = Prefer<OwnProps, ReactPropsWithRef<Type>>;
