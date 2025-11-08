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

async function dictionary() {
    async function get() {
        try {
            const dictionary = await client.index<IMovieDocument>(indexName).getDictionary();

            console.log(`Dictionary for index "${indexName}" =>`);
            console.dir(dictionary, { depth: null });
        } catch (e: any) {
            console.error(`${e.name}: ${e.message}`);
        }
        console.log('');
    }

    async function update() {
        try {
            const dictionary = await client.index(indexName).updateDictionary(['J. R. R.', 'W. E. B.']);

            console.log(`Dictionary for index "${indexName}" updated successfully`);
            console.dir(dictionary, { depth: null });
        } catch (e: any) {
            console.error(`${e.name}: ${e.message}`);
        }
        console.log('');
    }

    async function reset() {
        try {
            const dictionary = await client.index(indexName).resetDictionary();

            console.log(`Dictionary for index "${indexName}" reset successfully`);
            console.dir(dictionary, { depth: null });
        } catch (e: any) {
            console.error(`${e.name}: ${e.message}`);
        }
        console.log('');
    }

    get();
    update();
    reset();
}

async function displayedAttributes() {
    async function get() {
        try {
            const displayedAttributes = await client.index(indexName).getDisplayedAttributes();

            console.log(`Displayed attributes for index "${indexName}" =>`);
            console.dir(displayedAttributes, { depth: null });
        } catch (e: any) {
            console.error(`${e.name}: ${e.message}`);
        }
        console.log('');
    }

    async function update() {
        try {
            const displayedAttributes = await client
                .index(indexName)
                .updateDisplayedAttributes(['title', 'poster', 'overview', 'genres', 'release_date']);

            console.log(`Displayed attributes for index "${indexName}" updated successfully`);
            console.dir(displayedAttributes, { depth: null });
        } catch (e: any) {
            console.error(`${e.name}: ${e.message}`);
        }
        console.log('');
    }

    async function reset() {
        try {
            const displayedAttributes = await client.index(indexName).resetDisplayedAttributes();

            console.log(`Displayed attributes for index "${indexName}" reset successfully`);
            console.dir(displayedAttributes, { depth: null });
        } catch (e: any) {
            console.error(`${e.name}: ${e.message}`);
        }
        console.log('');
    }

    get();
    update();
    reset();
}

async function distinctAttribute() {
    async function get() {
        try {
            const distinctAttribute = await client.index(indexName).getDistinctAttribute();

            console.log(`Distinct attribute for index "${indexName}" =>`);
            console.dir(distinctAttribute, { depth: null });
        } catch (e: any) {
            console.error(`${e.name}: ${e.message}`);
        }
        console.log('');
    }

    async function update() {
        try {
            const distinctAttribute = await client.index(indexName).updateDistinctAttribute('id');

            console.log(`Distinct attribute for index "${indexName}" updated successfully`);
            console.dir(distinctAttribute, { depth: null });
        } catch (e: any) {
            console.error(`${e.name}: ${e.message}`);
        }
        console.log('');
    }

    async function reset() {
        try {
            const distinctAttribute = await client.index(indexName).resetDistinctAttribute();

            console.log(`Distinct attribute for index "${indexName}" reset successfully`);
            console.dir(distinctAttribute, { depth: null });
        } catch (e: any) {
            console.error(`${e.name}: ${e.message}`);
        }
        console.log('');
    }

    get();
    update();
    reset();
}

async function faceting() {
    async function get() {
        try {
            const faceting = await client.index(indexName).getFaceting();

            console.log(`Faceting for index "${indexName}" =>`);
            console.dir(faceting, { depth: null });
        } catch (e: any) {
            console.error(`${e.name}: ${e.message}`);
        }
        console.log('');
    }

    async function update() {
        try {
            const faceting = await client.index(indexName).updateFaceting({
                maxValuesPerFacet: 50,
                sortFacetValuesBy: {
                    '*': 'alpha',
                    publication_year: 'count',
                },
            });

            console.log(`Faceting for index "${indexName}" updated successfully`);
            console.dir(faceting, { depth: null });
        } catch (e: any) {
            console.error(`${e.name}: ${e.message}`);
        }
        console.log('');
    }

    async function reset() {
        try {
            const faceting = await client.index(indexName).resetFaceting();

            console.log(`Faceting for index "${indexName}" reset successfully`);
            console.dir(faceting, { depth: null });
        } catch (e: any) {
            console.error(`${e.name}: ${e.message}`);
        }
        console.log('');
    }

    get();
    update();
    reset();
}

