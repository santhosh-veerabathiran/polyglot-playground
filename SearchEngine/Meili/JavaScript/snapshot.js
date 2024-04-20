const { Meilisearch } = require('meilisearch');

const client = new Meilisearch({
    host: 'http://localhost:7700',
    apiKey: 'xyz',
});

async function create() {
    try {
        console.dir(await client.createSnapshot(), {
            depth: null
        });
    }
    catch(e) {
        console.log(e.message);
    }
}

// create();