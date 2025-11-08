import { MeiliSearch } from 'meilisearch';

const client = new MeiliSearch({ host: 'http://localhost:7700', apiKey: 'xyz' });

const indexName = 'movies';

async function get() {
    try {
        const stats = await client.index(indexName).getStats();
        console.dir(stats, { depth: null });
    } catch (e: any) {
        console.error(`${e.name}: ${e.message}`);
    }
    console.log('');
}

async function getAll() {
    try {
        const stats = await client.getStats();
        console.dir(stats, { depth: null });
    } catch (e: any) {
        console.error(`${e.name}: ${e.message}`);
    }
    console.log('');
}

async function main() {
    await get();
    await getAll();
}

main();
