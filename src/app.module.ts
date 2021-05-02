import { Module } from '@nestjs/common';
import { TrucksController } from './trucks/trucks.controller';
import { TrucksService } from './trucks/trucks.service';

@Module({
    imports: [],
    controllers: [TrucksController],
    providers: [TrucksService],
})
export class AppModule {}
