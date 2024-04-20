const { MeiliSearch, Meilisearch } = require('meilisearch');

const client = new Meilisearch({
    host: 'http://localhost:7700',
    apiKey: 'xyz',
});

async function get() {
    try {
        console.dir(await client.getTask(2), {
            depth: null
        });
    }
    catch(e) {
        console.log(e.message);
    }
}

async function getAll() {
    try {
        console.dir(await client.getTasks(), {
            depth: null
        });
    }
    catch(e) {
        console.log(e.message);
    }
}

async function cancel() {
    try {
        console.dir(await client.cancelTasks({
            uids: [2,5,6]
        }), {
            depth: null
        });
    }
    catch(e) {
        console.log(e.message);
    }
}

async function deleteT() {
    try {
        console.dir(await client.deleteTasks({
            uids: [3,5,6]
        }), {
            depth: null
        });
    }  
    catch(e) {
        console.log(e.message);
    }
}

// get();
// getAll();
// cancel();
// deleteT();