async function filterableAttributes() {
    async function get() {
        try {
            const filterableAttributes = await client.index(indexName).getFilterableAttributes();

            console.log(`Filterable attributes for index "${indexName}" =>`);
            console.dir(filterableAttributes, { depth: null });
        } catch (e: any) {
            console.error(`${e.name}: ${e.message}`);
        }
        console.log('');
    }

    async function update() {
        try {
            const filterableAttributes = await client.index(indexName).updateFilterableAttributes(['genres', 'release_date']);

            console.log(`Filterable attributes for index "${indexName}" updated successfully`);
            console.dir(filterableAttributes, { depth: null });
        } catch (e: any) {
            console.error(`${e.name}: ${e.message}`);
        }
        console.log('');
    }

    async function reset() {
        try {
            const filterableAttributes = await client.index(indexName).resetFilterableAttributes();

            console.log(`Filterable attributes for index "${indexName}" reset successfully`);
            console.dir(filterableAttributes, { depth: null });
        } catch (e: any) {
            console.error(`${e.name}: ${e.message}`);
        }
        console.log('');
    }

    get();
    update();
    reset();
}

async function pagination() {
    async function get() {
        try {
            const pagination = await client.index(indexName).getPagination();

            console.log(`Pagination for index "${indexName}" =>`);
            console.dir(pagination, { depth: null });
        } catch (e: any) {
            console.error(`${e.name}: ${e.message}`);
        }
        console.log('');
    }

    async function update() {
        try {
            const pagination = await client.index(indexName).updatePagination({
                maxTotalHits: 100,
            });

            console.log(`Pagination for index "${indexName}" updated successfully`);
            console.dir(pagination, { depth: null });
        } catch (e: any) {
            console.error(`${e.name}: ${e.message}`);
        }
        console.log('');
    }

    async function reset() {
        try {
            const pagination = await client.index(indexName).resetPagination();

            console.log(`Pagination for index "${indexName}" reset successfully`);
            console.dir(pagination, { depth: null });
        } catch (e: any) {
            console.error(`${e.name}: ${e.message}`);
        }
        console.log('');
    }

    get();
    update();
    reset();
}

async function proximityPrecision() {
    async function get() {
        try {
            const proximityPrecision = await client.index(indexName).getProximityPrecision();

            console.log(`Proximity precision for index "${indexName}" =>`);
            console.dir(proximityPrecision, { depth: null });
        } catch (e: any) {
            console.error(`${e.name}: ${e.message}`);
        }
        console.log('');
    }

    async function update() {
        try {
            const proximityPrecision = await client.index(indexName).updateProximityPrecision('byAttribute');

            console.log(`Proximity precision for index "${indexName}" updated successfully`);
            console.dir(proximityPrecision, { depth: null });
        } catch (e: any) {
            console.error(`${e.name}: ${e.message}`);
        }
        console.log('');
    }

    async function reset() {
        try {
            const proximityPrecision = await client.index(indexName).resetProximityPrecision();

            console.log(`Proximity precision for index "${indexName}" reset successfully`);
            console.dir(proximityPrecision, { depth: null });
        } catch (e: any) {
            console.error(`${e.name}: ${e.message}`);
        }
        console.log('');
    }

    get();
    update();
    reset();
}

async function rankingRules() {
    async function get() {
        try {
            const rankRule = await client.index(indexName).getRankingRules();

            console.log(`Ranking rules for index "${indexName}" =>`);
            console.dir(rankRule, { depth: null });
        } catch (e: any) {
            console.error(`${e.name}: ${e.message}`);
        }
        console.log('');
    }

    async function update() {
        try {
            const rankRule = await client
                .index(indexName)
                .updateRankingRules(['words', 'typo', 'proximity', 'attribute', 'sort', 'exactness', 'release_date:desc']);

            console.log(`Ranking rules for index "${indexName}" updated successfully`);
            console.dir(rankRule, { depth: null });
        } catch (e: any) {
            console.error(`${e.name}: ${e.message}`);
        }
        console.log('');
    }

    async function reset() {
        try {
            const rankRule = await client.index(indexName).resetRankingRules();

            console.log(`Ranking rules for index "${indexName}" reset successfully`);
            console.dir(rankRule, { depth: null });
        } catch (e: any) {
            console.error(`${e.name}: ${e.message}`);
        }
        console.log('');
    }

    get();
    update();
    reset();
}

