const { Meilisearch } = require('meilisearch');

const client = new Meilisearch({
    host: 'http://localhost:7700',
    apiKey: 'xyz',
});

async function getDict() {
    try {
        console.dir(await client.index('books').getDictionary(), {
            depth: null
        });
    }
    catch(e) {
        console.log(e.message);
    }
}

async function updateDict() {
    try {
        console.dir(await client.index('books').updateDictionary(
            ['J. R. R.', 'W. E. B.']
        ), {
            depth: null
        });
    }
    catch(e) {
        console.log(e.message);
    }
}

async function resetDict() {
    try {
        console.dir(await client.index('books').resetDictionary(), {
            depth: null
        });
    }
    catch(e) {
        console.log(e.message);
    }
}

// getDict();
// updateDict();
// resetDict();

async function getDisAttr() {
    try {
        console.dir(await client.index('books').getDisplayedAttributes(), {
            depth: null
        });
    }
    catch(e) {
        console.log(e.message);
    }
}

async function updateDisAttr() {
    try {
        console.dir(await client.index('books').updateDisplayedAttributes(
            ['title','authors','publication_year','average_rating','image_url']
        ), {
            depth: null
        });
    }
    catch(e) {
        console.log(e.message);
    }
}

async function resetDisAttr() {
    try {
        console.dir(await client.index('books').resetDisplayedAttributes(), {
            depth: null
        });
    }
    catch(e) {
        console.log(e.message);
    }
}

// getDisAttr();
// updateDisAttr();
// resetDisAttr();

async function getDistAttr() {
    try {
        console.dir(await client.index('books').getDistinctAttribute(), {
            depth: null
        });
    }
    catch(e) {
        console.log(e.message);
    }
}

async function updateDistAttr() {
    try {
        console.dir(await client.index('books').updateDistinctAttribute('id'), {
            depth: null
        });
    }
    catch(e) {
        console.log(e.message);
    }
}

async function resetDistAttr() {
    try {
        console.dir(await client.index('books').resetDistinctAttribute(), {
            depth: null
        });
    }
    catch(e) {
        console.log(e.message);
    }
}

// getDistAttr();
// updateDistAttr();
// resetDistAttr();

async function getFacet() {
    try {
        console.dir(await client.index('books').getFaceting(), {
            depth: null
        });
    }
    catch(e) {
        console.log(e.message);
    }
}

async function updateFacet() {
    try {
        console.dir(await client.index('books').updateFaceting({
            maxValuesPerFacet: 50,
            sortFacetValuesBy: {
                "*": "alpha",
                "publication_year": "count"
            }
        }), {
            depth: null
        });
    }
    catch(e) {
        console.log(e.message);
    }
}

async function resetFacet() {
    try {
        console.dir(await client.index('books').resetFaceting(), {
            depth: null
        });
    }
    catch(e) {
        console.log(e.message);
    }
}

// getFacet();
// updateFacet();
// resetFacet();

async function getFilter() {
    try {
        console.dir(await client.index('books').getFilterableAttributes(), {
            depth: null
        });
    }
    catch(e) {
        console.log(e.message);
    }
}

async function updateFilter() {
    try {
        console.dir(await client.index('books').updateFilterableAttributes(
            ['authors','publication_year', 'average_rating']
        ), {
            depth: null
        });
    }
    catch(e) {
        console.log(e.message);
    }
}

async function resetFilter() {
    try {
        console.dir(await client.index('books').resetFilterableAttributes(), {
            depth: null
        });
    }
    catch(e) {
        console.log(e.message);
    }
}

// getFilter();
// updateFilter();
// resetFilter();

async function getPage() {
    try {
        console.dir(await client.index('books').getPagination(), {
            depth: null
        });
    }
    catch(e) {
        console.log(e.message);
    }
}

async function updatePage() {
    try {
        console.dir(await client.index('books').updatePagination({
            maxTotalHits: 100
        }), {
            depth: null
        });
    }
    catch(e) {
        console.log(e.message);
    }
}

async function resetPage() {
    try {
        console.dir(await client.index('books').resetPagination(), {
            depth: null
        });
    }
    catch(e) {
        console.log(e.message);
    }
}

// getPage();
// updatePage();
// resetPage();

async function getProximity() {
    try {
        console.dir(await client.index('books').getProximityPrecision(), {
            depth: null
        });
    }
    catch(e) {
        console.log(e.message);
    }
}

async function updateProximity() {
    try {
        console.dir(await client.index('books').updateProximityPrecision('byAttribute'), {
            depth: null
        });
    }
    catch(e) {
        console.log(e.message);
    }
}

async function resetProximity() {
    try {
        console.dir(await client.index('books').resetProximityPrecision(), {
            depth: null
        });
    }
    catch(e) {
        console.log(e.message);
    }
}

// getProximity();
// updateProximity();
// resetProximity();

async function getRankRule() {
    try {
        console.dir(await client.index('books').getRankingRules(), {
            depth: null
        });
    }
    catch(e) {
        console.log(e.message);
    }
}

async function updateRankRule() {
    try {
        console.dir(await client.index('books').updateRankingRules([
            'words','typo','proximity','attribute','sort','exactness','average_rating:desc'
        ]), {
            depth: null
        });
    }
    catch(e) {
        console.log(e.message);
    }
}

