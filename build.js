#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-var-requires */
const { build } = require('estrella');
build({
    entry: 'src/index.ts',
    outfile: 'build/silicon.js',
    sourcemap: false,
    bundle: true,
    tsrules: {
        7006: 'WARNING',
    },
});
