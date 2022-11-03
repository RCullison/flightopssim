import { ASYNC_RESPONSE, AUTONOMOUS_ROUTE_PROGRESS_STATUS, MAP } from '../../../../../classes/typings/all.typings';
export declare class AlgorithmStatusManager {
    private static instance;
    algorithmStatusObj: AUTONOMOUS_ROUTE_PROGRESS_STATUS;
    private constructor();
    private sendAlgorithmStatusToOB;
    private init;
    private updateAndSendAlgorithmStatusToOB_Interval;
    private updateAndSendAlgorithmStatusToOB;
    private sendDataToOnBoard;
    private updateAlgorithmStatus;
    private updateActionPointsStatus;
    private updateFlightPointsStatus;
    private updateTimestamp;
    private updateTaskId;
    private updateMetadata;
    private getAlgorithmStatus;
    webSocketConfig: MAP<Function>;
    static init: () => void;
    static getAlgorithmStatus: () => AUTONOMOUS_ROUTE_PROGRESS_STATUS;
    static updateAndSendAlgorithmStatusToOB: () => ASYNC_RESPONSE;
}
