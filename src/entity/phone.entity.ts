import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity.js";

@Entity()
export class Phone {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar")
    number: string;

    @OneToOne(() => User)
    @JoinColumn()
    user: User;
}