async function searchableAttributes() {
    async function get() {
        try {
            const searchableAttributes = await client.index(indexName).getSearchableAttributes();

            console.log(`Searchable attributes for index "${indexName}" =>`);
            console.dir(searchableAttributes, { depth: null });
        } catch (e: any) {
            console.error(`${e.name}: ${e.message}`);
        }
        console.log('');
    }

    async function update() {
        try {
            const searchableAttributes = await client.index(indexName).updateSearchableAttributes(['title', 'overview']);

            console.log(`Searchable attributes for index "${indexName}" updated successfully`);
            console.dir(searchableAttributes, { depth: null });
        } catch (e: any) {
            console.error(`${e.name}: ${e.message}`);
        }
        console.log('');
    }

    async function reset() {
        try {
            const searchableAttributes = await client.index(indexName).resetSearchableAttributes();

            console.log(`Searchable attributes for index "${indexName}" reset successfully`);
            console.dir(searchableAttributes, { depth: null });
        } catch (e: any) {
            console.error(`${e.name}: ${e.message}`);
        }
        console.log('');
    }

    get();
    update();
    reset();
}

async function separatorTokens() {
    async function get() {
        try {
            const separatorTokens = await client.index(indexName).getSeparatorTokens();

            console.log(`Separator tokens for index "${indexName}" =>`);
            console.dir(separatorTokens, { depth: null });
        } catch (e: any) {
            console.error(`${e.name}: ${e.message}`);
        }
        console.log('');
    }

    async function update() {
        try {
            const separatorTokens = await client.index(indexName).updateSeparatorTokens(['|', '&hellip;']);

            console.log(`Separator tokens for index "${indexName}" updated successfully`);
            console.dir(separatorTokens, { depth: null });
        } catch (e: any) {
            console.error(`${e.name}: ${e.message}`);
        }
        console.log('');
    }

    async function reset() {
        try {
            const separatorTokens = await client.index(indexName).resetSeparatorTokens();

            console.log(`Separator tokens for index "${indexName}" reset successfully`);
            console.dir(separatorTokens, { depth: null });
        } catch (e: any) {
            console.error(`${e.name}: ${e.message}`);
        }
        console.log('');
    }

    get();
    update();
    reset();
}

async function nonSeparatorTokens() {
    async function get() {
        try {
            const nonSeparatorTokens = await client.index(indexName).getNonSeparatorTokens();

            console.log(`Non separator tokens for index "${indexName}" =>`);
            console.dir(nonSeparatorTokens, { depth: null });
        } catch (e: any) {
            console.error(`${e.name}: ${e.message}`);
        }
        console.log('');
    }

    async function update() {
        try {
            const nonSeparatorTokens = await client.index(indexName).updateNonSeparatorTokens(['@', '#']);

            console.log(`Non separator tokens for index "${indexName}" updated successfully`);
            console.dir(nonSeparatorTokens, { depth: null });
        } catch (e: any) {
            console.error(`${e.name}: ${e.message}`);
        }
        console.log('');
    }

    async function reset() {
        try {
            const nonSeparatorTokens = await client.index(indexName).resetNonSeparatorTokens();

            console.log(`Non separator tokens for index "${indexName}" reset successfully`);
            console.dir(nonSeparatorTokens, { depth: null });
        } catch (e: any) {
            console.error(`${e.name}: ${e.message}`);
        }
        console.log('');
    }

    get();
    update();
    reset();
}

async function sortableAttributes() {
    async function get() {
        try {
            const sortableAttributes = await client.index(indexName).getSortableAttributes();

            console.log(`Sortable attributes for index "${indexName}" =>`);
            console.dir(sortableAttributes, { depth: null });
        } catch (e: any) {
            console.error(`${e.name}: ${e.message}`);
        }
        console.log('');
    }

    async function update() {
        try {
            const sortableAttributes = await client.index(indexName).updateSortableAttributes(['release_date', 'genres', 'title']);

            console.log(`Sortable attributes for index "${indexName}" updated successfully`);
            console.dir(sortableAttributes, { depth: null });
        } catch (e: any) {
            console.error(`${e.name}: ${e.message}`);
        }
        console.log('');
    }

    async function reset() {
        try {
            const sortableAttributes = await client.index(indexName).resetSortableAttributes();

            console.log(`Sortable attributes for index "${indexName}" reset successfully`);
            console.dir(sortableAttributes, { depth: null });
        } catch (e: any) {
            console.error(`${e.name}: ${e.message}`);
        }
        console.log('');
    }

    get();
    update();
    reset();
}

