import { MAP } from "../../../../../classes/typings/all.typings";
export declare class GimbalActionLogic {
    constructor();
    private startScan;
    private startStow;
    private startMove;
    private stopScan;
    private stopStow;
    private stopMove;
    actionConfig: MAP<{
        start: Function;
        stop: Function;
    }>;
    private log;
}
