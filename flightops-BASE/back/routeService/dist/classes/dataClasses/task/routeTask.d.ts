import { ALGORITHM_STATUS, MAPI_MISSION_DATA, ROUTE_POINT_DATA_DRONESERVICE, TASK, TASK_TYPE } from '../../typings/all.typings';
import { ITask } from './iTask';
export declare class RouteTask implements ITask {
    taskId?: string;
    routeId?: string;
    name: string;
    status: ALGORITHM_STATUS;
    totalValue: number;
    type: TASK_TYPE;
    isNoGPS: boolean;
    styles: {};
    sensorType: string;
    totalRoutLength: number;
    metadata: {};
    constructor(data: TASK);
    saveConfig: {
        taskId: string;
        routeId: string;
        name: string;
        status: string;
        totalValue: string;
        type: string;
        isNoGPS: string;
        sensorType: string;
        totalRoutLength: string;
        styles: string;
        metadata: string;
    };
    update: (data: Object) => {
        taskId: string;
        routeId: string;
        name: string;
        status: ALGORITHM_STATUS;
        totalValue: number;
        type: TASK_TYPE;
        isNoGPS: boolean;
        sensorType: string;
        totalRoutLength: number;
        styles: {};
    };
    toJsonForUI: () => {
        taskId: string;
        routeId: string;
        name: string;
        status: ALGORITHM_STATUS;
        totalValue: number;
        type: TASK_TYPE;
        isNoGPS: boolean;
        sensorType: string;
        totalRoutLength: number;
        styles: {};
    };
    toJsonForSave: () => {
        taskId: string;
        routeId: string;
        name: string;
        type: TASK_TYPE;
        isNoGPS: boolean;
        sensorType: string;
    };
    toJsonForDroneService: () => ROUTE_POINT_DATA_DRONESERVICE;
    toJsonForMAPI(): MAPI_MISSION_DATA;
}
