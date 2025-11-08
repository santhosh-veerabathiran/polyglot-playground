import { Client } from 'typesense';

const client = new Client({
    nodes: [{ host: 'localhost', port: 8108, protocol: 'http' }],
    apiKey: 'xyz',
    connectionTimeoutSeconds: 2,
});

const collectionName = 'books';

async function create() {
    try {
        if (!(await client.collections(collectionName).exists())) {
            const booksSchema = {
                name: collectionName,
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
                        facet: true,
                    },
                    {
                        name: 'image_url',
                        type: 'string',
                    },
                ],
                default_sorting_field: 'publication_year',
            };
            const collection = await client.collections().create(booksSchema as any);

            console.log(`Collection '${collectionName}' created successfully`);
            console.dir(collection, { depth: null });
        } else {
            console.log(`Collection '${collectionName}' already exists`);
        }
    } catch (e: any) {
        console.error(`${e.name}: ${e.message}`);
    }
    console.log('');
}

async function update() {
    try {
        if (!(await client.collections(collectionName).exists())) {
            throw new Error(`Collection '${collectionName}' does not exist`);
        }

        const updateSchema = {
            fields: [
                {
                    name: 'title',
                    drop: true,
                },
                {
                    name: 'title',
                    type: 'string',
                    infix: true,
                },
            ],
        };
        const collection = await client.collections(collectionName).update(updateSchema as any);

        console.log(`Collection '${collectionName}' updated successfully`);
        console.dir(collection, { depth: null });
    } catch (e: any) {
        console.error(`${e.name}: ${e.message}`);
    }
    console.log('');
}

async function retrieve() {
    try {
        if (!(await client.collections(collectionName).exists())) {
            throw new Error(`Collection '${collectionName}' does not exist`);
        }
        const collection = await client.collections(collectionName).retrieve();

        console.log(`Collection '${collectionName}' retrieved successfully`);
        console.dir(collection, { depth: null });
    } catch (e: any) {
        console.error(`${e.name}: ${e.message}`);
    }
    console.log('');
}

async function retrieveAll() {
    try {
        const collections = await client.collections().retrieve();

        console.log(`Collections retrieved successfully`);
        console.dir(collections, { depth: null });
    } catch (e: any) {
        console.error(`${e.name}: ${e.message}`);
    }
    console.log('');
}

async function drop() {
    try {
        if (!(await client.collections(collectionName).exists())) {
            throw new Error(`Collection '${collectionName}' does not exist`);
        }
        const collection = await client.collections(collectionName).delete();

        console.log(`Collection '${collectionName}' dropped successfully`);
        console.dir(collection, { depth: null });
    } catch (e: any) {
        console.error(`${e.name}: ${e.message}`);
    }
    console.log('');
}

async function main() {
    await create();
    await update();
    await retrieve();
    await retrieveAll();
    // await drop();
}

main();
