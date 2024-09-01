export const convertObjectsKeysToCamelCase = (objects: Array<Record<string, string>>) => {
    return objects.map((object) => {
        return Object.keys(object).reduce((a, b) => a[snakeToCamel(b)] = object[b], {});
    });
}

export const convertObjectKeysToSnakeCase = (objects: Array<Record<string, string>>) => {
    return objects.map((object) => {
        return Object.keys(object).reduce((a, b) => a[camelToSnake(b)] = object[b], {});
    });
}

export const snakeToCamel = (str: string) => {
    return str.toLowerCase().replace(/([_-][a-z])/g, (group) => group.toUpperCase().replace('_', '').replace('-', ''));
}

export const camelToSnake = (str: string) => {
    return str.replace(/[A-Z0-9]/g, (letter) => `_${letter.toLowerCase()}`);
}
