import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Movie {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: String

    @Column('int', { default: 60})
    length: number
}