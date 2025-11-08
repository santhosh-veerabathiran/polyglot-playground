import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { Client } from 'typesense';

const client = new Client({
    nodes: [{ host: 'localhost', port: 8108, protocol: 'http' }],
    apiKey: 'xyz',
    connectionTimeoutSeconds: 2,
});

const collectionName = 'books';
const documentId = '0';
const booksDir = '../../../../datasets/';

interface IBookDocument {
    id: string;
    title: string;
    authors: string[];
    publication_year: number;
    ratings_count: number;
    average_rating: number;
    image_url: string;
}

async function create() {
    try {
        const book = {
            id: documentId,
            title: 'To Kill a Mockingbird',
            authors: ['Harper Lee'],
            publication_year: 1960,
            average_rating: 4.27,
            ratings_count: 4780633,
            image_url: 'https://images.example.com/to-kill-a-mockingbird.jpg',
        } as IBookDocument;

        const document = await client.collections<IBookDocument>(collectionName).documents().create(book);

        console.log(`Document created successfully`);
        console.dir(document, { depth: null });
    } catch (e: any) {
        console.error(`${e.name}: ${e.message}`);
    }
    console.log('');
}

async function insert() {
    try {
        const books = JSON.parse(readFileSync(join(booksDir, `${collectionName}.json`), 'utf-8')) as IBookDocument[];
        const documents = await client.collections<IBookDocument>(collectionName).documents().import(books, { batch_size: 100, action: 'emplace' });

        console.log(`${documents.length} document(s) imported successfully`);
    } catch (e: any) {
        console.error(`${e.name}: ${e.message}`);
    }
    console.log('');
}

async function upsert() {
    try {
        const book = {
            id: documentId,
            title: '1984',
            authors: ['George Orwell'],
            publication_year: 1949,
            average_rating: 4.19,
            ratings_count: 3442846,
            image_url: 'https://images.example.com/1984.jpg',
        } as IBookDocument;

        const document = await client.collections(collectionName).documents().upsert(book);

        console.log(`Document upserted successfully`);
        console.dir(document, { depth: null });
    } catch (e: any) {
        console.error(`${e.name}: ${e.message}`);
    }
    console.log('');
}

async function update() {
    try {
        const book = {
            id: documentId,
            title: '1984',
            authors: ['George Orwell'],
            publication_year: 1949,
            average_rating: 4.19,
            ratings_count: 3442846,
            image_url: 'https://images.example.com/1984.jpg',
        } as IBookDocument;
        const document = await client.collections('books').documents(book.id).update(book);

        console.log(`Document updated successfully`);
        console.dir(document, { depth: null });
    } catch (e: any) {
        console.error(`${e.name}: ${e.message}`);
    }
    console.log('');
}

async function retrieve() {
    try {
        const document = await client.collections(collectionName).documents(documentId).retrieve();

        console.log(`Document retrieved successfully`);
        console.dir(document, { depth: null });
    } catch (e: any) {
        console.error(`${e.name}: ${e.message}`);
    }
    console.log('');
}

async function fetch() {
    try {
        const documents = await client.collections(collectionName).documents().export();

        console.log(`Documents exported successfully`);
        writeFileSync(join(booksDir, `${collectionName}.jsonl`), documents, 'utf-8');
    } catch (e: any) {
        console.error(`${e.name}: ${e.message}`);
    }
    console.log('');
}

async function remove() {
    try {
        const document = await client.collections(collectionName).documents(documentId).delete();

        console.log(`Document dropped successfully`);
        console.dir(document, { depth: null });
    } catch (e: any) {
        console.error(`${e.name}: ${e.message}`);
    }
    console.log('');
}

async function main() {
    await create();
    await insert();
    await upsert();
    await update();
    await retrieve();
    await remove();
    await fetch();
}

main();
