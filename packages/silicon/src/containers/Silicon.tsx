import React from 'react';
import { renderer } from '../utils/felaConfig';
import { RendererProvider } from 'react-fela';

interface Props {
    children: React.ReactElement;
}

export default function Silicon({ children }: Props) {
    return <RendererProvider renderer={renderer}>{children}</RendererProvider>;
}
