export function stringifyError(error: Error) {
    return JSON.stringify({
        name: error.name,
        message: error.message,
        stack: error.stack,
    });
}
