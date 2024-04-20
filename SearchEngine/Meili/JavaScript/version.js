const { MeiliSearch } = require('meilisearch');

const client = new MeiliSearch({
    host: 'http://localhost:7700',
    apiKey: 'xyz',
});

async function get() {
    try {
        console.log(await client.getVersion())
    }
    catch(e) {
        console.log(e.message);
    }
}

// get();