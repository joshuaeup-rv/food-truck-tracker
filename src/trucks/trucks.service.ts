import { Injectable } from '@nestjs/common';
import { TruckDto } from './trucks.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TrucksService {
    private foodTruckArray: TruckDto[] = [];

    showTrucks() {
        return this.foodTruckArray;
    }

    addTruck(data: TruckDto) {
        this.foodTruckArray.push({ id: uuidv4(), ...data });
        console.log(this.foodTruckArray);
    }

    findTruck(id: string) {
        return this.foodTruckArray.find((truck) => truck.id === id);
    }

    deleteTruck(id: string) {
        const truckIndex = this.foodTruckArray.indexOf(this.findTruck(id));
        this.foodTruckArray.splice(truckIndex, 1);
    }
}
