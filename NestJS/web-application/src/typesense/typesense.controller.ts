import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { TypesenseService } from './typesense.service';
import { Movie } from './interfaces/movies.interface';

@Controller('typesense')
export class TypesenseController {
    constructor(private readonly typesenseService: TypesenseService) { }

    @Get('search')
    searchInMovies(@Query('query') query: string) {
        return this.typesenseService.searchMovies(query);
    }

    @Post('index')
    addOrUpdateMovieDocument(@Body() movie: Movie) {
        return this.typesenseService.addOrUpdateMovieDocument(movie);
    }
}
