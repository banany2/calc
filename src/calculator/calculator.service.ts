import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Operation } from './entities/operation/operation.entity';

@Injectable()
export class CalculatorService {
    constructor(
        @InjectRepository(Operation)
        private operationRepository: Repository<Operation>,
    ) {}

    async add(a: number, b: number): Promise<number> {
        const result = a + b;
        await this.saveOperation('add', a, b, result);
        return result;
    }

    async subtract(a: number, b: number): Promise<number> {
        const result = a - b;
        await this.saveOperation('subtract', a, b, result);
        return result;
    }

    async multiply(a: number, b: number): Promise<number> {
        const result = a * b;
        await this.saveOperation('multiply', a, b, result);
        return result;
    }

    async divide(a: number, b: number): Promise<number> {
        if (b === 0) {
            throw new Error('Division by zero');
        }
        const result = a / b;
        await this.saveOperation('divide', a, b, result);
        return result;
    }

    private async saveOperation(operationType: string, operandA: number, operandB: number, result: number): Promise<void> {
        const operation = new Operation();
        operation.operationType = operationType;
        operation.operandA = operandA;
        operation.operandB = operandB;
        operation.result = result;

        await this.operationRepository.save(operation);
    }
}