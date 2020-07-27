import lightTheme from './light';
import { Theme } from './types';

const merge = (target: Record<string, any>, source: Record<string, any>) => {
    for (const key of Object.keys(source)) {
        if (source[key] instanceof Object) Object.assign(source[key], merge(target[key], source[key]));
    }

    Object.assign(target || {}, source);
    return target;
};

export default function extendTheme(partialTheme: Partial<Theme>) {
    return merge(lightTheme, partialTheme);
}
