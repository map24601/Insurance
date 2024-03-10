import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: true })
    clientName: string

    @Column({ nullable: true })
    age: number

    @Column({ nullable: true })
    carModel: string

    @Column({ nullable: true })
    yearsOfExperience: number

}
