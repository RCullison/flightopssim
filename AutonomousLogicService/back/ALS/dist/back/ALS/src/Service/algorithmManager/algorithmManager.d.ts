import { ASYNC_RESPONSE, AUTONOMUS_ROUTE, AUTONOMUS_ROUTE_ACTION, MAP, WAYPOINT_ACTION, MISSION_ACTION_FOR_DRONESERVICE, ALGORITHM_STATUS, AUTONOMOUS_POINT_STATUS, AUTONOMOUS_TASK_METADATA, UPDATE_CONDITION_ACTION_STATUS_DATA_POINT_ID } from '../../../../../classes/typings/all.typings';
import { IAlgorithm } from '../algorithms/IAlgorithm';
export declare class AlgorithmManager {
    private static instance;
    missionTypesLogicConfig: MAP<IAlgorithm>;
    private currentAlgorithm;
    private currentTask;
    private uploadTask;
    private uploadTaskAndStart;
    private startTask;
    private stopTask;
    private pauseTask;
    private resumeTask;
    private autonomousRouteAction;
    private taskAction;
    private sendTaskToCS;
    private updateParameters;
    private checkIfNeedToStop;
    private getAlgorithmStatus;
    private getActionPointsStatus;
    private setActionPointsStatus;
    private checkIfAllActionsDone;
    private checkIsRouteFinished;
    private getAlgorithmTaskId;
    private getMetadata;
    private getAlgorithmData;
    private getCurrentTask;
    static uploadTask: (task: AUTONOMUS_ROUTE) => Promise<ASYNC_RESPONSE>;
    static startTask: (action: WAYPOINT_ACTION) => ASYNC_RESPONSE;
    static stopTask: (action: WAYPOINT_ACTION) => Promise<ASYNC_RESPONSE>;
    static pauseTask: () => ASYNC_RESPONSE;
    static resumeTask: () => ASYNC_RESPONSE;
    static autonomousRouteAction: (action: AUTONOMUS_ROUTE_ACTION) => Promise<ASYNC_RESPONSE>;
    static taskAction: (action: MISSION_ACTION_FOR_DRONESERVICE) => Promise<ASYNC_RESPONSE>;
    static sendTaskToCS: () => Promise<ASYNC_RESPONSE>;
    static updateParameters: (requestData: MAP<number>) => Promise<ASYNC_RESPONSE>;
    static uploadTaskAndStart: (task: AUTONOMUS_ROUTE) => Promise<ASYNC_RESPONSE>;
    static getAlgorithmStatus: () => ALGORITHM_STATUS;
    static getActionPointsStatus: () => AUTONOMOUS_POINT_STATUS[];
    static setActionPointsStatus: (updateData: UPDATE_CONDITION_ACTION_STATUS_DATA_POINT_ID) => AUTONOMOUS_POINT_STATUS[];
    static checkIfAllActionsDone: () => boolean;
    static checkIsRouteFinished: () => boolean;
    static getAlgorithmTaskId: () => string;
    static getMetadata: () => AUTONOMOUS_TASK_METADATA;
    static getAlgorithmData: () => ASYNC_RESPONSE;
    static getCurrentTask: () => AUTONOMUS_ROUTE;
}
