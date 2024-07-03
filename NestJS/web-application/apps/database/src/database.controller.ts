import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	ParseIntPipe,
	Patch,
	Post,
} from '@nestjs/common';
import { DatabaseService } from './database.service';
import { TUsers } from './interfaces';
import { logger } from './utils';

@Controller('database')
export class DatabaseController {
	constructor(private readonly databaseService: DatabaseService) {}

	@Get('users')
	getUsers() {
		logger.log('fetchUsers called');
		return this.databaseService.getUsers();
	}

	@Get('users/:id')
	getUser(@Param('id') id: number) {
		logger.log(`fetchUser called with id: ${id}`);
		return this.databaseService.getUser(id);
	}

	@Post('users')
	createUsers(@Body() users: TUsers[]) {
		logger.log(
			`createUsers called with data: ${JSON.stringify(users, null, 2)}`
		);
		return this.databaseService.createUsers(users);
	}

	@Post('users/create')
	createUser(@Body() user: TUsers) {
		logger.log(
			`createUsers called with data: ${JSON.stringify(user, null, 2)}`
		);
		return this.databaseService.createUser(user);
	}

	@Patch('users/:id')
	updateUser(@Param('id', ParseIntPipe) id: number, @Body() user: TUsers) {
		logger.log(
			`updateUser called with id: ${id} and data: ${JSON.stringify(user, null, 2)}`
		);
		return this.databaseService.updateUser(id, user);
	}

	@Delete('users/:id')
	removeUser(@Param('id', ParseIntPipe) id: number) {
		logger.log(`removeUser called with data: ${id}`);
		return this.databaseService.removeUser(id);
	}
}
