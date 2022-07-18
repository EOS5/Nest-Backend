import { ClassSerializerInterceptor, Controller, Get, HttpException, HttpStatus, Inject, Param, UseInterceptors } from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';
import { SerealizedUser } from 'src/users/Types/User';

@Controller('users')
export class UsersController {
    constructor(
        @Inject('GET_USERSERVICE') private readonly userService: UsersService,) {}

    @UseInterceptors(ClassSerializerInterceptor)
    @Get('')
    getUsers() {
        return this.userService.getUsers();
    }

    @UseInterceptors(ClassSerializerInterceptor)
    @Get('/:username')
    getUserByName(@Param('username') username: string) {
        const user = this.userService.getUsersByUsername(username);
        if (user) return new SerealizedUser(user);
        else throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
    }
}
