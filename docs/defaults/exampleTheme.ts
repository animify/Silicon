import { PrismTheme } from 'prism-react-renderer';

const exampleTheme: PrismTheme = {
    plain: {
        backgroundColor: '#F9FCFF',
        color: '#172143',
    },
    styles: [
        {
            types: ['comment', 'prolog', 'doctype', 'cdata', 'punctuation'],
            style: {
                color: '#869BAE',
            },
        },
        {
            types: ['namespace'],
            style: {
                opacity: 0.7,
            },
        },
        {
            types: ['tag', 'operator', 'number'],
            style: {
                color: '#F3533D',
            },
        },
        {
            types: ['property', 'function'],
            style: {
                color: '#9a86fd',
            },
        },
        {
            types: ['tag-id', 'selector', 'atrule-id'],
            style: {
                color: '#eeebff',
            },
        },
        {
            types: ['attr-name'],
            style: {
                color: '#5200FF',
            },
        },
        {
            types: [
                'boolean',
                'string',
                'entity',
                'url',
                'attr-value',
                'keyword',
                'control',
                'directive',
                'unit',
                'statement',
                'regex',
                'at-rule',
                'placeholder',
                'variable',
            ],
            style: {
                color: '#1EA644',
            },
        },
        {
            types: ['deleted'],
            style: {
                textDecorationLine: 'line-through',
            },
        },
        {
            types: ['inserted'],
            style: {
                textDecorationLine: 'underline',
            },
        },
        {
            types: ['italic'],
            style: {
                fontStyle: 'italic',
            },
        },
        {
            types: ['important', 'bold'],
            style: {
                fontWeight: 'bold',
            },
        },
        {
            types: ['important'],
            style: {
                color: '#c4b9fe',
            },
        },
    ],
};

export default exampleTheme;
