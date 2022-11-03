import { ASYNC_RESPONSE, CARTESIAN2, MAP, SEND_STATUS } from "../../../../classes/typings/all.typings";
export declare class MoveXYManager {
    private static instance;
    projConf: any;
    moveServiceStatus: SEND_STATUS;
    private constructor();
    private setProjConf;
    private moveXY;
    private stopMoveXY;
    private moveToLocation;
    private rotateAirVehicle;
    private stopMoveToLocation;
    private stopRotateAirVehicle;
    private stopAllMoveXY;
    private updatemoveServiceStatus;
    private getmoveServiceStatus;
    webSocketConfig: MAP<Function>;
    static setProjConf: (projConf: any) => void;
    static moveXY: (bodyObj: CARTESIAN2) => Promise<ASYNC_RESPONSE>;
    static stopMoveXY: () => Promise<ASYNC_RESPONSE>;
    static moveToLocation: (bodyObj: any) => Promise<ASYNC_RESPONSE>;
    static rotateAirVehicle: (bodyObj: any) => Promise<ASYNC_RESPONSE>;
    static stopMoveToLocation: (bodyObj: any) => Promise<ASYNC_RESPONSE>;
    static stopRotateAirVehicle: (bodyObj: any) => Promise<ASYNC_RESPONSE>;
    static stopAllMoveXY: (bodyObj: any) => Promise<ASYNC_RESPONSE>;
    static getmoveServiceStatuselem: () => SEND_STATUS;
}
