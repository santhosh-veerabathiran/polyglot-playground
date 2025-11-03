import { Controller, Get, Logger, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { DatabasePattern } from '@workspace/constants';
import { MessagePattern } from '@nestjs/microservices';
import { IGatewayRequest, IGetUsers, IUser } from '@workspace/interfaces';

@Controller()
export class AppController {
    private readonly logger = new Logger('DATABASE_CONTROLLER');
    constructor(private readonly as: AppService) {}

    // Database Queries
    @MessagePattern(DatabasePattern.GetUsers)
    async getUsers(@Body() body: IGatewayRequest<IGetUsers>) {
        const { requestId, payload } = body;
        try {
            this.logger.log(`[${requestId}] [${DatabasePattern.GetUsers}] Request received with payload: ${JSON.stringify(payload)}`);
            return await this.as.getUsers(requestId, payload);
        } catch (error) {
            this.logger.error(`[${requestId}] [${DatabasePattern.GetUsers}] Request failed with error: ${error}`);
        }
    }

    @MessagePattern(DatabasePattern.GetUser)
    async getUser(@Body() body: IGatewayRequest<{ userId: string }>) {
        const { requestId, payload } = body;
        try {
            this.logger.log(`[${requestId}] [${DatabasePattern.GetUser}] Request received with payload: ${JSON.stringify(payload)}`);
            return await this.as.getUser(requestId, payload.userId);
        } catch (error) {
            this.logger.error(`[${requestId}] [${DatabasePattern.GetUser}] Request failed with error: ${error}`);
        }
    }

    @MessagePattern(DatabasePattern.CreateUser)
    async createUser(@Body() body: IGatewayRequest<IUser>) {
        const { requestId, payload } = body;
        try {
            this.logger.log(`[${requestId}] [${DatabasePattern.CreateUser}] Request received with payload: ${JSON.stringify(payload)}`);
            return await this.as.createUser(requestId, payload);
        } catch (error) {
            this.logger.error(`[${requestId}] [${DatabasePattern.CreateUser}] Request failed with error: ${error}`);
        }
    }

    @MessagePattern(DatabasePattern.UpdateUser)
    async updateUser(@Body() body: IGatewayRequest<Partial<IUser>>) {
        const { requestId, payload } = body;
        try {
            this.logger.log(`[${requestId}] [${DatabasePattern.UpdateUser}] Request received with payload: ${JSON.stringify(payload)}`);
            return await this.as.updateUser(requestId, payload);
        } catch (error) {
            this.logger.error(`[${requestId}] [${DatabasePattern.UpdateUser}] Request failed with error: ${error}`);
        }
    }

    @MessagePattern(DatabasePattern.DeleteUser)
    async removeUser(@Body() body: IGatewayRequest<{ userId: string }>) {
        const { requestId, payload } = body;
        try {
            this.logger.log(`[${requestId}] [${DatabasePattern.DeleteUser}] Request received with payload: ${JSON.stringify(payload)}`);
            return await this.as.removeUser(requestId, payload.userId);
        } catch (error) {
            this.logger.error(`[${requestId}] [${DatabasePattern.DeleteUser}] Request failed with error: ${error}`);
        }
    }

    // TypeORM Queries
    @MessagePattern(DatabasePattern.TypeORMGetUsers)
    async typeORMGetUsers(@Body() body: IGatewayRequest<IGetUsers>) {
        const { requestId, payload } = body;
        try {
            this.logger.log(`[${requestId}] [${DatabasePattern.TypeORMGetUsers}] Request received with payload: ${JSON.stringify(payload)}`);
            return await this.as.typeORMGetUsers(requestId, payload);
        } catch (error) {
            this.logger.error(`[${requestId}] [${DatabasePattern.TypeORMGetUsers}] Request failed with error: ${error}`);
        }
    }

    @MessagePattern(DatabasePattern.TypeORMGetUser)
    async typeORMGetUser(@Body() body: IGatewayRequest<{ userId: string }>) {
        const { requestId, payload } = body;
        try {
            this.logger.log(`[${requestId}] [${DatabasePattern.TypeORMGetUser}] Request received with payload: ${JSON.stringify(payload)}`);
            return await this.as.typeORMGetUser(requestId, payload.userId);
        } catch (error) {
            this.logger.error(`[${requestId}] [${DatabasePattern.TypeORMGetUser}] Request failed with error: ${error}`);
        }
    }

    @MessagePattern(DatabasePattern.TypeORMCreateUser)
    async typeORMCreateUser(@Body() body: IGatewayRequest<IUser>) {
        const { requestId, payload } = body;
        try {
            this.logger.log(`[${requestId}] [${DatabasePattern.TypeORMCreateUser}] Request received with payload: ${JSON.stringify(payload)}`);
            return await this.as.typeORMCreateUser(requestId, payload);
        } catch (error) {
            this.logger.error(`[${requestId}] [${DatabasePattern.TypeORMCreateUser}] Request failed with error: ${error}`);
        }
    }

    @MessagePattern(DatabasePattern.TypeORMUpdateUser)
    async typeORMUpdateUser(@Body() body: IGatewayRequest<Partial<IUser>>) {
        const { requestId, payload } = body;
        try {
            this.logger.log(`[${requestId}] [${DatabasePattern.TypeORMUpdateUser}] Request received with payload: ${JSON.stringify(payload)}`);
            return await this.as.typeORMUpdateUser(requestId, payload);
        } catch (error) {
            this.logger.error(`[${requestId}] [${DatabasePattern.TypeORMUpdateUser}] Request failed with error: ${error}`);
        }
    }

    @MessagePattern(DatabasePattern.TypeORMDeleteUser)
    async typeORMRemoveUser(@Body() body: IGatewayRequest<{ userId: string }>) {
        const { requestId, payload } = body;
        try {
            this.logger.log(`[${requestId}] [${DatabasePattern.TypeORMDeleteUser}] Request received with payload: ${JSON.stringify(payload)}`);
            return await this.as.typeORMRemoveUser(requestId, payload.userId);
        } catch (error) {
            this.logger.error(`[${requestId}] [${DatabasePattern.TypeORMDeleteUser}] Request failed with error: ${error}`);
        }
    }
}
