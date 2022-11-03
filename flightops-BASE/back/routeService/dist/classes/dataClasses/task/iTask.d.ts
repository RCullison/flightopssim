import { ALGORITHM_STATUS, GEOJSON_POINT, MAPI_MISSION_DATA, TASK_TYPE } from '../../typings/all.typings';
export interface ITask {
    taskId?: string;
    isAGL?: boolean;
    status: ALGORITHM_STATUS;
    type: TASK_TYPE;
    routeId?: string;
    point?: GEOJSON_POINT;
    name: string;
    sensorType?: string;
    waspAzimuth?: number;
    totalRoutLength: number;
    isNoGPS: boolean;
    update(data: Object): any;
    toJsonForUI(): any;
    toJsonForSave?(): any;
    metadata: any;
    toJsonForMAPI?(): MAPI_MISSION_DATA;
    pilotId?: string;
    prevAirVehicleId?: string;
}
