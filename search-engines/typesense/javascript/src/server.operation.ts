import { Client } from 'typesense';

const client = new Client({
    nodes: [{ host: 'localhost', port: 8108, protocol: 'http' }],
    apiKey: 'xyz',
    connectionTimeoutSeconds: 2,
});

async function snapshot() {
    try {
        const snapshot = await client.operations.perform('snapshot', { snapshot_path: '/snapshot' });

        console.log(`Snapshot created successfully`);
        console.dir(snapshot, { depth: null });
    } catch (e: any) {
        console.error(`${e.name}: ${e.message}`);
    }
    console.log('');
}

async function electLeader() {
    try {
        const leader = await client.operations.perform('vote');

        console.log(`Leader elected successfully`);
        console.dir(leader, { depth: null });
    } catch (e: any) {
        console.error(`${e.name}: ${e.message}`);
    }
    console.log('');
}

async function metrics() {
    try {
        const metrics = await client.metrics.retrieve();

        console.log(`Metrics retrieved successfully`);
        console.dir(metrics, { depth: null });
    } catch (e: any) {
        console.error(`${e.name}: ${e.message}`);
    }
    console.log('');
}

async function healthCheck() {
    try {
        const health = await client.health.retrieve();

        console.log(`Health check successful`);
        console.dir(health, { depth: null });
    } catch (e: any) {
        console.error(`${e.name}: ${e.message}`);
    }
    console.log('');
}

async function main() {
    await snapshot();
    await electLeader();
    await metrics();
    await healthCheck();
}

main();
