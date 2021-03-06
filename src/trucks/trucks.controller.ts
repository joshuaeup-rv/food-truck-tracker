import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TrucksService } from './trucks.service';
import { TruckDto } from './trucks.dto';

@Controller('trucks')
export class TrucksController {
    constructor(private readonly truckService: TrucksService) {}

    @Get()
    showTrucks(): TruckDto[] {
        return this.truckService.showTrucks();
    }

    @Get(':id')
    findTruck(@Param() params) {
        return this.truckService.findTruck(params.id);
    }

    @Post('new-truck')
    addTruck(@Body() truckDto: TruckDto) {
        this.truckService.addTruck(truckDto);
    }

    @Delete(':id')
    deleteTruck(@Param() params) {
        return this.truckService.deleteTruck(params.id);
    }
}
