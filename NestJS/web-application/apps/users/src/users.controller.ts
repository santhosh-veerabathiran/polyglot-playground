import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { logger } from './utils';

@Controller()
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	@Get('users')
	getUsers() {
		logger.log(`fetchUsers called...`);
		return this.usersService.getUsers();
	}

	@Get(':id')
	getUserByParamPath(@Param('id') id: number) {
		logger.log(`fetchUser called with id: ${id}`);
		return this.usersService.getUser(id);
	}

	@Post('users')
	createUsers(
		@Body()
		users: {
			id: number;
			name: string;
			email: string;
		}[]
	) {
		logger.log(`createUsers called with data: ${JSON.stringify(users, null, 2)}`);
		return this.usersService.createUsers(users);
	}

	@Post()
	createUser(@Body() user: { id: number; name: string; email: string }) {
		logger.log(`createUser called with data: ${JSON.stringify(user, null, 2)}`);
		return this.usersService.createUser(user);
	}
}
