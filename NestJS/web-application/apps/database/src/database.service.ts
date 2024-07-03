import { Injectable } from '@nestjs/common';
import { Database, validateUser } from './utils';
import { database } from './utils';
import { mysqlConfig } from './environments/environment';
import { frameResponse } from './utils';
import { TUsers } from './interfaces';
import { logger, validateId } from './utils';

@Injectable()
export class DatabaseService {
	database: Database;

	constructor() {
		this.initialize();
	}

	async initialize() {
		this.database = database();
		await this.database.createConnection(mysqlConfig);
		await this.createUserTable();
	}

	async createUserTable() {
		try {
			const query = `CREATE TABLE IF NOT EXISTS users (
                user_id int PRIMARY KEY AUTO_INCREMENT, 
                fname varchar(255), 
                lname varchar(255) NULL,
				email varchar(255) UNIQUE,
				phone_no varchar(255),
                createdAt datetime,
                updatedAt datetime
            )`;

			const createResult = await this.database
				.getConnection()
				.query(query);
			logger.log(
				`User table created successfully with response: ${JSON.stringify(createResult, null, 2)}`
			);
		} catch (e) {
			logger.error(
				`Error occurred in createUserTable with message: ${e.message}`
			);
		}
	}

	async getUsers() {
		try {
			const query = `SELECT u.* FROM users u`;
			const users = await this.database.getConnection().query(query);
			if (Object.keys(users).length == 0)
				throw new Error('users not found');
			logger.log(
				`Users fetched successfully with response: ${JSON.stringify(users, null, 2)}`
			);
			return frameResponse(
				'Success',
				`Users fetched successfully`,
				users
			);
		} catch (e) {
			logger.error(
				`Error occurred in getUsers with message: ${e.message}`
			);
			return frameResponse('Error', e.message);
		}
	}

	async getUser(id: number) {
		try {
			id = validateId(id);
			const query = `SELECT u.* FROM users u WHERE user_id = ${id}`;
			const user = await this.database.getConnection().query(query);
			if (user.length == 0) throw new Error('User not found');
			logger.log(
				`User fetched successfully with response: ${JSON.stringify(user, null, 2)}`
			);
			return frameResponse('Success', `User fetched successfully`, user);
		} catch (e) {
			logger.error(
				`Error occurred in getUser with message: ${e.message}`
			);
			return frameResponse('Error', e.message);
		}
	}

	async createUsers(users: TUsers[]) {
		try {
			if (Object.entries(users).length == 0)
				throw new Error('Required data not found');
			const createdUsers = [];
			for (const user of users) {
				createdUsers.push(await this.createUser(user));
			}
			return frameResponse(
				'Success',
				'users created successfully',
				createdUsers
			);
		} catch (e) {
			logger.error(
				`Error occurred in createUsers with message: ${e.message}`
			);
			return frameResponse('Error', e.message);
		}
	}

	async createUser(user: TUsers) {
		try {
			user = validateUser(user);
			const date = new Date()
				.toISOString()
				.slice(0, 19)
				.replace('T', ' ');
			const query = `INSERT INTO users 
                (
                    fname, lname, email, phone_no, created_at, updated_at
                )
                VALUES 
                (
                    '${user.fname}', '${user.lname}', '${user.email}', '${user.phone_no}', '${date}', '${date}'
                )`;
			const result = await this.database.getConnection().query(query);
			logger.log(
				`User created successfully with response: ${JSON.stringify(result, null, 2)}`
			);
			return frameResponse('Success', `User created successfully`, {
				id: result.insertId,
			});
		} catch (e) {
			logger.error(
				`Error occurred in createUser with message: ${e.message}`
			);
			return frameResponse('Error', e.message);
		}
	}

	async updateUser(id: number, user: TUsers) {
		try {
			if (!user.fname && !user.lname && !user.email && !user.phone_no)
				throw new Error('Required data not found');
			const date = new Date()
				.toISOString()
				.slice(0, 19)
				.replace('T', ' ');
			const query = `UPDATE users u SET
                ${user.fname ? `fname = '${user.fname}'` : ''},
                ${user.lname ? `lname = '${user.lname}'` : ''},
				${user.email ? `email = '${user.email}'` : ''},
				${user.phone_no ? `phone_no = '${user.phone_no}'` : ''},
                updated_at = '${date}'
                WHERE
                u.user_id = ${id}
            `;
			const updateResult = await this.database
				.getConnection()
				.query(query);
			if (!updateResult['affectedRows'])
				throw new Error('Could not update user');
			logger.log(
				`User updated successfully with response: ${JSON.stringify(updateResult, null, 2)}`
			);
			return frameResponse('Success', `User updated successfully`);
		} catch (e) {
			logger.error(
				`Error occurred in updateUser with message: ${e.message}`
			);
			return frameResponse('Error', e.message);
		}
	}

	async removeUser(id: number) {
		try {
			const query = `DELETE FROM users u WHERE u.user_id = ${id}`;
			const deleteResult = this.database.getConnection().query(query);
			// if (!deleteResult['affectedRows']) throw new Error('Could not remove user');
			logger.log(
				`User removed successfully with response: ${JSON.stringify(deleteResult, null, 2)}`
			);
			return frameResponse('Success', `User removed successfully`);
		} catch (e) {
			logger.error(
				`Error occurred in removeUser with message: ${e.message}`
			);
			return frameResponse('Error', e.message);
		}
	}
}
