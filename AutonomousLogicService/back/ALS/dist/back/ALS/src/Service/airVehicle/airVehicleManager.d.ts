import { AirVehicle } from '../../../../../classes/dataClasses/drone/AirVehicle';
import { TELEMETRY_SERVICE_DATA } from '../../../../../classes/typings/ob-node-types';
import { MAP, GEOPOINT, ASYNC_RESPONSE, GO_TO_HEIGHT_REQUEST, LAND_REQUEST, TAKEOFF_REQUEST } from '../../../../../classes/typings/all.typings';
export declare class AirVehicleManager {
    private static instance;
    private airVehicle;
    stuckLocation: boolean;
    telemetryAdaptedToFCS: TELEMETRY_SERVICE_DATA;
    private constructor();
    private initUdpListener;
    private udpCallback;
    private fillLogics;
    private updateDrone;
    private convertOnBoardDataAndUpdateDrone;
    private getAirVehicle;
    private getWayPointsStatus;
    private getAirVehicle_TELEMETRY_SERVICE_DATA;
    private getLocation;
    private getVelocityScalar;
    private getAltitude;
    private pause2Controller;
    private resume2Controller;
    private stop2Controller;
    private go2height;
    private stopGo2height;
    private land;
    private landOnMission;
    private takeOff;
    private takeOffOnMission;
    static getAirVehicle: () => AirVehicle;
    static getWayPointsStatus: () => {
        status: number;
    };
    static getAirVehicle_TELEMETRY_SERVICE_DATA: () => any;
    static getLocation: () => GEOPOINT;
    static getVelocityScalar: () => number;
    static getAltitude: () => number;
    static pause2Controller: (data: {
        stuck: boolean;
    }) => Promise<ASYNC_RESPONSE>;
    static resume2Controller: (data: {
        stuck: boolean;
    }) => Promise<ASYNC_RESPONSE>;
    static stop2Controller: (data: {
        stuck: boolean;
    }) => Promise<ASYNC_RESPONSE>;
    static go2height: (data: GO_TO_HEIGHT_REQUEST) => Promise<ASYNC_RESPONSE>;
    static stopGo2height: (data: MAP) => Promise<ASYNC_RESPONSE>;
    static land: (data: LAND_REQUEST) => Promise<ASYNC_RESPONSE>;
    static landOnMission: (data: LAND_REQUEST) => Promise<ASYNC_RESPONSE>;
    static takeOff: (data: TAKEOFF_REQUEST) => Promise<ASYNC_RESPONSE>;
    static takeOffOnMission: (data: TAKEOFF_REQUEST) => Promise<ASYNC_RESPONSE>;
}
