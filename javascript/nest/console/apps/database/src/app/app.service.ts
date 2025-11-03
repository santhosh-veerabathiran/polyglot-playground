import { Inject, Injectable, Logger } from '@nestjs/common';
import { IGetUsers, IUser } from '@workspace/interfaces';
import { DataSource, Repository } from 'typeorm';
import { postgresConfig } from '../environment';
import { frameResponse, stringifyError } from '@workspace/utilities';
import { generateID } from '@jetit/id';
import { Repositories } from './entities';
import { Users } from '@workspace/constants';

@Injectable()
export class AppService {
    private readonly logger = new Logger('DATABASE_SERVICE');
    private database: DataSource;

    constructor(@Inject(Repositories.UR) private readonly UR: Repository<Users>) {
        this.initialize();
    }

    async initialize() {
        this.database = await new DataSource(postgresConfig).initialize();
        await this.createUserTable();
    }

    // Database
    async createUserTable(requestId: string = 'AUTO_CREATE') {
        try {
            const query = `CREATE TABLE IF NOT EXISTS users (
                user_id CHARACTER VARYING PRIMARY KEY, 
                email CHARACTER VARYING,
                first_name CHARACTER VARYING, 
                last_name CHARACTER VARYING NULL,
				phone_number CHARACTER VARYING,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                last_updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                created_by CHARACTER VARYING DEFAULT 'SYSTEM',
                last_updated_by CHARACTER VARYING DEFAULT 'SYSTEM'
            )`;
            const create = await this.database.query(query);

            this.logger.log(`[${requestId}] Users table created successfully with response: ${JSON.stringify(create)}`);
        } catch (error) {
            this.logger.error(`[${requestId}] Failed to create users table with error: ${stringifyError(error)}`);
        }
    }

    async getUsers(requestId: string, payload: IGetUsers) {
        try {
            const { page, pageSize: limit } = payload;
            const offset = (page - 1) * limit;

            const query = `SELECT u.* FROM users u LIMIT ${limit} OFFSET ${offset}`;
            const users = await this.database.query(query);

            this.logger.log(`[${requestId}] Users fetched successfully with response: ${JSON.stringify(users)}`);
            return frameResponse({ status: 'SUCCESS', message: 'Users fetched successfully', data: users });
        } catch (error) {
            this.logger.error(`[${requestId}] Failed to fetch users with error: ${stringifyError(error)}`);
            return frameResponse({ status: 'ERROR', message: error.message });
        }
    }

    async getUser(requestId: string, userId: string) {
        try {
            const query = `SELECT u.* FROM users u WHERE user_id = '${userId}'`;
            const user = await this.database.query(query);

            this.logger.log(`[${requestId}] User fetched successfully with response: ${JSON.stringify(user)}`);
            return frameResponse({ status: 'SUCCESS', message: 'User fetched successfully', data: user });
        } catch (error) {
            this.logger.error(`[${requestId}] Failed to fetch user with error: ${stringifyError(error)}`);
            return frameResponse({ status: 'ERROR', message: error.message });
        }
    }

    async createUser(requestId: string, user: IUser) {
        try {
            const query = `INSERT INTO users (user_id, email, first_name, last_name, phone_number) VALUES ($1, $2, $3, $4, $5)`;
            const create = await this.database.query(query, [generateID('HEX', '01'), user.email, user.firstName, user.lastName, user.phoneNumber]);
            this.logger.log(`[${requestId}] User created successfully with response: ${JSON.stringify(create)}`);
            return frameResponse({ status: 'SUCCESS', message: 'User created successfully', data: create });
        } catch (e) {
            this.logger.error(`[${requestId}] Failed to create user with error: ${stringifyError(e)}`);
            return frameResponse({ status: 'ERROR', message: e.message });
        }
    }

