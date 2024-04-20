const Typesense = require('typesense');

const client = new Typesense.Client({
    nodes: [{
        host: 'localhost',
        port: 8108,
        protocol: 'http'
    }],
    apiKey: 'xyz',
    connectionTimeoutSeconds: 2
});

async function create() {
    const overrideRules = {
        rule: {
            query: 'boat',
            match: 'exact',
        },
        includes: [
            {
                id: '3023',
                position: 1
            },
            {
                id: '610',
                position: 2
            }
        ],
        excludes: [
            {
                id: '6545'
            }
        ]
    }

    try {
        console.log( await client.collections('books').overrides().upsert('customize-boat', overrideRules));
    }
    catch(e) {
        console.log(e.message);
    }
}

async function deleteO() {
    try {
        console.log(await client.collections('books').overrides('customize-boat').delete())
    }
    catch(e) {
        console.log(e.message)
    }
}

async function retrieve() {
    try {
        console.log(await client.collections('books').overrides('customize-boat').retrieve());
    }
    catch(e) {
        console.log(e.message);
    }
}

async function retrieveAll() {
    try {
        console.log(await client.collections('books').overrides().retrieve());
    }
    catch(e) {
        console.log(e.message);
    }
}

// create();
// deleteO();
// retrieve();
// retrieveAll();