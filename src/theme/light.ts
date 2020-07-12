import { Theme } from './types';
import baseTheme from './base';

// Color scale preset:
// https://hihayk.github.io/scale/#3/5/35/80/0/0/100/20/0071FF/0/113/255/white

const lightTheme: Theme = {
    ...baseTheme,
    color: {
        primary: '#0071FF',
        secondary: '#869BAE',

        dark10: '#010101',
        dark20: '#151515',
        dark30: '#353535',
        dark40: '#555555',
        dark50: '#757575',
        dark60: '#959595',
        dark70: '#B5B5B5',
        dark80: '#D5D5D5',
        dark90: '#F5F5F5',

        blue10: '#0048A6',
        blue20: '#0055C4',
        blue30: '#0063E1',
        blue40: '#0071FF',
        blue50: '#2985FF',
        blue60: '#529BFF',
        blue70: '#7AB1FF',
        blue80: '#A3C8FF',
        blue90: '#CCE0FF',

        yellow10: '#A64300',
        yellow20: '#C45B00',
        yellow30: '#DD7505',
        yellow40: '#F2910D',
        yellow50: '#FFA629',
        yellow60: '#FFB952',
        yellow70: '#FFCB7A',
        yellow80: '#FFDCA3',
        yellow90: '#FFEDCC',

        red10: '#A40D01',
        red20: '#BD1E07',
        red30: '#D3320E',
        red40: '#E84917',
        red50: '#FD5D2B',
        red60: '#FF7452',
        red70: '#FF8F7A',
        red80: '#FFAEA3',
        red90: '#FFD0CC',

        green10: '#25812A',
        green20: '#2E953A',
        green30: '#39A94C',
        green40: '#44BB5F',
        green50: '#58D073',
        green60: '#70E189',
        green70: '#8BEEA2',
        green80: '#ABF8BC',
        green90: '#CEFDD9',

        white: '#fff',
        black: '#000',
    },
};

export default lightTheme;