    async updateUser(requestId: string, user: Partial<IUser>) {
        try {
            if (!user.firstName && !user.lastName && !user.email && !user.phoneNumber) throw new Error('Required data not found');

            const updates: string[] = [];
            if (user.firstName) updates.push(`first_name = '${user.firstName}'`);
            if (user.lastName) updates.push(`last_name = '${user.lastName}'`);
            if (user.email) updates.push(`email = '${user.email}'`);
            if (user.phoneNumber) updates.push(`phone_number = '${user.phoneNumber}'`);

            const query = `UPDATE users u SET ${updates.join(', ')} WHERE u.user_id = '${user.userId}'`;

            const update = await this.database.query(query);

            this.logger.log(`[${requestId}] User updated successfully with response: ${JSON.stringify(update)}`);
            return frameResponse({ status: 'SUCCESS', message: 'User updated successfully', data: update });
        } catch (e) {
            this.logger.error(`[${requestId}] Failed to update user with error: ${stringifyError(e)}`);
            return frameResponse({ status: 'ERROR', message: e.message });
        }
    }

    async removeUser(requestId: string, userId: string) {
        try {
            const query = `DELETE FROM users u WHERE u.user_id = '${userId}'`;
            const remove = await this.database.query(query);

            this.logger.log(`[${requestId}] User removed successfully with response: ${JSON.stringify(remove)}`);
            return frameResponse({ status: 'SUCCESS', message: 'User removed successfully', data: remove });
        } catch (e) {
            this.logger.error(`[${requestId}] Failed to remove user with error: ${stringifyError(e)}`);
            return frameResponse({ status: 'ERROR', message: e.message });
        }
    }

    // TypeORM
    async typeORMGetUsers(requestId: string, payload: IGetUsers) {
        try {
            const { page, pageSize: limit } = payload;
            const offset = (page - 1) * limit;

            const users = await this.UR.find({ skip: offset, take: limit });

            this.logger.log(`[${requestId}] Users fetched successfully with response: ${JSON.stringify(users)}`);
            return frameResponse({ status: 'SUCCESS', message: 'Users fetched successfully', data: users });
        } catch (error) {
            this.logger.error(`[${requestId}] Failed to fetch users with error: ${stringifyError(error)}`);
            return frameResponse({ status: 'ERROR', message: error.message });
        }
    }

    async typeORMGetUser(requestId: string, userId: string) {
        try {
            const user = await this.UR.findOne({ where: { userId } });
            this.logger.log(`[${requestId}] User fetched successfully with response: ${JSON.stringify(user)}`);
            return frameResponse({ status: 'SUCCESS', message: 'User fetched successfully', data: user });
        } catch (error) {
            this.logger.error(`[${requestId}] Failed to fetch user with error: ${stringifyError(error)}`);
            return frameResponse({ status: 'ERROR', message: error.message });
        }
    }

    async typeORMCreateUser(requestId: string, user: IUser) {
        try {
            const create = await this.UR.save(
                this.UR.create({
                    userId: generateID('HEX', '01'),
                    email: user.email,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    phoneNumber: user.phoneNumber,
                    address: user.address,
                })
            );
            this.logger.log(`[${requestId}] User created successfully with response: ${JSON.stringify(create)}`);
            return frameResponse({ status: 'SUCCESS', message: 'User created successfully', data: create });
        } catch (e) {
            this.logger.error(`[${requestId}] Failed to create user with error: ${stringifyError(e)}`);
            return frameResponse({ status: 'ERROR', message: e.message });
        }
    }

    async typeORMUpdateUser(requestId: string, user: Partial<IUser>) {
        try {
            const update = await this.UR.update(
                { userId: user.userId, email: user.email },
                {
                    email: user.email,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    phoneNumber: user.phoneNumber,
                    address: user.address,
                }
            );
            this.logger.log(`[${requestId}] User updated successfully with response: ${JSON.stringify(update)}`);
            return frameResponse({ status: 'SUCCESS', message: 'User updated successfully', data: update });
        } catch (e) {
            this.logger.error(`[${requestId}] Failed to update user with error: ${stringifyError(e)}`);
            return frameResponse({ status: 'ERROR', message: e.message });
        }
    }

    async typeORMRemoveUser(requestId: string, userId: string) {
        try {
            const remove = await this.UR.delete(userId);
            this.logger.log(`[${requestId}] User removed successfully with response: ${JSON.stringify(remove)}`);
            return frameResponse({ status: 'SUCCESS', message: 'User removed successfully', data: remove });
        } catch (e) {
            this.logger.error(`[${requestId}] Failed to remove user with error: ${stringifyError(e)}`);
            return frameResponse({ status: 'ERROR', message: e.message });
        }
    }
}
