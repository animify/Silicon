import { PrismTheme } from 'prism-react-renderer';

const exampleTheme: PrismTheme = {
    plain: {
        backgroundColor: '#F5F5F5',
        color: '#555',
    },
    styles: [
        {
            types: ['comment', 'prolog', 'doctype', 'cdata', 'punctuation'],
            style: {
                color: '#757575',
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
                // Yellow
                color: '#ff8f00',
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
                color: '#009c8f',
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
                color: '#0071FF',
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
