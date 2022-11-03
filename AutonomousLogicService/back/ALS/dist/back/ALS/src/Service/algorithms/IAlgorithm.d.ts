import { ASYNC_RESPONSE, ALGORITHM_STATUS, TASK_TYPE, AUTONOMOUS_POINT_STATUS, AUTONOMUS_ROUTE, ROUTE_DATA_FOR_ONBOARD, UPDATE_CONDITION_ACTION_STATUS_DATA_POINT_ID } from '../../../../../classes/typings/all.typings';
export interface IAlgorithm {
    taskType: TASK_TYPE;
    taskStatus: ALGORITHM_STATUS;
    taskData: AUTONOMUS_ROUTE | ROUTE_DATA_FOR_ONBOARD;
    start(): Promise<ASYNC_RESPONSE>;
    stop(): Promise<ASYNC_RESPONSE>;
    pause(): Promise<ASYNC_RESPONSE>;
    resume(): Promise<ASYNC_RESPONSE>;
    setParameters(data: any): ASYNC_RESPONSE<{
        flightId: string;
    }>;
    getAlgorithmStatus(): ALGORITHM_STATUS;
    getActionPointsStatus(): AUTONOMOUS_POINT_STATUS[];
    setActionPointsStatus(updateData: UPDATE_CONDITION_ACTION_STATUS_DATA_POINT_ID): any;
    checkIsRouteFinished(): boolean;
    checkIfAllActionsDone(): boolean;
    getAlgorithmData(): any;
}
