/// <reference types="node" />
import { IAlgorithm } from './IAlgorithm';
import { ALGORITHM_STATUS, ASYNC_RESPONSE, AUTONOMUS_ROUTE, CONDITION_STATUS, MAP, TASK_TYPE, WAYPOINTS_ACTION, WAYPOINTS_STATUS } from '../../../../classes/typings/all.typings';
import { ActionPoint } from '../../../../classes/dataClasses/security/actionPoint';
import { IAction } from './actionUtils/iAction';
export declare class AutomonousRouteAlgorithm implements IAlgorithm {
    taskType: TASK_TYPE;
    taskStatus: ALGORITHM_STATUS;
    actionStatus: CONDITION_STATUS;
    vehicleAction: WAYPOINTS_ACTION;
    actionPoints: ActionPoint[];
    lastActionPoint: ActionPoint;
    wayPointsStatus: WAYPOINTS_STATUS;
    routeData: AUTONOMUS_ROUTE;
    actualActionPoint: {
        index: number;
        actionPoint: ActionPoint;
    };
    interval: NodeJS.Timeout;
    onMissionInterval: NodeJS.Timeout;
    isAllPointsReached: boolean;
    actionLogicConfig: MAP<IAction>;
    constructor();
    pause: () => Promise<ASYNC_RESPONSE>;
    resume: () => Promise<ASYNC_RESPONSE>;
    start: () => Promise<ASYNC_RESPONSE>;
    stop: () => Promise<ASYNC_RESPONSE>;
    setParameters: (data: AUTONOMUS_ROUTE) => boolean;
    private pauseProcess;
    private resumeProcess;
    private routeAlgorithm;
    private changeStatus;
    private checkIfToSetOnMission;
    private clearInterval;
    private checkIfToSetObservation;
    private checkIfAllActionsDone;
    private checkIfNeedToDoAction;
    private startAction;
    private endAction;
    private changeMissionStatus;
    private checkIfToNeedUpdateActualActionPoint;
    private checkLastPointReached;
    private checkIsRouteFinished;
    private log;
}
