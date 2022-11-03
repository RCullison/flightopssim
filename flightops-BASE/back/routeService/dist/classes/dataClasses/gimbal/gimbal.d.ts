import { GEOJSON_POINT, GIMBAL, GIMBAL_TYPES, LOOK_AT_TARGET_STATE, MAPI_GIMBAL_TELEMETRY, SENSOR_ID_TYPE, WS_TO_GS_GIMBAL_OBJ, WS_TO_UI_GIMBAL_OBJ } from '../../typings/all.typings';
export declare class Gimbal {
    gimbalType: GIMBAL_TYPES;
    sensorId: SENSOR_ID_TYPE;
    isLookAtTarget: LOOK_AT_TARGET_STATE;
    target: GEOJSON_POINT;
    pitch: number;
    yaw: number;
    requestedGimbalAngles: GIMBAL;
    config: {
        gimbalType: string;
        sensorId: string;
        isLookAtTarget: string;
        target: string;
        pitch: string;
        yaw: string;
    };
    constructor(drone: any);
    update: (obj: any) => void;
    toJsonForUI: () => WS_TO_UI_GIMBAL_OBJ;
    toJsonForMAPI: () => MAPI_GIMBAL_TELEMETRY;
    toJsonForGimbalService: () => WS_TO_GS_GIMBAL_OBJ;
}
