import { Theme } from './types';
import baseTheme from './base';

const lightTheme: Theme = {
    ...baseTheme,
    color: {
        primary: '#4f3bf1',
        secondary: 'orange',
        white: '#fff',
        black: '#000',
    },
};

export default lightTheme;
