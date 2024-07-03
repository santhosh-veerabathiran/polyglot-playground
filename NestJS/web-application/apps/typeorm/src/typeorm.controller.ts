import {
	Body,
	Controller,
	Get,
	Param,
	ParseIntPipe,
	Post,
} from '@nestjs/common';
import { TypeormService } from './typeorm.service';
import { TUsers } from './interfaces';
import { logger } from './utils';

@Controller('typeorm')
export class TypeormController {
	constructor(private readonly typeormService: TypeormService) {}

	@Get('users')
	getUsers() {
		logger.log('fetchUsers called...');
		return this.typeormService.getUsers();
	}

	@Get('users/:id')
	getUserById(@Param('id', ParseIntPipe) id: number) {
		logger.log(`fetchUser called with id: ${id}`);
		return this.typeormService.getUser(id);
	}

	@Post('users')
	createUsers(@Body() users: TUsers[]) {
		logger.log(
			`createUsers called with data: ${JSON.stringify(users, null, 2)}`
		);
		try {
			return this.typeormService.createUsers(users);
		} catch (e) {
			return e.message;
		}
	}

	@Post('users/create')
	createUser(@Body() user: TUsers) {
		logger.log(
			`createUser called with data: ${JSON.stringify(user, null, 2)}`
		);
		try {
			return this.typeormService.createUser(user);
		} catch (e) {
			return e.message;
		}
	}
}
