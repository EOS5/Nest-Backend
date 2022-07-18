import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer'
import { SerealizedUser, User } from '../../Types/User'

@Injectable()
export class UsersService {
    private users: User[] = [
        {
            username: 'bgbfrbr',
            password: '1234567',
        },
        {
            username: 'bgbbr',
            password: '1234567',
        },
        {
            username: 'bgb',
            password: '1234567',
        },
        {
            username: 'brbr',
            password: '1234567',
        },
        
    ]

    getUsers() {
        return this.users.map((user) => new SerealizedUser(user));
    }

    getUsersByUsername(username: string) {
        return this.users.find((user) => user.username === username);
    }
}
