import { Theme } from './types';
import baseTheme from './base';

const darkTheme: Theme = {
    ...baseTheme,
    color: {
        primary: 'black',
        secondary: 'orange',
        white: '#fff',
        black: '#000',
    },
};

export default darkTheme;