async function resetRankRule() {
    try {
        console.dir(await client.index('books').resetRankingRules(), {
            depth: null
        });
    }
    catch(e) {
        console.log(e.message);
    }
}

// getRankRule();
// updateRankRule();
// resetRankRule();

async function getSearchAttr() {
    try {
        console.dir(await client.index('books').getSearchableAttributes(), {
            depth: null
        });
    }
    catch(e) {
        console.log(e.message);
    }
}

async function updateSearchAttr() {
    try {
        console.dir(await client.index('books').updateSearchableAttributes([
            'title',
            'authors'
        ]), {
            depth: null
        });
    }
    catch(e) {
        console.log(e.message);
    }
}

async function resetSearchAttr() {
    try {
        console.dir(await client.index('books').resetSearchableAttributes(), {
            depth: null
        });
    }
    catch(e) {
        console.log(e.message);
    }
}

// getSearchAttr();
// updateSearchAttr();
// resetSearchAttr();

async function getSepToken() {
    try {
        console.dir(await client.index('books').getSeparatorTokens(), {
            depth: null
        });
    }
    catch(e) {
        console.log(e.message);
    }
}

async function updateSepToken() {
    try {
        console.dir(await client.index('books').updateSeparatorTokens([
            '|',
            '&hellip;'
        ]), {
            depth: null
        });
    }
    catch(e) {
        console.log(e.message);
    }
}

async function resetSepToken() {
    try {
        console.dir(await client.index('books').resetSeparatorTokens(), {
            depth: null
        });
    }
    catch(e) {
        console.log(e.message);
    }
}

// getSepToken();
// updateSepToken();
// resetSepToken();

async function getNonSepToken() {
    try {
        console.dir(await client.index('books').getNonSeparatorTokens(), {
            depth: null
        });
    }
    catch(e) {
        console.log(e.message);
    }
}

async function updateNonSepToken() {
    try {
        console.dir(await client.index('books').updateNonSeparatorTokens([
            '@','#'
        ]), {
            depth: null
        });
    }
    catch(e) {
        console.log(e.message);
    }
}

async function resetNonSepToken() {
    try {
        console.dir(await client.index('books').resetNonSeparatorTokens(), {
            depth: null
        });
    }
    catch(e) {
        console.log(e.message);
    }
}

// getNonSepToken();
// updateNonSepToken();
// resetNonSepToken();

async function getSortAttr() {
    try {
        console.dir(await client.index('books').getSortableAttributes(), {
            depth: null
        });
    }
    catch(e) {
        console.log(e.message);
    }
}

async function updateSortAttr() {
    try {
        console.dir(await client.index('books').updateSortableAttributes([
            'authors',
            'publication_year',
            'average_ratings'
        ]), {
            depth: null
        });
    }
    catch(e) {
        console.log(e.message);
    }
}

async function resetSortAttr() {
    try {
        console.dir(await client.index('books').resetSortableAttributes(), {
            depth: null
        });
    }
    catch(e) {
        console.log(e.message);
    }
}

// getSortAttr();
// updateSortAttr();
// resetSortAttr();

async function getStopWord() {
    try {
        console.dir(await client.index('books').getStopWords(), {
            depth: null
        });
    }
    catch(e) {
        console.log(e.message);
    }
}

async function updateStopWord() {
    try {
        console.dir(await client.index('books').updateStopWords([
            'of',
            'the',
            'to'
        ]), {
            depth: null
        });
    }
    catch(e) {
        console.log(e.message);
    }
}

async function resetStopWord() {
    try {
        console.dir(await client.index('books').resetStopWords(), {
            depth: null
        });
    }
    catch(e) {
        console.log(e.message);
    }
}

// getStopWord();
// updateStopWord();
// resetStopWord();

async function getSynonym() {
    try {
        console.dir(await client.index('books').getSynonyms(), {
            depth: null
        });
    }
    catch(e) {
        console.log(e.message);
    }
}

async function updateSynonym() {
    try {
        console.dir(await client.index('books').updateSynonyms({
            "train": ["railway","railroad"],
            "railway": ["train", "railroad"],
        }), {
            depth: null
        });
    }
    catch(e) {
        console.log(e.message);
    }
}

async function resetSynonym() {
    try {
        console.dir(await client.index('books').resetSynonyms(), {
            depth: null
        });
    }
    catch(e) {
        console.log(e.message);
    }
}

// getSynonym();
// updateSynonym();
// resetSynonym();

async function getTypo() {
    try {
        console.dir(await client.index('books').getTypoTolerance(), {
            depth: null
        });
    }
    catch(e) {
        console.log(e.message);
    }
}

async function updateTypo() {
    try {
        console.dir(await client.index('books').updateTypoTolerance({
            enabled: true,
            minWordSizeForTypos: {
                oneTypo: 4,
                twoTypos: 8
            },
            disableOnAttributes: [],
            disableOnWords: []
        }), {
            depth: null
        });
    }
    catch(e) {
        console.log(e.message);
    }
}

async function resetTypo() {
    try {
        console.dir(await client.index('books').resetTypoTolerance(), {
            depth: null
        }); 
    }
    catch(e) {
        console.log(e.message);
    }
}

// getTypo();
// updateTypo();
// resetTypo();