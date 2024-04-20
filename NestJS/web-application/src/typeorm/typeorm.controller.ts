import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { TypeormService } from './typeorm.service';
import { UserInfo } from './interfaces/user.interface';

@Controller('typeorm')
export class TypeormController {
    constructor(private readonly typeormService: TypeormService) { }

    @Get('users')
    getUsers() {
        return this.typeormService.getUsers();
    }

    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id: number) {
        return this.typeormService.getUser(id);
    }

    @Post('users')
    createUsers(@Body() users: UserInfo[]) {
        try {
            return this.typeormService.createUsers(users);
        }
        catch (e) {
            return e.message;
        }
    }

    @Post()
    createUser(@Body() user: UserInfo) {
        try {
            return this.typeormService.createUser(user);
        }
        catch (e) {
            return e.message;
        }
    }
}
