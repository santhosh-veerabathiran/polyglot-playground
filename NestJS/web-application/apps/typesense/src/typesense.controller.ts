import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { TypesenseService } from './typesense.service';
import { Movie } from './interfaces/movies.interface';
import { logger } from './utils';

@Controller()
export class TypesenseController {
	constructor(private readonly typesenseService: TypesenseService) {}

	@Post('index')
	addOrUpdateMovieDocument(@Body() movie: Movie) {
		logger.log(
			`addMovieDocument called with data: ${JSON.stringify(movie, null, 2)}`
		);
		return this.typesenseService.addOrUpdateMovieDocument(movie);
	}

	@Post('import')
	importMultipleDocuments(@Body() movies: Array<Movie>) {
		logger.log(
			`importMultipleDocuments called with data: ${JSON.stringify(movies, null, 2)}`
		);
		return this.typesenseService.importMovieDocuments(movies);
	}

	@Get('search')
	searchInMovies(@Query('query') query: string) {
		logger.log(`searchMovies called with query: ${query}`);
		return this.typesenseService.searchMovies(query);
	}
}
