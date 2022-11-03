import { ALGORITHM_STATUS, GEOJSON_POINT, MAPI_MISSION_DATA, POINT3D, RANGE, SHIP_WITHOUT_LANDING_TASK_DATA, TASK_TYPE } from '../../typings/all.typings';
import { ITask } from './iTask';
export declare class ShipWithoutLandingTask implements ITask {
    taskId?: string;
    name: string;
    status: ALGORITHM_STATUS;
    type: TASK_TYPE;
    point: GEOJSON_POINT;
    isAGL: boolean;
    altitudeRange: RANGE;
    ASL_Max: number;
    slope: RANGE;
    isNoGPS: boolean;
    styles: {};
    totalRoutLength: number;
    metadata: {};
    pilotId: string;
    prevAirVehicleId: string;
    creationTime: number;
    containerHeight: number;
    heightAboveContainerForDrop: number;
    forceByRoute: POINT3D[];
    constructor(data: SHIP_WITHOUT_LANDING_TASK_DATA);
    saveConfig: {
        taskId: string;
        name: string;
        status: string;
        type: string;
        point: string;
        isAGL: string;
        altitudeRange: string;
        ASL_Max: string;
        slope: string;
        isNoGPS: string;
        totalRoutLength: string;
        styles: string;
        metadata: string;
        creationTime: string;
        containerHeight: string;
        heightAboveContainerForDrop: string;
        forceByRoute: string;
    };
    update: (data: Object) => {
        taskId: string;
        status: ALGORITHM_STATUS;
        name: string;
        type: TASK_TYPE;
        Point: GEOJSON_POINT;
        isAGL: boolean;
        altitudeRange: RANGE;
        ASL_Max: number;
        slope: RANGE;
        isNoGPS: boolean;
        totalRoutLength: number;
        styles: {};
        containerHeight: number;
        heightAboveContainerForDrop: number;
        forceByRoute: POINT3D[];
    };
    private buildArrow;
    toJsonForSave: () => {
        taskId: string;
        status: ALGORITHM_STATUS;
        name: string;
        type: TASK_TYPE;
        point: GEOJSON_POINT;
        isAGL: boolean;
        altitudeRange: RANGE;
        ASL_Max: number;
        slope: RANGE;
        isNoGPS: boolean;
        creationTime: number;
        containerHeight: number;
        heightAboveContainerForDrop: number;
        forceByRoute: POINT3D[];
    };
    toJsonForUI: () => {
        taskId: string;
        status: ALGORITHM_STATUS;
        name: string;
        type: TASK_TYPE;
        Point: GEOJSON_POINT;
        isAGL: boolean;
        altitudeRange: RANGE;
        ASL_Max: number;
        slope: RANGE;
        isNoGPS: boolean;
        totalRoutLength: number;
        styles: {};
        containerHeight: number;
        heightAboveContainerForDrop: number;
        forceByRoute: POINT3D[];
    };
    toJsonForMAPI(): MAPI_MISSION_DATA;
}
