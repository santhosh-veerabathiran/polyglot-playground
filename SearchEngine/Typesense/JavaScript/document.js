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
    connectionTimeoutSeconds: 2,
});

async function add() {
    try {
        const BookData = {
            title: "To Kill a Mockingbird",
            authors: ["Harper Lee"],
            publication_year: 1960,
            average_rating: 4.27,
            ratings_count: 4780633,
            image_url: "https://images.example.com/to-kill-a-mockingbird.jpg"
        }
        console.log(await client.collections('books').documents().create(BookData));
    }
    catch (e) {
        console.log(e.message);
    }
}

async function addMulti() {
    const fs = require('fs/promises')
    try {
        const BooksJsonl = await fs.readFile('../datasets/books.jsonl');
        console.log(await client.collections('books').documents().import(BooksJsonl,{
            batch_size: 100
        }));
    }
    catch (e) {
        console.log(e.message);
    }
}

async function addOrReplace() {
    try {
        console.log(await client.collections('books').documents().upsert(
            {
                id: '0',
                title: "1984",
                authors: ["George Orwell"],
                publication_year: 1949,
                average_rating: 4.19,
                ratings_count: 3442846,
                image_url: "https://images.example.com/1984.jpg"
            }
        ))
    }
    catch (e) {
        console.log(e.message);
    }
}

async function update() {
    try{
    console.log(await client.collections('books').documents('21').update(
        {
           'title': 'The Bedside Book of Birds',
            'publication_year': 2018
        }
    ));
    }
    catch(e) {
        console.log(e.message);
    }
}

async function drop() {
    try {
        console.log(await client.collections("books").documents('21').delete())
    }
    catch(e) {
        console.log(e.message)
    }
}

async function retrieve() {
    try {
        console.log(await client.collections('books').documents('21').retrieve());
    }
    catch(e) {
        console.log(e.message);
    }
}

async function exportD() {
    try {
        console.log(await client.collections('books').documents().export());
    }
    catch(e) {
        console.log(e.message);
    }
}

// add();
// addMulti();
// addOrReplace();
// update();
// drop();
// retrieve();
// exportD();