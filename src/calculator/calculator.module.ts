import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CalculatorService } from './calculator.service';
import { CalculatorController } from './calculator.controller';
import { Operation } from './entities/operation/operation.entity'; // Импорт сущности

@Module({
  imports: [TypeOrmModule.forFeature([Operation])], // Подключение сущности
  providers: [CalculatorService],
  controllers: [CalculatorController],
})
export class CalculatorModule {}