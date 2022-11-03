import { AUTONOMOUS_ROUTE_PROGRESS_STATUS, MAP } from "../../../../classes/typings/all.typings";
export declare class AlgorithmStatusManager {
    private static instance;
    algorithmStatus: AUTONOMOUS_ROUTE_PROGRESS_STATUS;
    constructor();
    private startGetAlgorithmStatus;
    private updateAlgorithmStatus;
    private getAlgorithmStatus;
    webSocketConfig: MAP<Function>;
    static getAlgorithmStatus: () => AUTONOMOUS_ROUTE_PROGRESS_STATUS;
}
