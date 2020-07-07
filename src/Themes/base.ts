import { Theme, ThemeSpacing } from './types';
import { fontFamilyHeading, fontFamilyBody, fontFamilyCode } from './defaults';

const spacing: ThemeSpacing = Array(12)
    .fill(null)
    .reduce((obj, _, index) => {
        const increment = index + 1;
        const value = increment * 4;
        obj[increment] = `${value}px`;
        return obj;
    }, {});

const baseTheme: Omit<Theme, 'color'> = {
    screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
    },
    spacing,
    font: {
        family: {
            heading: fontFamilyHeading,
            body: fontFamilyBody,
            code: fontFamilyCode,
        },
        weight: {
            thin: 100,
            extraLight: 200,
            light: 300,
            regular: 400,
            medium: 500,
            semibold: 600,
            bold: 700,
            extraBold: 800,
            black: 900,
        },
    },
};

export default baseTheme;
