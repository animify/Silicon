import { Theme } from '../theme/types';

const getFromTheme = (value: string | number | undefined, key: keyof Theme, theme: Theme) => {
    if (!value) return value;
    if (typeof value === 'number') return value;

    const result = theme[key][value];

    if (!result) return value;

    return result;
};

export default getFromTheme;
