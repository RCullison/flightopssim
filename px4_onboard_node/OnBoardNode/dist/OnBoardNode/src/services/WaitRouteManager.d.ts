import { GEOPOINT3D_SHORT, GEOPOINT_3D_SHORT_STATUS, GEOPOINT_3D_SHORT_VELOCITY, MAP, POINT_CONDITION } from "../../../classes/typings/all.typings";
export declare class WaitRouteManager {
    private static instance;
    states: MAP<{
        [key: number]: MAP<{
            [key: number]: POINT_CONDITION;
        }>;
    }>;
    arrPoints: GEOPOINT_3D_SHORT_VELOCITY[];
    intervals: MAP<any>;
    intervalWaitingAllPoints: any;
    projConf: any;
    private constructor();
    private setProjConf;
    private getStates;
    private getArrPoints;
    private start;
    private clearWaiting;
    private startWaiting;
    private stopWaitingALL;
    private fillCurrentState;
    private getStatusPoints;
    static listen: (projConf: any) => void;
    static start: (arrPoints: GEOPOINT_3D_SHORT_VELOCITY[]) => void;
    static stop: () => void;
    static clearWaiting: () => void;
    static getStates: () => MAP<{
        [key: number]: MAP<{
            [key: number]: POINT_CONDITION;
        }>;
    }>;
    static getArrPoints: () => GEOPOINT3D_SHORT[];
    static getStatusPoints: () => GEOPOINT_3D_SHORT_STATUS[];
}
