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
        size: {
            h1: '48px',
            h2: '40px',
            h3: '32px',
            h4: '24px',
            h5: '20px',
            h6: '16px',
            p: '16px',
            small: '12px',
        },
        letterSpacing: {
            h1: '0px',
            h2: '0px',
            h3: '0px',
            h4: '0px',
            h5: '0px',
            h6: '0px',
            p: '0px',
            small: '0px',
        },
        lineHeight: {
            h1: 1.2,
            h2: 1.2,
            h3: 1.2,
            h4: 1.2,
            h5: 1.2,
            h6: 1.2,
            p: 1.2,
            small: 1.2,
        },
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
