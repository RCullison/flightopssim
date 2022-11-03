import { ACCURATE_POSITION_MAX_TOLERANCE_HORIZONTAL_SPEED, ACCURATE_VISUAL_LANDING } from "../../../classes/typings/all.typings";
export declare class AccurateLanding {
    private static instance;
    isAlreadyStartLanding: {
        is: boolean;
    };
    projConf: any;
    vx: number;
    vy: number;
    vz: number;
    intervals: any[];
    timeouts: any[];
    private constructor();
    private listen;
    lastStartedAccurate: number;
    private start;
    private stopAccurateLand;
    private startLanding;
    private reqToVLServiceAndStartLand;
    private accurateToPoint;
    static accurateToPoint: (intervalStart: any, params: ACCURATE_POSITION_MAX_TOLERANCE_HORIZONTAL_SPEED, cb: Function) => void;
    static listen: (projConf: any) => void;
    static start: (params: ACCURATE_VISUAL_LANDING, isAlreadyStartLanding: {
        is: boolean;
    }) => void;
    static stopAccurateLand: () => void;
    static reqToVLServiceAndStartLand: (params: ACCURATE_VISUAL_LANDING) => void;
}
