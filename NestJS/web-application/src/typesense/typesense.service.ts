import { Injectable } from '@nestjs/common';
import { Client } from 'typesense';
import { typesenseConfig } from './environments/environments';
import { Movie } from './interfaces/movies.interface';
import { CollectionCreateSchema } from 'typesense/lib/Typesense/Collections';
import { moviesSchema } from './utils/movies.schema';
import { frameResponse } from './utils/frame-response';
import { SearchParams } from 'typesense/lib/Typesense/Documents';

@Injectable()
export class TypesenseService {
    private typesenseClient: Client;

    constructor() {
        this.typesenseClient = new Client(typesenseConfig);
        this.createCollection(moviesSchema);
    }

    async createCollection(schema: CollectionCreateSchema) {
        const isAvailable = await this.typesenseClient.collections(schema.name).exists()

        if (!isAvailable) {
            this.typesenseClient.collections().create(schema)
                .then((value) => {
                    console.log(`${schema.name} collection created successfully`);
                })
                .catch((e) => {
                    console.error(`Could not create ${schema.name} collection error occurred with message: ${e.message}`);
                });
        }
    }

    async addOrUpdateMovieDocument(
        movieData: Movie
    ) {
        try {
            const indexResult = await this.typesenseClient.collections(moviesSchema.name).documents().upsert(movieData);
            return frameResponse(
                'Success',
                `document added to ${moviesSchema.name} collection successfully`,
                indexResult,
            );
        }
        catch (e) {
            console.error(`Error occurred in addMovieDocument with message: ${e.message}`);
            return frameResponse('Error', e.message);
        }
    }

    async searchMovies(
        query: string
    ) {
        const searchParameters: SearchParams = {
            q: query,
            query_by: ['title', 'genres']
        }
        try {
            const searchResult = await this.typesenseClient.collections(moviesSchema.name).documents().search(searchParameters);
            return frameResponse(
                'Success',
                `successfully searched in ${moviesSchema.name} collection`,
                searchResult,
            );
        }
        catch (e) {
            console.error(`Error occurred in searchMovies with message: ${e.message}`);
            return frameResponse('Error', e.message);
        }
    }
}
