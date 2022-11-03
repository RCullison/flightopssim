import { AirVehicle } from "../../../../../classes/dataClasses/airVehicle/airVehicle";
import { MAP } from "../../../../../classes/typings/all.typings";
export declare class DroneManager {
    private static instance;
    private airVehicle;
    private constructor();
    private init;
    private initUdpListener;
    private udpCallback;
    private fillLogics;
    private updateDrone;
    private convertOnBoardDataAndUpdateDrone;
    private getAirVehicle;
    udpConfig: MAP<Function>;
    static init: () => void;
    static getDrone: () => AirVehicle;
}
