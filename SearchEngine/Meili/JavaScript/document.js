const { MeiliSearch } = require('meilisearch');

const client = new MeiliSearch({
    host: 'http://localhost:7700',
    apiKey: 'xyz',
});

async function addOrReplace() {
    try {
        console.log(await client.index('movies').addDocuments(
            [
                {
                    id: 1,
                    title: 'Shazam',
                    poster: 'https://image.tmdb.org/t/p/w1280/xnopI5Xtky18MPhK40cZAGAOVeV.jpg',
                    overview: 'A boy is given the ability to become an adult superhero in times of need with a single magic word.',
                    release_date: '2019-03-23'
                }
            ]
        ));
    }
    catch (e) {
        console.log(e.message);
    }
}

async function indexJson() {
    try {
        const books = require("../datasets/books.json");
        console.log(await client.index('books').addDocuments(books));
    }
    catch(e) {
        console.log(e.message)
    }
} 

async function addOrUpdate() {
    try {
        console.log(await client.index('movies').updateDocuments(
            [
                {
                    id: 1,
                    title: 'Shazam ⚡️',
                    genres: 'comedy'
                }
            ]
        ));
    }
    catch (e) {
        console.log(e.message);
    }
}

async function deleteD() {
    try {
        console.log(await client.index('movies').deleteDocument(1));
    }
    catch (e) {
        console.log(e.message);
    }
}

async function deleteDs() {
    try {
        console.log(await client.index('movies').deleteDocuments(
            { filter: 'genres = action OR genres = adventure'}
        ));

        // console.log(await client.index('movies').deleteDocuments([1,5,10]));
    }
    catch (e) {
        console.log(e.message);
    }
}

async function deleteDAll() {
    try {
        console.log(await client.index('movies').deleteAllDocuments());
    }
    catch (e) {
        console.log(e.message);
    }
}

async function get() {
    try {
        console.log(await client.index('movies').getDocument(
            1, { fields: ['id', 'title'] }
        ));
    }
    catch (e) {
        console.log(e.message);
    }
}

async function getAll() {
    try {
        console.log(await client.index('movies').getDocuments(
            { limit: 5 }
        ));
    }
    catch (e) {
        console.log(e.message);
    }
}

// addOrReplace();
// indexJson();
// addOrUpdate();
// deleteD();
// deleteDs();
// deleteDAll();
// get();
// getAll();