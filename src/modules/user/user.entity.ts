import { Column, Entity } from "typeorm";

@Entity('user')
export class User{

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    phoneNumber: string;
    
}