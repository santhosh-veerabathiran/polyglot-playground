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

async function get() {
    try {
        const settings = await client.index<IMovieDocument>(indexName).getSettings();

        console.log(`Settings for index "${indexName}" =>`);
        console.dir(settings, { depth: null });
    } catch (e: any) {
        console.error(`${e.name}: ${e.message}`);
    }
    console.log('');
}

async function update() {
    const settings = {
        rankingRules: ['words', 'typo', 'proximity', 'attribute', 'sort', 'exactness', 'release_date:desc'],
        distinctAttribute: 'id',
        filterableAttributes: ['release_date'],
        searchableAttributes: ['title', 'overview'],
        displayedAttributes: ['title', 'overview', 'release_date', 'genres', 'poster'],
        stopWords: ['the', 'a', 'an'],
        sortableAttributes: ['release_date', 'genres', 'poster'],
        synonyms: {
            train: ['railway', 'railroad'],
            railway: ['train', 'railroad'],
        },
        typoTolerance: {
            minWordSizeForTypos: {
                oneTypo: 3,
                twoTypos: 6,
            },
            disableOnAttributes: [],
            disableOnWords: [],
        },
        pagination: {
            maxTotalHits: 100,
        },
        faceting: {
            maxValuesPerFacet: 100,
        },
    };
    try {
        const updatedSettings = await client.index<IMovieDocument>(indexName).updateSettings(settings);

        console.log(`Settings for index "${indexName}" updated successfully`);
        console.dir(updatedSettings, { depth: null });
    } catch (e: any) {
        console.error(`${e.name}: ${e.message}`);
    }
    console.log('');
}

async function reset() {
    try {
        const resetSettings = await client.index<IMovieDocument>(indexName).resetSettings();

        console.log(`Settings for index "${indexName}" reset successfully`);
        console.dir(resetSettings, { depth: null });
    } catch (e: any) {
        console.error(`${e.name}: ${e.message}`);
    }
    console.log('');
}

async function main() {
    await get();
    await update();
    // await reset();
}

main();
