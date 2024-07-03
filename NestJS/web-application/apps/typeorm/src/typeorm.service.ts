import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './entities/Users';
import { Repository } from 'typeorm';
import { TUsers } from './interfaces/users.interface';
import { frameResponse } from './utils/frame-response';
import { logger, validateId } from './utils';

@Injectable()
export class TypeormService {
	constructor(
		@InjectRepository(Users) private usersRepository: Repository<Users>
	) {}

	async getUsers() {
		try {
			const users = await this.usersRepository.find();
			logger.log(`Users fetched successfully`);
			return frameResponse(
				'Success',
				'Users fetched successfully',
				users
			);
		} catch (e) {
			logger.log(`Error occured in getUsers with message: ${e.message}`);
			return frameResponse('Error', e.message);
		}
	}

	async getUser(id: number) {
		try {
			id = validateId(id);
			const user = await this.usersRepository.findOne({
				where: { user_id: id },
			});
			if (!user) throw new Error(`User with Id: ${id} not found`);
			logger.log('User fetched successfully');
			return frameResponse('Success', 'User fetched successfully', user);
		} catch (e) {
			logger.log(`Error occured in getUser with message: ${e.message}`);
			return frameResponse('Error', e.message);
		}
	}

	async createUsers(users: TUsers[]) {
		try {
			if (Object.entries(users).length == 0)
				throw new Error('Required data not found');
			const createdUsers = this.usersRepository.create(
				users.map(user => {
					return {
						...user,
						created_at: new Date(),
						updated_at: new Date(),
					};
				})
			);
			const savedUsers = await this.usersRepository.save(createdUsers);
			logger.log('Users created successfully');
			return frameResponse(
				'Success',
				'Users created successfully',
				savedUsers
			);
		} catch (e) {
			logger.log(
				`Error occured in createUsers with message: ${e.message}`
			);
			return frameResponse('Error', e.message);
		}
	}

	async createUser(user: TUsers) {
		try {
			const createdUser = this.usersRepository.create({
				...user,
				created_at: new Date(),
				updated_at: new Date(),
			});
			const savedUser = await this.usersRepository.save(createdUser);
			logger.log('User created successfully');
			return frameResponse(
				'Success',
				'User created successfully',
				savedUser
			);
		} catch (e) {
			logger.log(
				`Error occured in createUser with message: ${e.message}`
			);
			return frameResponse('Error', e.message);
		}
	}
}
