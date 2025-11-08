import { Client } from 'typesense';

const client = new Client({
    nodes: [{ host: 'localhost', port: 8108, protocol: 'http' }],
    apiKey: 'xyz',
    connectionTimeoutSeconds: 2,
});

const collectionName = 'books';

async function search() {
    const searchRequests = {
        searches: [
            {
                collection: collectionName,
                q: 'harry potter',
                filter_by: 'publication_year: >2000',
            },
            {
                collection: collectionName,
                q: 'flower',
            },
        ],
    };

    const commonParams = {
        query_by: 'title',
        per_page: 2,
    };

    try {
        const searchResponse = await client.multiSearch.perform(searchRequests, commonParams);
        console.log(`Search results for multi search =>`);
        console.dir(searchResponse, { depth: null });
    } catch (e: any) {
        console.error(`${e.name}: ${e.message}`);
    }
    console.log('');
}

search();
