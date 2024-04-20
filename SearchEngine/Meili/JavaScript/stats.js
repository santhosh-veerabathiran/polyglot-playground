const { MeiliSearch } = require('meilisearch');

const client = new MeiliSearch({
    host: 'http;//localhost:7700',
    apiKey: 'xyz'
});

async function get() {
    try {
        console.dir(await client.index('books').getStats(), {
            depth: null,
        });
    }
    catch(e) {
        console.log(e.message);
    }
}

async function getAll() {
    try {
        console.dir(await client.getStats(), {
            depth: null
        });
    }
    catch(e) {
        console.log(e.message);
    }
}

// get();
// getAll();