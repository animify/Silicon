import lightTheme from './light';
import { Theme } from './types';

const objectMerge = (target: Theme, source: Partial<Theme>) => {
    for (const key of Object.keys(source)) {
        if (source[key] instanceof Object) Object.assign(source[key], objectMerge(target[key], source[key]));
    }

    Object.assign(target || {}, source);
    return target;
};

export default function extendTheme(partialTheme: Partial<Theme>): Theme {
    return objectMerge(lightTheme, partialTheme);
}
