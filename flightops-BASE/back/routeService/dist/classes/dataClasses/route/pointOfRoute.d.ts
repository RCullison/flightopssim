import { POINT, POINT3D, POINT_FOR_APPROVAL, ROUTE_POINT_DATA, ROUTE_POINT_DATA_DRONESERVICE, ROUTE_POINT_DATA_UI } from '../../typings/all.typings';
export declare class PointOfRoute {
    static config: {
        longitude: {
            type: string;
            objType: string;
            default: number;
            required: boolean;
            min: number;
        };
        latitude: {
            type: string;
            objType: string;
            default: number;
            required: boolean;
            min: number;
        };
        altitude: {
            type: string;
            objType: string;
            default: number;
            required: boolean;
            min: number;
        };
        velocity: {
            type: string;
            objType: string;
            default: any;
            required: boolean;
            min: number;
        };
        yaw: {
            type: string;
            objType: string;
            default: number;
            required: boolean;
            min: number;
        };
    };
    id: number;
    longitude: number;
    latitude: number;
    altitude: number;
    velocity: number;
    yaw: number;
    ToBody: boolean;
    saveConfig: {
        id: string;
        longitude: string;
        latitude: string;
        altitude: string;
        velocity: string;
        yaw: string;
        ToBody: string;
    };
    saveConfigFromExternalSource: {
        longitude: string;
        latitude: string;
        altitude: string;
        velocity: string;
        yaw: string;
        ToBody: string;
    };
    saveConfigInternalSource: {
        longitude: string;
        latitude: string;
        altitude: string;
        velocity: string;
        yaw: string;
        ToBody: string;
    };
    constructor(_data: ROUTE_POINT_DATA | PointOfRoute);
    setValues: (data: any, saveConfig: Object, secondarySaveConfig: Object) => void;
    update: (data: Object) => void;
    toJsonForUI: () => ROUTE_POINT_DATA_UI;
    toJsonForDroneService: () => ROUTE_POINT_DATA_DRONESERVICE;
    toJsonForUtm: () => POINT_FOR_APPROVAL;
    toPOINT: () => POINT;
    toPOINT3D: () => POINT3D;
}
