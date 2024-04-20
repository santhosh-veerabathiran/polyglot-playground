const { Meilisearch } = require('meilisearch');

const client = new Meilisearch({
    host: 'http://localhost:7700',
    apiKey: 'xyz',
});

async function get() {
    try {
        console.dir(await client.index('books').getSettings(), {
            depth: null
        });
    }
    catch(e) {
        console.log(e.message);
    }
}

async function update() {
    const settings = {
        rankingRules: ['words','typo','proximity','attribute','sort','exactness','average_ratings:desc'],
        distinctAttribute: 'id',
        filterableAttributes: ['authors','publication_year'],
        searchableAttributes: ['title','authors'],
        displayedAttributes: ['title','authors','publication_year','ratings_count','average_rating'],
        stopWords: ['the','a','an'],
        sortableAttributes: ['authors','publication_year','ratings_count','average_rating'],
        synonyms: {
            'train': ['railway', 'railroad'],
            'railway': ['train', 'railroad'],
        },
        typoTolerance: {
            minWordSizeForTypos: {
                oneTypo: 4,
                twoTypos: 8,
            },
            disableOnAttributes: [],
            disableOnWords: [],
        },
        pagination: {
            maxTotalHits: 200
        },
        faceting: {
            maxValuesPerFacet: 200,
        }
    }
    try {
        console.dir(await client.index('books').updateSettings(settings),{
            depth: null
        });
    }
    catch(e) {
        console.log(e.message);
    }
}

async function reset() {
    try {
        console.log(await client.index('books').resetSettings());
    }
    catch(e) {
        console.log(e.message);
    }
}

// get();
// update();
// reset();