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

async function create() {
    try {
        const index = await client.createIndex(indexName, { primaryKey: 'id' });

        console.log(`Index created successfully`);
        console.dir(index, { depth: null });
    } catch (e: any) {
        console.error(`${e.name}: ${e.message}`);
    }
    console.log('');
}

async function update() {
    try {
        const index = await client.updateIndex(indexName, { primaryKey: 'title' });

        console.log(`Index updated successfully`);
        console.dir(index, { depth: null });
    } catch (e: any) {
        console.error(`${e.name}: ${e.message}`);
    }
    console.log('');
}

async function swap() {
    try {
        const swapParameters = [
            {
                indexes: ['indexA', 'indexB'],
            },
            {
                indexes: ['moviesA', 'moviesB'],
            },
        ];
        const indexes = await client.swapIndexes(swapParameters);

        console.log(`Indexes swapped successfully`);
        console.dir(indexes, { depth: null });
    } catch (e: any) {
        console.error(`${e.name}: ${e.message}`);
    }
    console.log('');
}

async function get() {
    try {
        const index = await client.getIndex<IMovieDocument>(indexName);

        console.log(`Index retrieved successfully`);
        console.dir(index, { depth: null });
    } catch (e: any) {
        console.error(`${e.name}: ${e.message}`);
    }
    console.log('');
}

async function getAll() {
    try {
        const indexes = await client.getIndexes();

        console.log(`Indexes retrieved successfully`);
        console.dir(indexes, { depth: null });
    } catch (e: any) {
        console.error(`${e.name}: ${e.message}`);
    }
    console.log('');
}

async function getRaw() {
    try {
        const index = await client.getRawIndex(indexName);

        console.log(`Index retrieved successfully`);
        console.dir(index, { depth: null });
    } catch (e: any) {
        console.error(`${e.name}: ${e.message}`);
    }
    console.log('');
}

async function getAllRaw() {
    try {
        const indexes = await client.getRawIndexes();

        console.log(`Indexes retrieved successfully`);
        console.dir(indexes, { depth: null });
    } catch (e: any) {
        console.error(`${e.name}: ${e.message}`);
    }
    console.log('');
}

async function remove() {
    try {
        const index = await client.deleteIndex(indexName);
        console.log(`Index deleted successfully`);
        console.dir(index, { depth: null });

        const removeIndex = await client.deleteIndexIfExists(indexName);
        console.log(`Index deleted successfully`);
        console.dir(removeIndex, { depth: null });
    } catch (e: any) {
        console.error(`${e.name}: ${e.message}`);
    }
    console.log('');
}

async function main() {
    await create();
    await update();
    await swap();
    await get();
    await getAll();
    await getRaw();
    await getAllRaw();
    // await remove();
}

main();
