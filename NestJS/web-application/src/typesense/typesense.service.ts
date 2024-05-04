import { Injectable, Logger } from '@nestjs/common';
import { Client } from 'typesense';
import { typesenseConfig } from './environments/environment';
import { Movie } from './interfaces/movies.interface';
import { CollectionCreateSchema } from 'typesense/lib/Typesense/Collections';
import { logger, moviesSchema } from './utils';
import { frameResponse } from './utils';
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
            logger.log(`Creating ${schema.name} collection with schema: ${JSON.stringify(schema, null, 2)}`)
            this.typesenseClient.collections().create(schema)
                .then((value) => {
                    logger.log(`${schema.name} collection created successfully`);
                })
                .catch((e) => {
                    logger.error(`Could not create ${schema.name} collection error occurred with message: ${e.message}`);
                });
        }
    }

    async addOrUpdateMovieDocument(
        movieData: Movie
    ) {
        try {
            const indexResult = await this.typesenseClient.collections(moviesSchema.name).documents().upsert(movieData);
            logger.log(`document added to ${moviesSchema.name} collection successfully with response: ${JSON.stringify(indexResult, null, 2)}`);
            return frameResponse(
                'Success',
                `document added to ${moviesSchema.name} collection successfully`,
                indexResult,
            );
        }
        catch (e) {
            logger.error(`Error occurred in addMovieDocument with message: ${e.message}`);
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
            logger.log(`Successfully searched in ${moviesSchema.name} collection with response: ${JSON.stringify(searchResult, null, 2)}`);
            return frameResponse(
                'Success',
                `successfully searched in ${moviesSchema.name} collection`,
                searchResult,
            );
        }
        catch (e) {
            logger.error(`Error occurred in searchMovies with message: ${e.message}`);
            return frameResponse('Error', e.message);
        }
    }
}
