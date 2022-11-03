import { ALGORITHM_STATUS, DYNAMIC_POINT_TASK_FOR_UI, GEOJSON_POINT, MAPI_MISSION_DATA, TASK, TASK_TYPE } from '../../typings/all.typings';
import { ITask } from './iTask';
export declare class DynamicPointTask implements ITask {
    taskId?: string;
    status: ALGORITHM_STATUS;
    name: string;
    distanceToDynamicPoint: number;
    point: GEOJSON_POINT;
    hoverPoint: GEOJSON_POINT;
    type: TASK_TYPE;
    sensorId: string;
    detectionId: string;
    isNoGPS: boolean;
    totalRoutLength: number;
    styles: {};
    metadata: {};
    createConfig: {
        sensorId: string;
        detectionId: string;
        taskId: string;
        point: string;
        hoverPoint: string;
        azimuthToPoint: string;
        viewingAngle: string;
        type: string;
        name: string;
        distanceToDynamicPoint: string;
        status: string;
        isNoGPS: string;
        totalRoutLength: string;
        styles: string;
        metadata: string;
    };
    constructor(data: TASK);
    update: (data: Object, config?: {}) => DYNAMIC_POINT_TASK_FOR_UI;
    toJsonForUI: () => DYNAMIC_POINT_TASK_FOR_UI;
    toJsonForMAPI(): MAPI_MISSION_DATA;
}
