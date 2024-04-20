const { MeiliSearch } = require('meilisearch')

const client = new MeiliSearch({
    host: 'http://localhost:7700',
    apiKey: 'xyz',
});

async function search() {
    try {
        console.log(await client.index('movies').search('Shazam'));
    }
    catch (e) {
        console.log(e.message);
    }
}

async function searchGet() {
    try {
        console.log(await client.index('movies').searchGet('Shazam'));
    }
    catch (e) {
        console.log(e.message);
    }
}

async function searchParam() {
    const searchParameters = {
        offset: 0,
        limit: 300,

        // hitsPerPage: 25,
        // page: 2,

        // filter: ['authors = "Mark Haddon"'],
        // facets: ['authors'],

        attributesToRetrieve: ['title', 'authors', 'publication_year', 'ratings_count'],

        attributesToCrop: ['title'],
        cropLength: 2,
        cropMarker: "[...]",

        attributesToHighlight: ['title', 'authors'],
        highlightPreTag: "<span class='highligh'>",
        highlightPostTag: "</span>",

        showMatchesPosition: true,
        matchingStrategy: 'all',

        // sort: ['publication_year:desc'],

        showRankingScore: true,
        showRankingScoreDetails: true,

        attributesToSearchOn: ['title', 'authors'],
    }

    try {
        console.dir(await client.index('books').search('harry', searchParameters), {
            depth: null
        });
    }
    catch (e) {
        console.log(e.message);
    }
}

// search();
// searchGet();
// searchParam();