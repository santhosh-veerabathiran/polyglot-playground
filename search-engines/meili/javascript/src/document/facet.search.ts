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
    const facetParameters = {
        facetName: 'genres',
        facetQuery: 'Comedy',
        q: '*',
        filter: ['release_date >= 593395200'],
        matchingStrategy: 'all',
        attributesToSearchOn: ['title'],
    };
    try {
        const facetResponse = await client.index<IMovieDocument>(indexName).searchForFacetValues(facetParameters as any);

        console.log(`Facet search results for ${facetParameters.facetName} =>`);
        console.dir(facetResponse, { depth: null });
    } catch (e: any) {
        console.error(`${e.name}: ${e.message}`);
    }
    console.log('');
}

search();
