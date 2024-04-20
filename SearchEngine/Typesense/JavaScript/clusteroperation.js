const Typesense = require('typesense');

const client = new Typesense.Client({
    nodes:[
        {
            host: 'localhost',
            port: 8108,
            protocol: 'http'
        }
    ],
    apiKey: 'xyz',
    connectionTimeoutSeconds: 2
});

async function snap() {
    try {
        console.dir(await client.operations.perform('snapshot', {
            snapshot_path: '/snapshot'
        }), {
            depth: null
        });
    }
    catch(e) {
        console.log(e.message);
    }
}

async function reElectLeader() {
    try {
        console.dir(await client.operations.perform('vote'), {
            depth: null
        });
    }
    catch(e) {
        console.log(e.message);
    }
}

async function metrics() {
    try {
        console.dir(await client.metrics.retrieve(),{
            depth: null
        });
    }
    catch(e) {
        console.log(e.message);
    }
}

async function getHealth() {
    try {
        console.log(await client.health.retrieve());
    }
    catch(e) {
        console.log(e.message);
    }
}

// snap();
// reElectLeader();
// metrics();
// getHealth();