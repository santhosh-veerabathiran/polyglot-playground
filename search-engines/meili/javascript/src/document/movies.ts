import { readFileSync } from 'fs';
import { MeiliSearch } from 'meilisearch';
import { join } from 'path';

const client = new MeiliSearch({ host: 'http://localhost:7700', apiKey: 'xyz' });

const indexName = 'movies';
const moviesDir = '../../../../datasets/';

interface IMovieDocument {
    id: number;
    title: string;
    poster: string;
    overview: string;
    genres: string[];
    release_date: number;
}

async function add() {
    try {
        const movie = {
            id: 1,
            title: 'Shazam',
            poster: 'https://image.tmdb.org/t/p/w1280/xnopI5Xtky18MPhK40cZAGAOVeV.jpg',
            overview: 'A boy is given the ability to become an adult superhero in times of need with a single magic word.',
            release_date: 1553433600,
        } as IMovieDocument;

        const document = await client.index<IMovieDocument>(indexName).addDocuments([movie]);

        console.log(`Document added successfully`);
        console.dir(document, { depth: null });
    } catch (e: any) {
        console.error(`${e.name}: ${e.message}`);
    }
    console.log('');
}

async function insert() {
    try {
        const movies = JSON.parse(readFileSync(join(moviesDir, `${indexName}.json`), 'utf-8')) as IMovieDocument[];
        console.log(`${movies.length} movie(s) loaded successfully`);

        const documents = await client.index<IMovieDocument>(indexName).addDocuments(movies);

        console.log(`Documents added successfully`);
        console.dir(documents, { depth: null });
    } catch (e: any) {
        console.error(`${e.name}: ${e.message}`);
    }
    console.log('');
}

async function update() {
    try {
        const movie = {
            id: 1,
            title: 'Shazam ⚡️',
            genres: ['comedy'],
        } as Partial<IMovieDocument>;

        const document = await client.index<IMovieDocument>(indexName).updateDocuments([movie]);

        console.log(`Document updated successfully`);
        console.dir(document, { depth: null });
    } catch (e: any) {
        console.error(`${e.name}: ${e.message}`);
    }
    console.log('');
}

async function get() {
    try {
        const document = await client.index<IMovieDocument>(indexName).getDocument(1, { fields: ['id', 'title'] });

        console.log(`Document retrieved successfully`);
        console.dir(document, { depth: null });
    } catch (e: any) {
        console.error(`${e.name}: ${e.message}`);
    }
    console.log('');
}

async function getAll() {
    try {
        const documents = await client.index<IMovieDocument>(indexName).getDocuments({ limit: 5 });

        console.log(`Documents retrieved successfully`);
        console.dir(documents, { depth: null });
    } catch (e: any) {
        console.error(`${e.name}: ${e.message}`);
    }
    console.log('');
}

async function remove() {
    try {
        const document = await client.index<IMovieDocument>(indexName).deleteDocument(1);

        console.log(`Document deleted successfully`);
        console.dir(document, { depth: null });
    } catch (e: any) {
        console.error(`${e.name}: ${e.message}`);
    }
    console.log('');
}

async function removeAll() {
    try {
        const document = await client.index<IMovieDocument>(indexName).deleteAllDocuments();

        console.log(`Documents deleted successfully`);
        console.dir(document, { depth: null });
    } catch (e: any) {
        console.error(`${e.name}: ${e.message}`);
    }
    console.log('');
}

async function main() {
    // await add();
    await insert();
    // await update();
    // await get();
    // await getAll();
    // await remove();
    // await removeAll();
}

main();
