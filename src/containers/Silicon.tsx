import React, { useLayoutEffect } from 'react';
import { renderer } from '../utils/felaConfig';
import { RendererProvider } from 'react-fela';
import lightTheme from '../theme/light';
import { Theme } from '../theme/types';
import SiliconTheme from './SiliconTheme';
import { IStyle } from 'fela';

interface Props {
    children: React.ReactNode;
    globalStyle?: string;
    theme?: Theme;
}

export default function Silicon({ children, globalStyle, theme = lightTheme }: Props) {
    useLayoutEffect(() => {
        if (!globalStyle) return;

        renderer.renderStatic(globalStyle);
    }, [globalStyle]);

    useLayoutEffect(() => {
        if (!theme.loadDefaultFont) return;

        const interLink = document.createElement('link');
        interLink.setAttribute('rel', 'stylesheet');
        interLink.setAttribute('type', 'text/css');
        interLink.setAttribute(
            'href',
            'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap',
        );
        document.head.appendChild(interLink);

        const codeLink = document.createElement('link');
        codeLink.setAttribute('rel', 'stylesheet');
        codeLink.setAttribute('type', 'text/css');
        codeLink.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Fira+Mono:wght@400&display=swap');
        document.head.appendChild(codeLink);
    }, [theme.loadDefaultFont]);

    useLayoutEffect(() => {
        const globalHeadingStyle: IStyle = {
            fontFamily: theme.fontFamily.heading,
        };
        const globalBodyStyle: IStyle = {
            fontFamily: theme.fontFamily.body,
        };
        const globalCodeStyle: IStyle = {
            fontFamily: theme.fontFamily.code,
        };

        renderer.renderStatic(globalHeadingStyle, 'h1, h2, h3, h4, h5, h6');
        renderer.renderStatic(globalBodyStyle, 'html, body, p, button, input');
        renderer.renderStatic(globalCodeStyle, 'code');
    }, [theme.fontFamily]);

    return (
        <RendererProvider renderer={renderer}>
            <SiliconTheme theme={theme}>
                <>{children}</>
            </SiliconTheme>
        </RendererProvider>
    );
}
