/// <reference types="node" />
import { ALGORITHM_STATUS, AUTONOMOUS_POINT_STATUS, TASK_TYPE, UPDATE_CONDITION_ACTION_STATUS_DATA_POINT_ID, WAYPOINTS_STATUS } from '../../../../../classes/typings/all.typings';
import { IAlgorithm } from './IAlgorithm';
import { ASYNC_RESPONSE } from '../../../../../classes/typings/all.typings';
import { ROUTE_DATA_FOR_ONBOARD } from '../../../../../classes/typings/all.typings';
export declare class ForceRouteAlgorithm implements IAlgorithm {
    taskType: TASK_TYPE;
    taskStatus: ALGORITHM_STATUS;
    taskData: ROUTE_DATA_FOR_ONBOARD;
    wayPointsStatus: WAYPOINTS_STATUS;
    interval: NodeJS.Timeout;
    isAllPointsReached: boolean;
    constructor();
    pause: () => Promise<ASYNC_RESPONSE>;
    resume: () => Promise<ASYNC_RESPONSE>;
    start: () => Promise<ASYNC_RESPONSE>;
    stop: () => Promise<ASYNC_RESPONSE>;
    setParameters: (data: ROUTE_DATA_FOR_ONBOARD) => ASYNC_RESPONSE<{
        flightId: string;
    }>;
    getAlgorithmStatus: () => ALGORITHM_STATUS;
    getActionPointsStatus: () => AUTONOMOUS_POINT_STATUS[];
    setActionPointsStatus: (updateData: UPDATE_CONDITION_ACTION_STATUS_DATA_POINT_ID) => any;
    private routeAlgorithm;
    private changeStatus;
    private checkIfToSetOnMission;
    private checkIfToSetObservation;
    private changeMissionStatus;
    private checkLastPointReached;
    checkIsRouteFinished: () => boolean;
    checkIfAllActionsDone: () => boolean;
    private log;
    getAlgorithmData: () => void;
}
