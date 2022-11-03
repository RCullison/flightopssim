import { ASYNC_RESPONSE, AUTONOMUS_ROUTE, AUTONOMUS_ROUTE_ACTION, MAP, WAYPOINT_ACTION } from '../../../../classes/typings/all.typings';
import { IAlgorithm } from "../algorithms/IAlgorithm";
import { MISSION_ACTION_FOR_DRONESERVICE } from "../../../../classes/typings/all.typings";
export declare class AlgorithmManager {
    private static instance;
    missionTypesLogicConfig: MAP<IAlgorithm>;
    currentAlgorithm: IAlgorithm;
    private addTask;
    private startTask;
    private stopTask;
    private pauseTask;
    private resumeTask;
    private autonomousRouteAction;
    private taskAction;
    private sendTaskToCS;
    private updateParameters;
    private checkIfNeedToStop;
    private resDataFromCas2ALS;
    static addTask: (task: AUTONOMUS_ROUTE) => Promise<ASYNC_RESPONSE>;
    static startTask: (action: WAYPOINT_ACTION) => Promise<ASYNC_RESPONSE>;
    static stopTask: (action: WAYPOINT_ACTION) => Promise<ASYNC_RESPONSE>;
    static pauseTask: () => Promise<ASYNC_RESPONSE>;
    static resumeTask: () => Promise<ASYNC_RESPONSE>;
    static autonomousRouteAction: (action: AUTONOMUS_ROUTE_ACTION) => Promise<ASYNC_RESPONSE>;
    static taskAction: (action: MISSION_ACTION_FOR_DRONESERVICE) => Promise<ASYNC_RESPONSE>;
    static sendTaskToCS: () => Promise<ASYNC_RESPONSE>;
    static updateParameters: (requestData: MAP<number>) => Promise<ASYNC_RESPONSE>;
    static resDataFromCas2ALS: (resData: any) => Promise<ASYNC_RESPONSE>;
}
