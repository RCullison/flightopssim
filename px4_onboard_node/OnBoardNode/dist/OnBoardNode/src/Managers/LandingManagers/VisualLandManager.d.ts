import { ACCURATE_VISUAL_LANDING, VISUAL_LAND_OBJ } from "../../../../classes/typings/all.typings";
export declare class VisualLandManager {
    private static instance;
    private configServices;
    private params;
    private visualLandingObj;
    private isBeginTimeoutCounter;
    private isStartGeneralTimeOut;
    private init;
    private setCurentParam;
    private updateStatus;
    private StatusAccurateIRLock;
    private startGeneralTimeOut;
    private startLanding;
    private stopLanding;
    private socketConfig;
    static init: (services: any) => void;
    static startLanding: (visualLandingObj: VISUAL_LAND_OBJ) => void;
    static stopLanding: () => void;
    static setCurentParam: (params: ACCURATE_VISUAL_LANDING, visualLandingObj: VISUAL_LAND_OBJ) => void;
}
