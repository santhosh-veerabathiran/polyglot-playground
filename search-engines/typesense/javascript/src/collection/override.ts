import { Client } from 'typesense';

const client = new Client({
    nodes: [{ host: 'localhost', port: 8108, protocol: 'http' }],
    apiKey: 'xyz',
    connectionTimeoutSeconds: 2,
});

const collectionName = 'books';
const overrideName = 'customize-boat';

async function create() {
    const overrideRules = {
        rule: {
            query: 'boat',
            match: 'exact',
        },
        includes: [
            {
                id: '3023',
                position: 1,
            },
            {
                id: '610',
                position: 2,
            },
        ],
        excludes: [
            {
                id: '6545',
            },
        ],
    };

    try {
        const override = await client
            .collections(collectionName)
            .overrides()
            .upsert(overrideName, overrideRules as any);
        console.log(`Override '${overrideName}' created successfully`);
        console.dir(override, { depth: null });
    } catch (e: any) {
        console.error(`${e.name}: ${e.message}`);
    }
    console.log('');
}

async function remove() {
    try {
        const override = await client.collections(collectionName).overrides(overrideName).delete();
        console.log(`Override '${overrideName}' removed successfully`);
        console.dir(override, { depth: null });
    } catch (e: any) {
        console.error(`${e.name}: ${e.message}`);
    }
    console.log('');
}

async function retrieve() {
    try {
        const override = await client.collections(collectionName).overrides(overrideName).retrieve();
        console.log(`Override '${overrideName}' retrieved successfully`);
        console.dir(override, { depth: null });
    } catch (e: any) {
        console.error(`${e.name}: ${e.message}`);
    }
    console.log('');
}

async function retrieveAll() {
    try {
        const overrides = await client.collections(collectionName).overrides().retrieve();
        console.log(`Overrides retrieved successfully`);
        console.dir(overrides, { depth: null });
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
