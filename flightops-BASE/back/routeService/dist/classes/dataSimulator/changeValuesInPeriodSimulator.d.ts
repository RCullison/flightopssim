import { AirVehicle } from "../dataClasses/airVehicle/airVehicle";
export declare class ChangeValuesInPeriodSimulator {
    private static interval;
    constructor();
    static change(drone: AirVehicle, path: string, min: number, max: number): AirVehicle;
}
