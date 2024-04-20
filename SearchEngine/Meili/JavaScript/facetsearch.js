const { Meilisearch } = require('meilisearch');

const client = new Meilisearch({
    host: 'http://localhost:7700',
    apiKey: 'xyz'
});

async function search() {
    const facetParameters = {
        facetName: 'authors',
        facetQuery: 'Richard Howard',
        q: 'Prince',
        filter: ['publication_year = 1946'],
        matchingStrategy: 'all',
        attributesToSearchOn: ['title'],
    }
    try {
        console.dir(await client.index('books').searchForFacetValues(facetParameters), {
            depth: null
        });
    }
    catch (e) {
        console.log(e.message);
    }
}

search();