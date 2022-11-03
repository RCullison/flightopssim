import { POINT3D } from '../typings/class.typings';
import { AirVehicle } from '../dataClasses/airVehicle/airVehicle';
export declare class LocationSimulator {
    constructor();
    static changeLocation: (drone: AirVehicle) => AirVehicle;
    static calculateHeading(positionBefore: POINT3D, positionAfter: POINT3D): number;
}
