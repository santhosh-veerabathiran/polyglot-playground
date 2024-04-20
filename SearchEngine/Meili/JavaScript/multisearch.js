const { MeiliSearch, Meilisearch } = require('meilisearch')

const client = new Meilisearch({
    host: "http://localhost:7700",
    apiKey: "xyz",
});

async function search() {
    try {
        console.log(await client.multiSearch({
            queries: [
                { indexUid: 'movies', q: 'wonder', limit: 5 },
                { indexUid: 'books', q: 'flower', limit: 10 }
            ]
        }));
    }
    catch (e) {
        console.log(e.message);
    }
}

search();