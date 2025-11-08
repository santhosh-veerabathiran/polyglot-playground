import { MeiliSearch } from 'meilisearch';

const client = new MeiliSearch({ host: 'http://localhost:7700', apiKey: 'xyz' });

async function get() {
    try {
        const task = await client.getTask(2);

        console.log(`Task retrieved successfully`);
        console.dir(task, { depth: null });
    } catch (e: any) {
        console.error(`${e.name}: ${e.message}`);
    }
    console.log('');
}

async function getAll() {
    try {
        const tasks = await client.getTasks();

        console.log(`Tasks retrieved successfully`);
        console.dir(tasks, { depth: null });
    } catch (e: any) {
        console.error(`${e.name}: ${e.message}`);
    }
    console.log('');
}

async function cancel() {
    try {
        const tasks = await client.cancelTasks({
            uids: [2, 5, 6],
        });

        console.log(`Tasks cancelled successfully`);
        console.dir(tasks, { depth: null });
    } catch (e: any) {
        console.error(`${e.name}: ${e.message}`);
    }
    console.log('');
}

async function remove() {
    try {
        const tasks = await client.deleteTasks({
            uids: [3, 5, 6],
        });

        console.log(`Tasks deleted successfully`);
        console.dir(tasks, { depth: null });
    } catch (e: any) {
        console.error(`${e.name}: ${e.message}`);
    }
    console.log('');
}

async function main() {
    await get();
    await getAll();
    await cancel();
    await remove();
}

main();
