import { Theme } from '../theme/types';

const getFromTheme = (value: string | number | undefined, key: keyof Theme, theme: Theme) => {
    if (!value) return value;
    if (typeof value === 'number') return value;

    const themeProp = theme[key];
    if (!themeProp) return value;

    const result = themeProp[value];
    if (!result) return value;

    return result;
};

export default getFromTheme;
