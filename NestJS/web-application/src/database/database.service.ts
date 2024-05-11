import { Injectable } from '@nestjs/common';
import { Database, validateUser } from './utils';
import { database } from './utils';
import { databaseConfig } from './environments.ts/environment';
import { frameResponse } from './utils';
import { User } from './interfaces/user.interface';
import { logger, validateId } from './utils';

@Injectable()
export class DatabaseService {
    database: Database;

    constructor() {
        this.initialize();
    }

    async initialize() {
        this.database = database();
        await this.database.createConnection(databaseConfig);
        await this.createUserTable();
    }

    async createUserTable() {
        try {
            const query = `CREATE TABLE IF NOT EXISTS user (
                id int PRIMARY KEY AUTO_INCREMENT, 
                username varchar(255) UNIQUE, 
                password varchar(255),
                createdAt datetime,
                updatedAt datetime NULL
            )`;

            const createResult = await this.database.getConnection().query(query);
            logger.log(`User table created successfully with response: ${JSON.stringify(createResult, null, 2)}`);
        }
        catch (e) {
            logger.error(`Error occurred in createUserTable with message: ${e.message}`);
        }
    }

    async getUsers() {
        try {
            const query = `SELECT u.* FROM user u`;
            const users = await this.database.getConnection().query(query);
            if (Object.keys(users).length == 0) throw new Error('users not found');
            logger.log(`Users fetched successfully with response: ${JSON.stringify(users, null, 2)}`);
            return frameResponse('Success', `Users fetched successfully`, users);
        }
        catch (e) {
            logger.error(`Error occurred in getUsers with message: ${e.message}`);
            return frameResponse('Error', e.message);
        }
    }

    async getUser(id: number) {
        try {
            id = validateId(id);
            const query = `SELECT u.* FROM user u WHERE id = ${id}`;
            const user = await this.database.getConnection().query(query);
            if (user.length == 0) throw new Error('User not found');
            logger.log(`User fetched successfully with response: ${JSON.stringify(user, null, 2)}`)
            return frameResponse('Success', `User fetched successfully`, user);
        }
        catch (e) {
            logger.error(`Error occurred in getUser with message: ${e.message}`);
            return frameResponse('Error', e.message);
        }
    }

    async createUsers(users: User[]) {
        try {
            if (Object.entries(users).length == 0) throw new Error('Required data not found');
            const createdUsers = [];
            for (const user of users) {
                createdUsers.push(await this.createUser(user));
            }
            return frameResponse('Success', 'users created successfully', createdUsers);
        }
        catch (e) {
            logger.error(`Error occurred in createUsers with message: ${e.message}`);
            return frameResponse('Error', e.message);
        }
    }

    async createUser(user: User) {
        try {
            user = validateUser(user);
            const date = new Date().toISOString().slice(0, 19).replace('T', ' ');
            const query = `INSERT INTO user 
                (
                    username, password, createdAt
                )
                VALUES 
                (
                    '${user.username}', '${user.password}', '${date}'
                )`;
            const result = await this.database.getConnection().query(query);
            logger.log(`User created successfully with response: ${JSON.stringify(result, null, 2)}`);
            return frameResponse('Success', `User created successfully`);
        }
        catch (e) {
            logger.error(`Error occurred in createUser with message: ${e.message}`);
            return frameResponse('Error', e.message);
        }
    }

    async updateUser(id: number, user: User) {
        try {
            if (!user.username && !user.password) throw new Error('Required data not found');
            const date = new Date().toISOString().slice(0, 19).replace('T', ' ');
            const query = `UPDATE user u SET
                ${user.username ? `username = '${user.username}'` : ''},
                ${user.password ? `password = '${user.password}'` : ''},
                updatedAt = '${date}'
                WHERE
                id = ${id}
            `;
            const updateResult = await this.database.getConnection().query(query);
            if (!updateResult['affectedRows']) throw new Error('Could not update user');
            logger.log(`User updated successfully with response: ${JSON.stringify(updateResult, null, 2)}`);
            return frameResponse('Success', `User updated successfully`);
        }
        catch (e) {
            logger.error(`Error occurred in updateUser with message: ${e.message}`);
            return frameResponse('Error', e.message);
        }
    }

    async removeUser(id: number) {
        try {
            const query = `DELETE from user u WHERE u.id = ${id}`;
            const deleteResult = this.database.getConnection().query(query);
            if (!deleteResult['affectedRows']) throw new Error('Could not remove user');
            logger.log(`User removed successfully with response: ${JSON.stringify(deleteResult, null, 2)}`);
            return frameResponse('Success', `User removed successfully`);
        }
        catch (e) {
            logger.error(`Error occurred in removeUser with message: ${e.message}`);
            return frameResponse('Error', e.message);
        }
    }
}
