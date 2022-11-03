import { VISUAL_LANDING_DATA } from "../../../classes/typings/ob-node-types";
import { ACCURATE_VISUAL_LANDING } from "../../../classes/typings/all.typings";
export declare class VisualLanding {
    private static instance;
    private projConf;
    private constructor();
    private listen;
    private isAlreadyStartLanding;
    intervals: any[];
    timeouts: any[];
    private _isAllowAction;
    private isStarted;
    private paramsAccLanding;
    private setParamsAL;
    private setAsAllowAction;
    private start;
    private sendUDP;
    private rotateCoordinates;
    private printCondition;
    private startStage1;
    private startStage2;
    private startStage3;
    private startStage4;
    private startStage4_;
    private stopVisualLanding;
    static listen: (projConf: any) => void;
    static start: (params: VISUAL_LANDING_DATA, isAlreadyStartLanding: {
        is: boolean;
    }) => void;
    static setFlag: (value: boolean) => void;
    static setParamsAL: (value: ACCURATE_VISUAL_LANDING) => void;
    static stopVisualLanding: () => void;
}
