const { MeiliSearch } = require('meilisearch');

const client = new MeiliSearch({
    host: 'http://localhost:7700',
    apiKey: 'xyz',
});

async function check() {
    try {
        console.log(await client.health());
    }
    catch(e) {
        console.log(e.message);
    }
}

check();