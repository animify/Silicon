import React, { useState, useEffect } from 'react';
import { renderer } from '../utils/felaConfig';
import { RendererProvider, ThemeProvider } from 'react-fela';
import lightTheme from '../Themes/light';

interface Props {
    children: React.ReactElement;
}

export default function Silicon({ children }: Props) {
    return (
        <RendererProvider renderer={renderer}>
            <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>
        </RendererProvider>
    );
}
