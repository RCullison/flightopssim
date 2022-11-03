import { LIDAR_HEIGHT_DATA } from "../../../../classes/typings/all.typings";
export declare class LidarManager {
    private static instance;
    private init;
    private heightAboveCurrentPoint;
    private lastUpdateTime;
    private timeOut;
    private updateHeightAboveCurrentPoint;
    private getHeightAboveCurrentPoint;
    private socketConfig;
    static init: () => void;
    static getHeightAboveCurrentPoint: () => LIDAR_HEIGHT_DATA;
}
