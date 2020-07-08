import { ThemeSpacing } from './types';

export const fontFamilyHeading = `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";`;
export const fontFamilyBody = `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";`;
export const fontFamilyCode = `"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;`;
export const spacing: ThemeSpacing = Array(13)
    .fill(null)
    .reduce((obj, _, index) => {
        const value = index * 4;
        obj[index] = `${value}px`;
        return obj;
    }, {});
