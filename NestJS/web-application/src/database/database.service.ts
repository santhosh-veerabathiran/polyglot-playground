import { Injectable } from '@nestjs/common';
import { Database } from './utils';
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
    }

    async getUsers() {
        try {
            const query = `SELECT u.* FROM user u`;
            const users = await this.database.getConnection().query(query);
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
            const createdUsers = users.map(async (user) => {
                return await this.createUser(user);
            });
            return frameResponse('Success', 'users created successfully', createdUsers);
        }
        catch (e) {
            logger.error(`Error occurred in CreateUser with message: ${e.message}`);
            return frameResponse('Error', e.message);
        }
    }

    async createUser(user: User) {
        try {
            const date = new Date().toISOString().slice(0, 19).replace('T', ' ');
            const query = `INSERT INTO user (username, password, createdAt)
                VALUES ('${user.username}', '${user.password}', '${date}')`;
            const result = await this.database.getConnection().query(query);
            logger.log(`User created successfully with response: ${JSON.stringify(result, null, 2)}`);
            return frameResponse('Success', `User created successfully`);
        }
        catch (e) {
            logger.error(`Error occurred in CreateUser with message: ${e.message}`);
            return frameResponse('Error', e.message);
        }
    }
}
