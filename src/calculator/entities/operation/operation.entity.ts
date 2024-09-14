import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Operation {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    operationType: string;

    @Column('float')
    operandA: number;

    @Column('float')
    operandB: number;

    @Column('float')
    result: number;
}