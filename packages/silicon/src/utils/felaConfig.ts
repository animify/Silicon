import { createRenderer } from 'fela';
import typescript from 'fela-plugin-typescript';
import prefixer from 'fela-plugin-prefixer';
import fallbackValue from 'fela-plugin-fallback-value';

export const renderer = createRenderer({
    plugins: [typescript(), prefixer(), fallbackValue()],
});
