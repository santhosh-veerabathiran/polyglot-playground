import { Client } from 'typesense';

const client = new Client({
    nodes: [{ host: 'localhost', port: 8108, protocol: 'http' }],
    apiKey: 'xyz',
    connectionTimeoutSeconds: 2,
});

async function create() {
    const searchKey = {
        description: 'Search Only Key',
        actions: ['documents:search'],
        collections: ['*'],
        value: 'qszxaw',
    };
    try {
        const key = await client.keys().create(searchKey);

        console.log(`Key created successfully`);
        console.dir(key, { depth: null });
    } catch (e: any) {
        console.error(`${e.name}: ${e.message}`);
    }
    console.log('');
}

async function retrieve() {
    try {
        const key = await client.keys(0).retrieve();

        console.log(`Key retrieved successfully`);
        console.dir(key, { depth: null });
    } catch (e: any) {
        console.error(`${e.name}: ${e.message}`);
    }
    console.log('');
}

async function retrieveAll() {
    try {
        const keys = await client.keys().retrieve();

        console.log(`Keys retrieved successfully`);
        console.dir(keys, { depth: null });
    } catch (e: any) {
        console.error(`${e.name}: ${e.message}`);
    }
    console.log('');
}

async function remove() {
    try {
        const key = await client.keys(0).delete();

        console.log(`Key deleted successfully`);
        console.dir(key, { depth: null });
    } catch (e: any) {
        console.error(`${e.name}: ${e.message}`);
    }
    console.log('');
}

async function main() {
    await create();
    await retrieve();
    await retrieveAll();
    await remove();
}

main();
