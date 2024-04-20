import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get('users')
    getUsers() {
        return this.userService.getUsers();
    }

    @Get(':id')
    getUserByParamPath(@Param('id') id: number) {
        return this.userService.getUser(id);
    }

    @Post('users')
    createUsers(@Body() users: {
        id: number,
        name: string,
        email: string
    }[]) {
        return this.userService.createUsers(users);
    }

    @Post()
    createUser(@Body() user: {
        id: number,
        name: string,
        email: string
    }) {
        return this.userService.createUser(user);
    }
}
