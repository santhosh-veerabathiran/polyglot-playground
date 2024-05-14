import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/User';
import { Repository } from 'typeorm';
import { UserInfo } from './interfaces/user.interface';
import { frameResponse } from './utils/frame-response';
import { logger, validateId } from './utils';

@Injectable()
export class TypeormService {
  constructor(@InjectRepository(User) private userRepository: Repository<User>) { }

  async getUsers() {
    try {
      const users = await this.userRepository.find();
      logger.log(`Users fetched successfully`);
      return frameResponse('Success', 'Users fetched successfully', users);
    }
    catch (e) {
      logger.log(`Error occured in getUsers with message: ${e.message}`);
      return frameResponse('Error', e.message);
    }
  }

  async getUser(id: number) {
    try {
      id = validateId(id);
      const user = await this.userRepository.findOne({ where: { id } });
      if (!user) throw new Error(`User with Id: ${id} not found`);
      logger.log('User fetched successfully');
      return frameResponse('Success', 'User fetched successfully', user);
    }
    catch (e) {
      logger.log(`Error occured in getUser with message: ${e.message}`);
      return frameResponse('Error', e.message);
    }
  }

  async createUsers(users: UserInfo[]) {
    try {
      if (Object.entries(users).length == 0) throw new Error('Required data not found');
      const createdUsers = this.userRepository.create(users.map((user) => { return { ...user, createdAt: new Date() } }));
      const savedUsers = await this.userRepository.save(createdUsers);
      logger.log('Users created successfully');
      return frameResponse('Success', 'Users created successfully', savedUsers);
    }
    catch (e) {
      logger.log(`Error occured in createUsers with message: ${e.message}`);
      return frameResponse('Error', e.message);
    }
  }

  async createUser(user: UserInfo) {
    try {
      const createdUser = this.userRepository.create({ ...user, createdAt: new Date() });
      const savedUser = await this.userRepository.save(createdUser);
      logger.log('User created successfully');
      return frameResponse('Success', 'User created successfully', savedUser);
    }
    catch (e) {
      logger.log(`Error occured in createUser with message: ${e.message}`);
      return frameResponse('Error', e.message);
    }
  }
}
