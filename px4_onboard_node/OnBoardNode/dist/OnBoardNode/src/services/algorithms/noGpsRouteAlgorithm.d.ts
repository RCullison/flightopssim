/// <reference types="node" />
import { IAlgorithm } from './IAlgorithm';
import { ALGORITHM_STATUS, ASYNC_RESPONSE, TASK_TYPE, WAYPOINTS_STATUS, ROUTE_DATA_FOR_ONBOARD } from '../../../../classes/typings/all.typings';
export declare class NoGpsRouteAlgorithm implements IAlgorithm {
    taskType: TASK_TYPE;
    taskStatus: ALGORITHM_STATUS;
    routeData: ROUTE_DATA_FOR_ONBOARD;
    wayPointsStatus: WAYPOINTS_STATUS;
    interval: NodeJS.Timeout;
    isAllPointsReached: boolean;
    constructor();
    pause: () => Promise<ASYNC_RESPONSE>;
    resume: () => Promise<ASYNC_RESPONSE>;
    start: () => Promise<ASYNC_RESPONSE>;
    stop: () => Promise<ASYNC_RESPONSE>;
    setParameters: (data: ROUTE_DATA_FOR_ONBOARD) => boolean;
    private routeAlgorithm;
    private changeStatus;
    private checkIfToSetOnMission;
    private checkIfToSetObservation;
    private changeMissionStatus;
    private checkLastPointReached;
    private checkIsRouteFinished;
    private log;
}
