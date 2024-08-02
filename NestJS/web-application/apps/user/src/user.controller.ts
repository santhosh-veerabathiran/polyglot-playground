import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { logger } from './utils';

@Controller()
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Get('users')
	getUsers() {
		logger.log(`fetchUsers called...`);
		return this.userService.getUsers();
	}

	@Get(':id')
	getUserByParamPath(@Param('id') id: number) {
		logger.log(`fetchUser called with id: ${id}`);
		return this.userService.getUser(id);
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
		return this.userService.createUsers(users);
	}

	@Post()
	createUser(@Body() user: { id: number; name: string; email: string }) {
		logger.log(`createUser called with data: ${JSON.stringify(user, null, 2)}`);
		return this.userService.createUser(user);
	}
}
