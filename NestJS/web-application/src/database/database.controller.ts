import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { User } from './interfaces/user.interface';
import { logger } from './utils';

@Controller('database')
export class DatabaseController {

    constructor(private readonly databaseService: DatabaseService) { }

    @Get("users")
    getUsers() {
        logger.log('fetchUsers called');
        return this.databaseService.getUsers();
    }

    @Get(":id")
    getUser(@Param('id', ParseIntPipe) id: number) {
        logger.log(`fetchUser called with id: ${id}`);
        return this.databaseService.getUser(id);
    }

    @Post('users')
    createUsers(@Body() users: User[]) {
        logger.log(`createUsers called with data: ${JSON.stringify(users, null, 2)}`);
        return this.databaseService.createUsers(users);
    }

    @Post()
    createUser(@Body() user: User) {
        logger.log(`createUsers called with data: ${JSON.stringify(user, null, 2)}`);
        return this.databaseService.createUser(user);
    }
}
