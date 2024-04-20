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

async function search() {
    const searchRequests = {
        searches: [
            {
                collection: 'books',
                q: 'harry potter',

                filter_by: 'publication_year: >2000',
            },
            {
                collection: 'books',
                q: 'flower'
            }
        ]
    }

    const commonSearchParams = {
        query_by: 'title'
    }

    try {
        console.dir(await client.multiSearch.perform(searchRequests, commonSearchParams), {
            depth: null
        });
    } catch (e) {
        console.log(e.message);
    }
}

search();