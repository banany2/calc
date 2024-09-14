import { Controller, Get, Query } from '@nestjs/common';
import { CalculatorService } from './calculator.service';

@Controller('calculator')
export class CalculatorController {
    constructor(private readonly calculatorService: CalculatorService) {}

    @Get('add')
    add(@Query('a') a: string, @Query('b') b: string) {
        return this.calculatorService.add(+a, +b);
    }

    @Get('subtract')
    subtract(@Query('a') a: string, @Query('b') b: string) {
        return this.calculatorService.subtract(+a, +b);
    }

    @Get('multiply')
    multiply(@Query('a') a: string, @Query('b') b: string) {
        return this.calculatorService.multiply(+a, +b);
    }

    @Get('divide')
    divide(@Query('a') a: string, @Query('b') b: string) {
        return this.calculatorService.divide(+a, +b);
    }
}