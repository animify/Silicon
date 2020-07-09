import React from 'react';
import { renderer } from '../utils/felaConfig';
import { RendererProvider, ThemeProvider } from 'react-fela';
import lightTheme from '../themers/light';
import { Theme } from '../themers/types';

interface Props {
    children: React.ReactNode;
    theme?: Theme;
}

export default function Silicon({ children, theme = lightTheme }: Props) {
    return (
        <RendererProvider renderer={renderer}>
            <ThemeProvider theme={theme}>
                <>{children}</>
            </ThemeProvider>
        </RendererProvider>
    );
}
