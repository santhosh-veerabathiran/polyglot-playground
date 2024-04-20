const { MeiliSearch } = require('meilisearch');

const client = new MeiliSearch({
    host: "http://localhost:7700",
    apiKey: 'xyz'
});

async function create() {
    try {
        console.log(await client.createIndex('movies', { primaryKey: 'id' }));
    }
    catch (e) {
        console.log(e.message);
    }
}

async function update() {
    try {
        console.log(await client.updateIndex('movies', { primaryKey: "title" }));
    }
    catch (e) {
        console.log(e.message);
    }
}

async function deleteI() {
    try {
        console.log(await client.deleteIndex('movies'));
    }
    catch (e) {
        console.log(e.message);
    }
}

async function deleteIIfExist() {
    try {
        console.log(await client.deleteIndexIfExists('movies'));
    }
    catch (e) {
        console.log(e.message);
    }
}

async function swap() {
    try {
        console.log(await client.swapIndexes(
            [
                {
                    indexes: ['indexA', 'indexB'],
                },
                {
                    indexes: ['moviesA', 'moviesB'],
                }
            ]
        ));
    }
    catch (e) {
        console.log(e.message);
    }
}

async function get() {
    try {
        console.log(await client.getIndex('movies'));
    }
    catch (e) {
        console.log(e.message);
    }
}

async function getAll() {
    try {
        console.log(await client.getIndexes());
    }
    catch (e) {
        console.log(e.message);
    }
}

async function getRaw() {
    try {
        console.log(await client.getRawIndex('movies'));
    }
    catch (e) {
        console.log(e.message);
    }
}

async function getAllRaw() {
    try {
        console.log(await client.getRawIndexes());
    }
    catch (e) {
        console.log(e.message);
    }
}

// create();
// update();
// deleteI();
// deleteIIfExist();
// swap();
// get();
// getAll();
// getRaw();
// getAllRaw();