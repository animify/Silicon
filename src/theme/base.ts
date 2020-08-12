import { Theme } from './types';
import { fontFamilyHeading, fontFamilyBody, fontFamilyCode, spacing } from './defaults';

const baseTheme: Omit<Theme, 'color'> = {
    loadDefaultFont: true,
    container: {
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1440px',
    },
    spacing,
    fontSize: {
        h1: '48px',
        h2: '40px',
        h3: '32px',
        h4: '24px',
        h5: '20px',
        h6: '16px',
        p: '16px',
        small: '14px',
    },
    letterSpacing: {
        h1: '0px',
        h2: '0px',
        h3: '0px',
        h4: '0px',
        h5: '0px',
        h6: '0px',
        p: '0px',
        small: '0.24px',
    },
    lineHeight: {
        h1: 1.5,
        h2: 1.5,
        h3: 1.5,
        h4: 1.5,
        h5: 1.5,
        h6: 1.5,
        p: 1.5,
        small: 1.5,
    },
    fontFamily: {
        heading: fontFamilyHeading,
        body: fontFamilyBody,
        code: fontFamilyCode,
    },
    fontWeight: {
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
    variants: {
        button: {
            primary: ({ theme }) => ({
                backgroundColor: theme.color.primary,
                color: theme.color.white,
                fontWeight: theme.fontWeight.medium,
                padding: '8px 16px',
                appearance: 'none',
                outline: 0,
                border: 0,
                borderRadius: '4px',
                lineHeight: '24px',
            }),
            small: {
                padding: '4px 8px',
            },
            large: {
                padding: '12px 24px',
            },
        },
        input: {
            primary: ({ theme }) => ({
                backgroundColor: theme.color.primary,
                color: theme.color.white,
                fontWeight: theme.fontWeight.medium,
                padding: '8px 16px',
                appearance: 'none',
                outline: 0,
                border: 0,
                borderRadius: '4px',
                lineHeight: '24px',
            }),
        },
        link: {
            primary: ({ theme }) => ({
                color: theme.color.primary,
            }),
        },
        image: {
            large: {
                padding: '12px 24px',
            },
        },
        slider: {
            large: {
                padding: '12px 24px',
            },
        },
    },
};

export default baseTheme;
