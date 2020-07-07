import { Theme } from './types';
import baseTheme from './base';

const lightTheme: Theme = {
    ...baseTheme,
    color: {
        primary: '#0085e4',
        secondary: 'orange',
        white: '#fff',
        black: '#000',
    },
};

export default lightTheme;
