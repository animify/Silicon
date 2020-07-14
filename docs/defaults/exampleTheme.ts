import { PrismTheme } from 'prism-react-renderer';

const exampleTheme: PrismTheme = {
    plain: {
        backgroundColor: '#1c1c1c',
        color: '#D5D5D5',
    },
    styles: [
        {
            types: ['comment', 'prolog', 'doctype', 'cdata'],
            style: {
                color: '#D5D5D5',
            },
        },
        {
            types: ['punctuation'],
            style: {
                opacity: 0.6,
            },
        },
        {
            types: ['namespace'],
            style: {
                opacity: 0.7,
            },
        },
        {
            types: ['tag', 'operator', 'number', 'keyword'],
            style: {
                // Yellow
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
                color: '#11dccb',
            },
        },
        {
            types: [
                'boolean',
                'string',
                'entity',
                'url',
                'attr-value',
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
                color: '#7AB1FF',
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
