import React from 'react';
import { renderer } from '../utils/felaConfig';
import { RendererProvider, ThemeProvider } from 'react-fela';
import lightTheme from '../Themes/light';
import { Theme } from '../Themes/types';

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
