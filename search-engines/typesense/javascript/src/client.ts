import { Client } from 'typesense';

const argumentKeys = ['-p', '--port', '-h', '--host', '-a', '--api-key'] as const;
type ARGUMENT_KEY = (typeof argumentKeys)[number];

const argv = process.argv.slice(2);
const args = argv.reduce((a, b, i) => {
    const key = b as ARGUMENT_KEY;
    if (argumentKeys.includes(key) && !argumentKeys.includes(argv[i + 1] as ARGUMENT_KEY)) {
        a[key] = argv[i + 1] || '';
    }
    return a;
}, {} as Partial<Record<ARGUMENT_KEY, string>>);

const credentials = {
    protocol: 'http',
    host: args['-h'] || args['--host'] || 'localhost',
    port: parseInt(args['-p'] || args['--port'] || '8108'),
    apiKey: args['-a'] || args['--api-key'] || 'xyz',
    connectionTimeoutSeconds: 2,
};

const { protocol, host, port, apiKey, connectionTimeoutSeconds } = credentials;

export const client = new Client({
    nodes: [{ host, port, protocol }],
    apiKey,
    connectionTimeoutSeconds,
});

const seen = new Set();
function replacer(key: string, value: any) {
    if (seen.has(value)) return '<Circular>';
    if (!['number', 'string', 'boolean', 'symbol', 'function'].includes(typeof value)) {
        seen.add(value);
    }
    return value;
}

console.log(JSON.stringify(client, replacer, 2));
