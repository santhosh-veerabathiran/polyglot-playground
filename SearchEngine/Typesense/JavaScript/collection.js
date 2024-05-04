const Typesense = require('typesense');

const client = new Typesense.Client({
    nodes: [
        {
            host: 'localhost',
            port: 8108,
            protocol: 'http',
        },
    ],
    apiKey: 'xyz',
    connectionTimeOutSeconds: 2,
});

async function create() {
    try {
        const booksSchema = {
            name: 'books',
            fields: [
                {
                    name: 'title',
                    type: 'string',
                },
                {
                    name: 'authors',
                    type: 'string[]',
                    facet: true,
                },
                {
                    name: 'publication_year',
                    type: 'int32',
                    facet: true,
                },
                {
                    name: 'ratings_count',
                    type: 'int64',
                },
                {
                    name: 'average_rating',
                    type: 'float',
                },
                {
                    name: 'image_url',
                    type: 'string'
                }
            ]
        }
        console.log(await client.collections().create(booksSchema));
    }
    catch (e) {
        console.log(e.message);
    }
}

async function update() {
    console.dir(await client.collections('books').update(
        {
            fields: [
                {
                    name: 'title',
                    drop: true,
                },
                {
                    name: 'title',
                    type: 'string',
                    infix: true
                },
            ],
        }
    ),
        {
            depth: null,
        });
}

async function drop() {
    try {
        console.dir(await client.collections('books').delete());
    }
    catch (e) {
        console.log(e.message);
    }
}

async function retrieve() {
    try {
        console.log(await client.collections('books').retrieve());
    }
    catch (e) {
        console.log(e.message);
    }
}

async function retrieveAll() {
    try {
        console.dir(await client.collections().retrieve(), { depth: null });
    }
    catch (e) {
        console.log(e.message);
    }
}

// create();
// update();
// drop();
// retrieve();
// retrieveAll();