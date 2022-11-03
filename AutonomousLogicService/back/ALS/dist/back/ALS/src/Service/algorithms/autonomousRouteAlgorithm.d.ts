/// <reference types="node" />
import { ActionPoint } from '../../../../../classes/dataClasses/security/actionPoint';
import { ALGORITHM_STATUS, ASYNC_RESPONSE, AUTONOMOUS_POINT_STATUS, AUTONOMUS_ROUTE, CONDITION_STATUS, MAP, TASK_TYPE, UPDATE_CONDITION_ACTION_STATUS_DATA_POINT_ID, WAYPOINTS_ACTION, WAYPOINTS_STATUS } from '../../../../../classes/typings/all.typings';
import { IAction } from './actionUtils/iAction';
import { IAlgorithm } from './IAlgorithm';
export declare class AutonomousRouteAlgorithm implements IAlgorithm {
    taskType: TASK_TYPE;
    taskStatus: ALGORITHM_STATUS;
    actionStatus: CONDITION_STATUS;
    vehicleAction: WAYPOINTS_ACTION;
    actionPoints: ActionPoint[];
    lastActionPoint: ActionPoint;
    wayPointsStatus: WAYPOINTS_STATUS;
    taskData: AUTONOMUS_ROUTE;
    actualActionPoint: {
        index: number;
        actionPoint: ActionPoint;
    };
    interval: NodeJS.Timeout;
    isAllPointsReached: boolean;
    actionLogicConfig: MAP<IAction>;
    checkConditionsProcess: boolean;
    actionPointsStatuses: AUTONOMOUS_POINT_STATUS[];
    constructor();
    pause: () => Promise<ASYNC_RESPONSE>;
    resume: () => Promise<ASYNC_RESPONSE>;
    start: () => Promise<ASYNC_RESPONSE>;
    stop: (isChangeToFinished?: boolean) => Promise<ASYNC_RESPONSE>;
    setParameters: (data: AUTONOMUS_ROUTE) => ASYNC_RESPONSE<AUTONOMUS_ROUTE>;
    getAlgorithmStatus: () => ALGORITHM_STATUS;
    getActionPointsStatus: () => AUTONOMOUS_POINT_STATUS[];
    setActionPointsStatus: (updateData: UPDATE_CONDITION_ACTION_STATUS_DATA_POINT_ID) => void;
    checkIfAllActionsDone: () => boolean;
    checkIsRouteFinished: () => boolean;
    private checkIfNeedToStopAction;
    private pauseProcess;
    private resumeProcess;
    private startRouteAlgorithm;
    private checkIfNeedUpdateActualActionPoint;
    private checkIfToStartCheckConditions;
    private checkIfToUploadWayPoints;
    private checkIfToStartWayPoints;
    private checkIfToSetObservation;
    private checkIfNeedToDoAction;
    private startAction;
    private endAction;
    private callErrorAction;
    private changeMissionStatus;
    private checkIfToNeedUpdateActualActionPoint;
    private fillActionPointsStatuses;
    private updateActionPointsStatuses;
    private updateActionPointsStatusesByPointId;
    private findPointStatusByPointId;
    private findPointActionStatusByPointIdActionId;
    private log;
    getAlgorithmData: () => {
        taskData: AUTONOMUS_ROUTE;
        actionPoints: ActionPoint[];
        actualActionPoint: {
            index: number;
            actionPoint: ActionPoint;
        };
        actionPointsStatuses: AUTONOMOUS_POINT_STATUS[];
    };
}
