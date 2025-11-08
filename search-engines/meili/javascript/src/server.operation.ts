import { MeiliSearch } from 'meilisearch';

const client = new MeiliSearch({ host: 'http://localhost:7700', apiKey: 'xyz' });

async function snapshot() {
    try {
        const snapshot = await client.createSnapshot();

        console.log(`Snapshot created successfully`);
        console.dir(snapshot, { depth: null });
    } catch (e: any) {
        console.error(`${e.name}: ${e.message}`);
    }
    console.log('');
}

async function version() {
    try {
        const version = await client.getVersion();
        console.log(`Version successfully retrieved`);
        console.dir(version, { depth: null });
    } catch (e: any) {
        console.error(`${e.name}: ${e.message}`);
    }
    console.log('');
}

async function health() {
    try {
        const health = await client.health();
        console.log(`Health successfully retrieved`);
        console.dir(health, { depth: null });
    } catch (e: any) {
        console.error(`${e.name}: ${e.message}`);
    }
    console.log('');
}

async function dump() {
    try {
        const dump = await client.createDump();

        console.log(`Dump created successfully`);
        console.dir(dump, { depth: null });
    } catch (e: any) {
        console.error(`${e.name}: ${e.message}`);
    }
    console.log('');
}

async function main() {
    await snapshot();
    await version();
    await health();
    await dump();
}

main();
