import { ALGORITHM_STATUS, GEOJSON_POINT, MAPI_MISSION_DATA, POINT_TASK_FOR_UI, TASK, TASK_TYPE } from '../../typings/all.typings';
import { ITask } from './iTask';
export declare class PointTask implements ITask {
    taskId?: string;
    status: ALGORITHM_STATUS;
    azimuthToPoint: boolean;
    viewingAngle: number;
    name: string;
    minDistanceToViewPoint: number;
    point: GEOJSON_POINT;
    hoverPoint: GEOJSON_POINT;
    isNoGPS: boolean;
    type: TASK_TYPE;
    styles: {};
    totalRoutLength: number;
    metadata: {};
    createConfig: {
        taskId: string;
        point: string;
        hoverPoint: string;
        azimuthToPoint: string;
        viewingAngle: string;
        type: string;
        name: string;
        minDistanceToViewPoint: string;
        status: string;
        isNoGPS: string;
        totalRoutLength: string;
        styles: string;
        metadata: string;
    };
    constructor(data: TASK);
    update: (data: Object, config?: {}) => POINT_TASK_FOR_UI;
    toJsonForUI: () => POINT_TASK_FOR_UI;
    toJsonForMAPI(): MAPI_MISSION_DATA;
}
