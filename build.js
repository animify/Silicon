#!/usr/bin/env node
const { build } = require('estrella');
build({
    entry: 'index.ts',
    outfile: 'dist/silicon.js',
    sourcemap: true,
    bundle: true,
    tsrules: {
        7006: 'WARNING',
    },
});
