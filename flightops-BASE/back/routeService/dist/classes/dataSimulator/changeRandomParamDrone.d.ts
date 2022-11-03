import { AirVehicle } from '../dataClasses/airVehicle/airVehicle';
export declare class RandomParamDrone {
    private static interval;
    constructor();
    static generateID: () => string;
    static generateInt: (min: number, max: number) => number;
    static generateFloat: (min: number, max: number) => number;
    static generateBool: () => boolean;
    static generateFromEnum: (arr: any) => any;
    static changeRandomParamDrone(drone: AirVehicle, modes: any, statuses: any, droneIconColors: any, energyColors: any, statusColors: any, circleColor: any): AirVehicle;
}
