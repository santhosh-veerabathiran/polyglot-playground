import { Client } from 'typesense';

const client = new Client({
    nodes: [{ host: 'localhost', port: 8108, protocol: 'http' }],
    apiKey: 'xyz',
    connectionTimeoutSeconds: 2,
});

const aliasName = 'my_books';

async function create() {
    try {
        const alias = await client.aliases().upsert(aliasName, { collection_name: 'books' });

        console.log(`Alias '${aliasName}' created successfully`);
        console.dir(alias, { depth: null });
    } catch (e: any) {
        console.error(`${e.name}: ${e.message}`);
    }
    console.log('');
}

async function retrieve() {
    try {
        const alias = await client.aliases(aliasName).retrieve();

        console.log(`Alias '${aliasName}' retrieved successfully`);
        console.dir(alias, { depth: null });
    } catch (e: any) {
        console.error(`${e.name}: ${e.message}`);
    }
    console.log('');
}

async function retrieveAll() {
    try {
        const aliases = await client.aliases().retrieve();

        console.log(`Aliases retrieved successfully`);
        console.dir(aliases, { depth: null });
    } catch (e: any) {
        console.error(`${e.name}: ${e.message}`);
    }
    console.log('');
}

async function remove() {
    try {
        await client.aliases(aliasName).delete();

        console.log(`Alias '${aliasName}' dropped successfully`);
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
