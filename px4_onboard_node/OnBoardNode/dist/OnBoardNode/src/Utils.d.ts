import { ASYNC_RESPONSE, POINT, POINT3D, GEOPOINT3D, GEOPOINT3D_SHORT } from "./../../classes/typings/all.typings";
import { FLIGHT_MODE_ARDUPILOT, FLIGHT_MODE_PX4 } from "./../../classes/typings/ob-node-types";
export declare class Utils {
    private static projConf;
    static updateProjConf: (projConf_: any) => void;
    static waitForState: (mode: FLIGHT_MODE_PX4 | FLIGHT_MODE_ARDUPILOT, maxWaitingTimeSeconds?: number) => Promise<ASYNC_RESPONSE>;
    static GeoPoint3dLong2Short: (point: GEOPOINT3D) => GEOPOINT3D_SHORT;
    static getDistanceInMeter: (currObservationPoint: POINT | POINT3D, targetPosition: POINT | POINT3D) => number;
    static pyphagor: (x: number, y: number) => number;
    static save2File: (pathFile: any, data: any) => void;
    static readJsonFile: (pathFile: any) => Promise<unknown>;
    static send_handler2RequestService: (routeName: string, data: any, cb: Function, allowSend?: boolean) => void;
    static myDate: (d: any) => string;
}
