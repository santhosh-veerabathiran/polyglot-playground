const { MeiliSearch } = require('meilisearch');

const client = new MeiliSearch({
    host: 'http://localhost:7700',
    apiKey: 'xyz',
});

async function create() {
    try {
        console.log(await client.createDump());
    }
    catch(e) {
        console.log(e.message);
    }
}

create();