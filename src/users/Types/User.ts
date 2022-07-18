import { Exclude } from 'class-transformer'

export interface User {
    username: string;
    password: string;
}

export class SerealizedUser {
    username: string;

    @Exclude()
    password: string;

    constructor(partial: Partial<SerealizedUser>) {
        Object.assign(this, partial);

    }
}