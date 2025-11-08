import { MeiliSearch } from 'meilisearch';

const client = new MeiliSearch({ host: 'http://localhost:7700', apiKey: 'xyz' });

async function create() {
    const schema = {
        name: 'Admin API Key',
        description: 'Use it for perform all the operations in all indexes',
        actions: ['*'],
        indexes: ['*'],
        expiresAt: new Date('2028-12-31T23:59:59Z'),
    };

    try {
        const key = await client.createKey(schema);

        console.log(`Key created successfully`);
        console.dir(key, { depth: null });
    } catch (e: any) {
        console.error(`${e.name}: ${e.message}`);
    }
    console.log('');
}

async function update() {
    try {
        const key = await client.updateKey('qszxaw', {
            name: 'New Admin API Key',
            description: 'You can use this key to perform all the operations in all indexes',
        });

        console.log(`Key updated successfully`);
        console.dir(key, { depth: null });
    } catch (e: any) {
        console.error(`${e.name}: ${e.message}`);
    }
    console.log('');
}

async function get() {
    try {
        const key = await client.getKey('qszxaw');

        console.log(`Key retrieved successfully`);
        console.dir(key, { depth: null });
    } catch (e: any) {
        console.error(`${e.name}: ${e.message}`);
    }
    console.log('');
}

async function getAll() {
    try {
        const keys = await client.getKeys();

        console.log(`Keys retrieved successfully`);
        console.dir(keys, { depth: null });
    } catch (e: any) {
        console.error(`${e.name}: ${e.message}`);
    }
    console.log('');
}

async function remove() {
    try {
        const key = await client.deleteKey('qszxaw');

        console.log(`Key deleted successfully`);
        console.dir(key, { depth: null });
    } catch (e: any) {
        console.error(`${e.name}: ${e.message}`);
    }
    console.log('');
}

async function main() {
    await create();
    await update();
    await get();
    await getAll();
    await remove();
}

main();
