import { AirVehicle } from '../dataClasses/airVehicle/airVehicle';
export declare class EnergyBarSimulator {
    constructor();
    private static changeEnergyTime;
    private static changeEnergyBar;
    static changeEnergy: (drone: AirVehicle) => AirVehicle;
}
