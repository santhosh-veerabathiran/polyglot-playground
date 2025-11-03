import { IStringCaseConfig, TStringCase, TTargetCase } from '@workspace/interfaces';

export const stringCaseConfigs = {
    constant: {
        // UPPER_SNAKE_CASE - must be all uppercase with underscores
        regex: {
            matcher: /^[A-Z0-9]+(_[A-Z0-9]+)*$/,
            splitter: /_/,
        },
        separator: '_',
        convertor: (words) => words.map((word) => word.toUpperCase()),
        uppercaseAcronyms: false,
    },
    snake: {
        // snake_case - must be all lowercase with underscores
        regex: {
            matcher: /^[a-z][a-z0-9]*(_[a-z0-9]+)*$/,
            splitter: /_/,
        },
        separator: '_',
        convertor: (words) => words.map((word) => word.toLowerCase()),
        uppercaseAcronyms: false,
    },
    kebab: {
        // kebab-case - must be all lowercase with hyphens
        regex: {
            matcher: /^[a-z][a-z0-9]*(-[a-z0-9]+)*$/,
            splitter: /-/,
        },
        separator: '-',
        convertor: (words) => words.map((word) => word.toLowerCase()),
        uppercaseAcronyms: false,
    },
    dot: {
        // dot.case - must be all lowercase with dots
        regex: {
            matcher: /^[a-z][a-z0-9]*(\.[a-z0-9]+)*$/,
            splitter: /\./,
        },
        separator: '.',
        convertor: (words) => words.map((word) => word.toLowerCase()),
        uppercaseAcronyms: false,
    },
    space: {
        // space case - must be all lowercase with spaces
        regex: {
            matcher: /^[a-z][a-z0-9]*( [a-z0-9]+)*$/,
            splitter: /\s/,
        },
        separator: ' ',
        convertor: (words) => words.map((word) => word.toLowerCase()),
        uppercaseAcronyms: false,
    },
    pascal: {
        // PascalCase - must be all title case without spaces
        regex: {
            matcher: /^[A-Z][a-z0-9]*(?:[A-Z][a-z0-9]*)*$/,
            splitter: /(?=[A-Z])/,
        },
        separator: '',
        convertor: (words) => words.map((word) => word.charAt(0).toUpperCase() + word.slice(1)),
        uppercaseAcronyms: false,
    },
    camel: {
        // camelCase - first word must be lowercase, subsequent words must be title case without spaces
        regex: {
            matcher: /^[a-z][a-z0-9]*([A-Z][a-z0-9]+)+$/,
            splitter: /(?=[A-Z])/,
        },
        separator: '',
        convertor: (words) => {
            return words.map((word, i) => {
                return i === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1);
            });
        },
        uppercaseAcronyms: false,
    },
    title: {
        // Title Case - must be all title case without spaces
        regex: {
            matcher: /^[A-Z][a-z0-9]*(?:[\s][A-Z][a-z0-9]*)*$/,
            splitter: /\s/,
        },
        separator: ' ',
        convertor: (words) => {
            return words.map((word) => {
                return word.charAt(0).toUpperCase() + word.slice(1);
            });
        },
        uppercaseAcronyms: true,
    },
    sentence: {
        // Sentence case - must be all lowercase with spaces
        regex: {
            matcher: /^[a-z][a-z0-9]*( [a-z0-9]+)*$/,
            splitter: /\s/,
        },
        separator: ' ',
        convertor: (words) => {
            return words.map((word, i) => {
                return i === 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word.toLowerCase();
            });
        },
        uppercaseAcronyms: true,
    },
} as const satisfies Record<string, IStringCaseConfig>;

export const stringCases = Object.keys(stringCaseConfigs) as TStringCase[];

export const targetCases = [...stringCases, 'original'] as TTargetCase[];

export const uppercaseAcronyms = ['id', 'uuid', 'url', 'api', 'json', 'http', 'https', 'ip', 'db', 'sql', 'css', 'html', 'vat'];

export const acronymRegex = new RegExp(`\\b(${uppercaseAcronyms.join('|')})\\b`, 'gi');
