import { PrismTheme } from 'prism-react-renderer';

const exampleTheme: PrismTheme = {
    plain: {
        backgroundColor: '#1c1c1c',
        color: '#dfdfdf',
    },
    styles: [
        {
            types: ['comment', 'prolog', 'doctype', 'cdata', 'punctuation'],
            style: {
                color: '#dfdfdf',
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
                color: '#ffc866',
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
                color: '#beb0ff',
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
                color: '#a4dd5b',
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
