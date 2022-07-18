import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class User {
    @PrimaryGeneratedColumn({
        type:'smallint',
        name: 'user_id',
    })
    id: number;

    @Column({
        nullable: false,
        default: ''
    })
    username: string;

    @Column({
        name:'email_address',
        nullable: false,
        default:'',
    })
    emailAdress: string;

    @Column({
        nullable: false,
        default: '',
    })
    password: string;
}