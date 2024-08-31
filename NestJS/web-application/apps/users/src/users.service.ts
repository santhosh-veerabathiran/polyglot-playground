import { Injectable } from '@nestjs/common';
import { frameResponse, logger, validateId, validateUser } from './utils';

@Injectable()
export class UsersService {
	private users = [
		{
			id: 101,
			name: 'santhosh',
			email: 'santhosh123@gmail.com',
		},
		{
			id: 201,
			name: 'murugan',
			email: 'powermurugan123@gmail.com',
		},
	];

	getUsers() {
		try {
			const users = this.users;
			if (!users) throw new Error('Users not found');
			logger.log(`Fetched users: ${JSON.stringify(users, null, 2)}`);
			return frameResponse('Success', 'Users fetched successfully', users);
		} catch (e) {
			logger.error(`Error occurred in getUsers with message: ${e.message}`);
			return frameResponse('Error', e.message);
		}
	}

	getUser(id: number) {
		try {
			id = validateId(id);
			const user = this.users.find(user => user.id == id);
			if (!user) throw new Error('User not found');
			logger.log(`Fetched User: ${JSON.stringify(user, null, 2)}`);
			return frameResponse('Success', 'User fetched successfully', user);
		} catch (e) {
			logger.error(`Error occurred in getUser with message: ${e.message}`);
			return frameResponse('Error', e.message);
		}
	}

	createUsers(
		users: {
			id: number;
			name: string;
			email: string;
		}[]
	) {
		try {
			if (Object.entries(users).length == 0)
				throw new Error('Required data not found');
			const createdUsers = users.map(user => {
				return this.createUser(user);
			});
			return frameResponse('Success', 'Users created successfully', createdUsers);
		} catch (e) {
			logger.error(`Error occurred in createUser with message: ${e.message}`);
			return frameResponse('Error', e.message);
		}
	}

	createUser(user: { id: number; name: string; email: string }) {
		try {
			user = validateUser(user);
			if (this.users.find(u => u.id == user.id))
				throw new Error(`User '${user.id}' already exists`);
			this.users.push(user);
			const msg = `User '${user.id}' added successfully`;
			logger.log(msg);
			return frameResponse('Success', msg);
		} catch (e) {
			logger.error(`Error occurred in createUser with message: ${e.message}`);
			return frameResponse('Error', e.message);
		}
	}
}
