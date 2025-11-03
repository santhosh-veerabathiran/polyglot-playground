import { stringCaseConfigs } from '@workspace/constants';

export interface IStringCaseConfig {
    regex: {
        matcher: RegExp;
        splitter: RegExp;
    };
    separator: string;
    convertor: (words: string[]) => string[];
    uppercaseAcronyms?: boolean;
}

export type TStringCase = keyof typeof stringCaseConfigs;

export type TTargetCase = TStringCase | 'original';
