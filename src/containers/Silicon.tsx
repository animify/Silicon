import React from 'react';
import { renderer } from '../utils/felaConfig';
import { RendererProvider } from 'react-fela';
import lightTheme from '../theme/light';
import { Theme } from '../theme/types';
import SiliconTheme from './SiliconTheme';

interface Props {
    children: React.ReactNode;
    theme?: Theme;
}

export default function Silicon({ children, theme = lightTheme }: Props) {
    return (
        <RendererProvider renderer={renderer}>
            <SiliconTheme theme={theme}>
                <>{children}</>
            </SiliconTheme>
        </RendererProvider>
    );
}
