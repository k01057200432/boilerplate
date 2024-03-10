import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number | undefined

    @Column()
    firstName!: string

    @Column()
    lastName!: string

    @Column()
    age!: number
}