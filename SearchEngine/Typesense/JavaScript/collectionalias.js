const Typesense = require('typesense');

const client = new Typesense.Client({
    nodes: [{
        host: 'localhost',
        port: 8108,
        protocol: 'http',
    }],
    apiKey: 'xyz',
    connectionTimeoutSeconds: 2
});

async function create() {
    try {
        console.log(await client.aliases().upsert('my_books',{collection_name: 'books'}));
    }
    catch(e) {
        console.log(e.message);
    }
}

async function deleteA() {
    try {
        console.log(await client.aliases('my_books').delete());
    }
    catch(e) {
        console.log(e.message);
    }
}

async function retrieve() {
    try {
        console.log(await client.aliases('my_books').retrieve());
    }
    catch(e) {
        console.log(e.message);
    }
}

async function retrieveAll() {
    try {
        console.log(await client.aliases().retrieve());
    }
    catch(e) {
        console.log(e.message);
    }
}

// create();
// deleteA();
// retrieve();
// retrieveAll();