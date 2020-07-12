import React from 'react';
import { ThemeProvider } from 'react-fela';
import { Theme } from '../theme/types';

interface Props {
    children: React.ReactNode;
    theme: Theme;
}

export default function SiliconTheme({ children, theme }: Props) {
    return (
        <ThemeProvider theme={theme}>
            <>{children}</>
        </ThemeProvider>
    );
}
