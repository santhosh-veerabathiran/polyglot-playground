import { acronymRegex, stringCaseConfigs, stringCases } from '@workspace/constants';
import { TTargetCase } from '@workspace/interfaces';

/**
 * Detects the case format of a string (e.g., 'camel', 'snake', 'kebab')
 *
 * @param str - The string to analyze
 * @returns The detected case format or 'sentence' if not recognized
 */
export function detectStringCase(str: string) {
    return (str && stringCases.find((keyCase) => stringCaseConfigs[keyCase].regex.matcher.test(str))) || 'sentence';
}

/**
 * Converts a string to the specified case format
 *
 * @param str - The string to convert
 * @param targetCase - The target case format (default: 'camel')
 * @param uppercaseAcronyms - Whether to uppercase common acronyms (e.g., 'id' -> 'ID')
 * @returns The converted string
 */
export function convertStringCase(str: string, targetCase: TTargetCase = 'camel', uppercaseAcronyms: boolean = false) {
    // Early return for invalid inputs or when no conversion is needed
    if (!str || typeof str !== 'string' || !str.trim() || targetCase === 'original') return str;

    // Get source and target case configurations
    const sourceConfig = stringCaseConfigs[detectStringCase(str)];
    const targetConfig = stringCaseConfigs[targetCase];
    if (!sourceConfig || !targetConfig) return str;

    // Split string into words and normalize case
    const words = str.split(sourceConfig.regex.splitter).map((word) => word.toLowerCase());
    if (!words.length) return str;

    // Convert words to target case format
    const converted = targetConfig.convertor(words).join(targetConfig.separator);

    // Handle acronyms if needed
    if (targetConfig.uppercaseAcronyms && uppercaseAcronyms) {
        return converted.replace(acronymRegex, (match) => match.toUpperCase());
    }
    return converted;
}
