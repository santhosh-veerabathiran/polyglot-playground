import { Injectable } from '@nestjs/common';
import { frameResponse } from './response/frame-response';

@Injectable()
export class UserService {

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
    }
  ]

  getUsers() {
    try {
      const users = this.users;
      if (!users) throw new Error('Users not found');
      return frameResponse('Success', 'Users fetched successfully', users);
    }
    catch (e) {
      console.log(`Error occurred in getUsers with message: ${e.message}`);
      return frameResponse('Error', e.message);
    }
  }

  getUser(id: number) {
    try {
      const user = this.users.find(user => user.id == id);
      if (!user) throw new Error('User not found');
      return frameResponse('Success', 'User fetched successfully', user);
    }
    catch (e) {
      console.log(`Error occurred in getUser with message: ${e.message}`);
      return frameResponse('Error', e.message);
    }
  }

  createUsers(
    users: {
      id: number,
      name: string,
      email: string
    }[]
  ) {
    const createdUsers = users.map(user => {
      try {
        if (this.users.find(u => u.id == user.id)) throw new Error(`User '${user.id}' already exists`)
        this.users.push(user);
        return frameResponse('Success', `User '${user.id}' added successfully`);
      }
      catch (e) {
        console.log(`Error occurred in createUser with message: ${e.message}`);
        return frameResponse('Error', e.message);
      }
    });
    return frameResponse('Success', 'Users created successfully', createdUsers);
  }

  createUser(user: {
    id: number,
    name: string,
    email: string
  }) {
    try {
      if (this.users.find(u => u.id == user.id)) throw new Error(`User '${user.id}' already exists`);
      this.users.push(user);
      return frameResponse('Success', `User '${user.id}' added successfully`);
    }
    catch (e) {
      console.log(`Error occurred in createUser with message: ${e.message}`);
      return frameResponse('Error', e.message);
    }
  }
}
