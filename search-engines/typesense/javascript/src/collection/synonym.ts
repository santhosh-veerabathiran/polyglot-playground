import { Client } from 'typesense';

const client = new Client({
    nodes: [{ host: 'localhost', port: 8108, protocol: 'http' }],
    apiKey: 'xyz',
    connectionTimeoutSeconds: 2,
});

const collectionName = 'books';
const synonymName = 'coat-synonym';

async function create() {
    try {
        const synonyms = ['blazer', 'coat', 'jacket'];

        const synonym = await client.collections(collectionName).synonyms().upsert(synonymName, { synonyms });

        console.log(`Synonym '${synonymName}' created successfully`);
        console.dir(synonym, { depth: null });
    } catch (e: any) {
        console.error(`${e.name}: ${e.message}`);
    }
    console.log('');
}

async function createOneWay() {
    try {
        const synonyms = ['iphone', 'android'];

        const synonym = await client.collections(collectionName).synonyms().upsert('smart-phone-synonym', { synonyms });

        console.log(`Synonym 'smart-phone-synonym' created successfully`);
        console.dir(synonym, { depth: null });
    } catch (e: any) {
        console.error(`${e.name}: ${e.message}`);
    }
    console.log('');
}

async function retrieve() {
    try {
        const synonym = await client.collections(collectionName).synonyms(synonymName).retrieve();

        console.log(`Synonym '${synonymName}' retrieved successfully`);
        console.dir(synonym, { depth: null });
    } catch (e: any) {
        console.error(`${e.name}: ${e.message}`);
    }
    console.log('');
}

async function retrieveAll() {
    try {
        const synonyms = await client.collections(collectionName).synonyms().retrieve();

        console.log(`Synonyms retrieved successfully`);
        console.dir(synonyms, { depth: null });
    } catch (e: any) {
        console.error(`${e.name}: ${e.message}`);
    }
    console.log('');
}

async function remove() {
    try {
        const synonym = await client.collections(collectionName).synonyms(synonymName).delete();

        console.log(`Synonym '${synonymName}' deleted successfully`);
        console.dir(synonym, { depth: null });
    } catch (e: any) {
        console.error(`${e.name}: ${e.message}`);
    }
    console.log('');
}

async function main() {
    await create();
    await createOneWay();
    await retrieve();
    await retrieveAll();
    await remove();
}

main();
