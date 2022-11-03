import { ALGORITHM_STATUS, GEOJSON_POINT, MAPI_MISSION_DATA, POINT, ROUTE_POINT_DATA_DRONESERVICE, TASK, TASK_TYPE } from '../../typings/all.typings';
import { ITask } from './iTask';
export declare class WaspTask implements ITask {
    taskId?: string;
    name: string;
    status: ALGORITHM_STATUS;
    type: TASK_TYPE;
    point: GEOJSON_POINT;
    waspAzimuth: number;
    waspRectangleSize: number;
    waspRectangleSemiDiagonalSize: number;
    isNoGPS: boolean;
    styles: {};
    totalRoutLength: number;
    metadata: {};
    constructor(data: TASK, _waspRectangleSize?: {
        waspRectangleSize: number;
    });
    saveConfig: {
        taskId: string;
        name: string;
        status: string;
        type: string;
        point: string;
        waspAzimuth: string;
        isNoGPS: string;
        totalRoutLength: string;
        styles: string;
        metadata: string;
    };
    update: (data: Object) => {
        taskId: string;
        name: string;
        status: ALGORITHM_STATUS;
        type: TASK_TYPE;
        point: GEOJSON_POINT;
        waspAzimuth: number;
        isNoGPS: boolean;
        finishShowParameters: {
            waspPolygon: {
                pointsArray: POINT[];
                arrow: POINT[];
            };
        };
        totalRoutLength: number;
        styles: {};
    };
    private buildFinishShowParameters;
    private buildRectangle;
    private buildArrow;
    private fixAngle;
    toJsonForSave: () => {
        taskId: string;
        status: ALGORITHM_STATUS;
        name: string;
        type: TASK_TYPE;
        point: GEOJSON_POINT;
        waspAzimuth: number;
        isNoGPS: boolean;
    };
    toJsonForDroneService: () => ROUTE_POINT_DATA_DRONESERVICE;
    toJsonForUI: () => {
        taskId: string;
        name: string;
        status: ALGORITHM_STATUS;
        type: TASK_TYPE;
        point: GEOJSON_POINT;
        waspAzimuth: number;
        isNoGPS: boolean;
        finishShowParameters: {
            waspPolygon: {
                pointsArray: POINT[];
                arrow: POINT[];
            };
        };
        totalRoutLength: number;
        styles: {};
    };
    toJsonForMAPI(): MAPI_MISSION_DATA;
}
