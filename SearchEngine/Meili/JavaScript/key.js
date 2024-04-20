const { MeiliSearch } = require('meilisearch');

const client = new MeiliSearch({
    host: 'http://localhost:7700',
    apiKey: 'xyz',
});

async function create() {

    const keySchema = {
        name: 'Admin API Key',
        description: 'Use it for perform all the operations in all indexes',
        actions: ["*"],
        indexes: ["*"],
        expiresAt: '2025-03-30T00:00:00Z'
    }

    try {
        console.log(await client.createDump(keySchema));
    }
    catch (e) {
        console.log(e.message);
    }
}

async function update() {
    try {
        console.log(await client.updateKey(
            'qszxaw',
            {
                name: 'New Admin API Key',
                description: 'You can use this key to perform all the operations in all indexes'
            }
        ));
    }
    catch (e) {
        console.log(e.message);
    }
}

async function deleteKey() {
    try {
        console.log(await client.deleteKey('qszxaw'));
    }
    catch (e) {
        console.log(e.message);
    }
}

async function get() {
    try {
        console.log(await client.getKey('qszxaw'));
    }
    catch (e) {
        console.log(e.message); 
    }
}

async function getAll() {
    try {
        console.log(await client.getKeys());
    }
    catch (e) {
        console.log(e.message); 
    }
}

// create();
// update();
// deleteKey();
// get();
// getAll();