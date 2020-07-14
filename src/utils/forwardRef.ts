import React from 'react';

export default function forwardRef<T extends React.ForwardRefRenderFunction<any, any>>(component: T) {
    return (React.forwardRef(component) as unknown) as T & { displayName?: string };
}
