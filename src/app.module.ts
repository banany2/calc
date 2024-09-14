import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CalculatorModule } from './calculator/calculator.module';
import { Operation } from './calculator/entities/operation/operation.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Опционально: делает переменные окружения глобально доступными
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT, 10),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [Operation],
      synchronize: true,
    }),
    CalculatorModule,
  ],
})
export class AppModule {}