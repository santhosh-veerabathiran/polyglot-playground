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
    const synonym = {
        synonyms: ['blazer','coat','jacket']
    }
    try {
        console.dir(await client.collections('books').synonyms().upsert('coat-synonym',synonym), {
            depth: null
        })  
    } catch (e) {
        console.log(e.message)
    }
}

async function createOneWay() {
    const synonym = {
        synonyms: ['iphone','android']
    }
    try {
        console.dir(await client.collections('books').synonyms().upsert('smart-phone-synonym',synonym), {
            depth: null
        })  
    } catch (e) {
        console.log(e.message)
    }
}

async function deleteS() {
    try {
        console.dir(await client.collections('books').synonyms('coat-synonym').delete(), {
            depth: null
        })  
    } catch (e) {
        console.log(e.message)
    }
}

async function retrieve() {
    try {
        console.dir(await client.collections('books').synonyms('coat-synonym').retrieve(), {
            depth: null
        })  
    } catch (e) {
        console.log(e.message)
    }
}

async function retrieveAll() {
    try {
        console.dir(await client.collections('books').synonyms().retrieve(), {
            depth: null
        })  
    } catch (e) {
        console.log(e.message)
    }
}

// create();
// createOneWay();
// deleteS();
// retrieve();
// retrieveAll();