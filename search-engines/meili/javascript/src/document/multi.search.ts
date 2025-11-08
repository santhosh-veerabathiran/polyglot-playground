import { MeiliSearch } from 'meilisearch';

const client = new MeiliSearch({ host: 'http://localhost:7700', apiKey: 'xyz' });

const indexName = 'movies';

interface IMovieDocument {
    id: number;
    title: string;
    poster: string;
    overview: string;
    genres: string[];
    release_date: number;
}

async function search() {
    try {
        const searchRequests = {
            queries: [
                {
                    indexUid: indexName,
                    q: 'harry potter',
                    limit: 2,
                },
                {
                    indexUid: indexName,
                    q: 'flower',
                    limit: 3,
                },
            ],
        };
        const searchResponse = await client.multiSearch<IMovieDocument>(searchRequests as any);

        console.log(`Search results for multi search =>`);
        console.dir(searchResponse, { depth: null });
    } catch (e: any) {
        console.error(`${e.name}: ${e.message}`);
    }
    console.log('');
}

search();
