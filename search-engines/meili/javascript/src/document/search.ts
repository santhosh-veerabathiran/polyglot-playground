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
    const searchParameters = {
        offset: 0,
        limit: 2,

        // hitsPerPage: 25,
        // page: 2,

        // filter: ['authors = "Mark Haddon"'],
        // facets: ['authors'],

        attributesToRetrieve: ['title', 'authors', 'publication_year', 'ratings_count'],

        attributesToCrop: ['title'],
        cropLength: 2,
        cropMarker: '[...]',

        attributesToHighlight: ['title', 'authors'],
        highlightPreTag: "<span class='highligh'>",
        highlightPostTag: '</span>',

        showMatchesPosition: true,
        matchingStrategy: 'all',

        // sort: ['publication_year:desc'],

        showRankingScore: true,
        showRankingScoreDetails: true,

        attributesToSearchOn: ['title', 'authors'],
    };

    try {
        const query = 'harry';
        const searchResponse = await client.index<IMovieDocument>(indexName).search(query, searchParameters as any);

        console.log(`Search result for query "${query}" =>`);
        console.dir(searchResponse, { depth: null });
    } catch (e: any) {
        console.error(`${e.name}: ${e.message}`);
    }
    console.log('');
}

search();
