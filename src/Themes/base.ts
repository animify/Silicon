import { Theme } from './types';
import { fontFamilyHeading, fontFamilyBody, fontFamilyCode } from './defaults';

const baseTheme: Pick<Theme, 'font'> = {
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
