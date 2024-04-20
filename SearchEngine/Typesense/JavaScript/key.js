const Typesense = require('typesense');

const client = new Typesense.Client({
    nodes: [
        {
            host: 'localhost',
            port: 8108,
            protocol: 'http'
        }
    ],
    apiKey: 'xyz',
    connectionTimeoutSeconds: 2
});

async function create() {
    const searchKey = {
        description: 'Search Only Key',
        actions: ['documents:search'],
        collections: ['*'],
        value: 'qszxaw'
    }
    try {
        console.log(await client.keys().create(searchKey));
    }
    catch(e) {
        console.log(e.message);
    }
}

async function deleteK() {
    try {
        console.log(await client.keys(0).delete());
    }
    catch(e) {
        console.log(e.message);
    }
}

async function retrieve() {
    try {
        console.log(await client.keys(0).retrieve());
    }
    catch(e) {
        console.log(e.message);
    }
}

async function retrieveAll() {
    try {
        console.dir(await client.keys().retrieve(),{
            depth: null
        });
    }
    catch(e) {
        console.log(e.message);
    }
}

// create();
// deleteK();
// retrieve();
// retrieveAll();