async function stopWords() {
    async function get() {
        try {
            const stopWords = await client.index(indexName).getStopWords();

            console.log(`Stop words for index "${indexName}" =>`);
            console.dir(stopWords, { depth: null });
        } catch (e: any) {
            console.error(`${e.name}: ${e.message}`);
        }
        console.log('');
    }

    async function update() {
        try {
            const stopWords = await client.index(indexName).updateStopWords(['of', 'the', 'to']);

            console.log(`Stop words for index "${indexName}" updated successfully`);
            console.dir(stopWords, { depth: null });
        } catch (e: any) {
            console.error(`${e.name}: ${e.message}`);
        }
        console.log('');
    }

    async function reset() {
        try {
            const stopWords = await client.index(indexName).resetStopWords();

            console.log(`Stop words for index "${indexName}" reset successfully`);
            console.dir(stopWords, { depth: null });
        } catch (e: any) {
            console.error(`${e.name}: ${e.message}`);
        }
        console.log('');
    }

    get();
    update();
    reset();
}

async function synonyms() {
    async function get() {
        try {
            const synonyms = await client.index(indexName).getSynonyms();

            console.log(`Synonyms for index "${indexName}" =>`);
            console.dir(synonyms, { depth: null });
        } catch (e: any) {
            console.error(`${e.name}: ${e.message}`);
        }
        console.log('');
    }

    async function update() {
        try {
            const synonyms = await client.index(indexName).updateSynonyms({
                train: ['railway', 'railroad'],
                railway: ['train', 'railroad'],
            });

            console.log(`Synonyms for index "${indexName}" updated successfully`);
            console.dir(synonyms, { depth: null });
        } catch (e: any) {
            console.error(`${e.name}: ${e.message}`);
        }
        console.log('');
    }

    async function reset() {
        try {
            const synonyms = await client.index(indexName).resetSynonyms();

            console.log(`Synonyms for index "${indexName}" reset successfully`);
            console.dir(synonyms, { depth: null });
        } catch (e: any) {
            console.error(`${e.name}: ${e.message}`);
        }
        console.log('');
    }

    get();
    update();
    reset();
}

async function typoTolerance() {
    async function get() {
        try {
            const typoTolerance = await client.index(indexName).getTypoTolerance();

            console.log(`Typo tolerance for index "${indexName}" =>`);
            console.dir(typoTolerance, { depth: null });
        } catch (e: any) {
            console.error(`${e.name}: ${e.message}`);
        }
        console.log('');
    }

    async function update() {
        try {
            const typoTolerance = await client.index(indexName).updateTypoTolerance({
                enabled: true,
                minWordSizeForTypos: {
                    oneTypo: 3,
                    twoTypos: 6,
                },
                disableOnAttributes: [],
                disableOnWords: [],
            });

            console.log(`Typo tolerance for index "${indexName}" updated successfully`);
            console.dir(typoTolerance, { depth: null });
        } catch (e: any) {
            console.error(`${e.name}: ${e.message}`);
        }
        console.log('');
    }

    async function reset() {
        try {
            const typoTolerance = await client.index(indexName).resetTypoTolerance();

            console.log(`Typo tolerance for index "${indexName}" reset successfully`);
            console.dir(typoTolerance, { depth: null });
        } catch (e: any) {
            console.error(`${e.name}: ${e.message}`);
        }
        console.log('');
    }

    get();
    update();
    reset();
}

async function main() {
    await dictionary();
    await displayedAttributes();
    await distinctAttribute();
    await faceting();
    await filterableAttributes();
    await pagination();
    await proximityPrecision();
    await rankingRules();
    await searchableAttributes();
    await separatorTokens();
    await nonSeparatorTokens();
    await sortableAttributes();
    await stopWords();
    await synonyms();
    await typoTolerance();
}

main();
