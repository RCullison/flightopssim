import { ASYNC_RESPONSE, GEOPOINT_VECTOR, GIMBAL_COMMAND_DATA, GIMBAL_TELEMETRY, GS_TO_WS_GIMBAL_OBJ, SENSOR_ID_TYPE } from '../../typings/all.typings';
export declare class GimbalData {
    static config: {
        roll: {
            type: string;
            objType: string;
            default: number;
            required: boolean;
            min: number;
        };
        pitch: {
            type: string;
            objType: string;
            default: number;
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
    sensorId: SENSOR_ID_TYPE;
    telemetry: GIMBAL_TELEMETRY;
    requested: GIMBAL_COMMAND_DATA;
    command: GIMBAL_COMMAND_DATA;
    saveConfig: {
        sensorId: string;
        pitch: string;
        yaw: string;
        yawRef: string;
    };
    sensorVector: GEOPOINT_VECTOR;
    constructor();
    setValues: (objToUpdate: GIMBAL_COMMAND_DATA, data: any, saveConfig?: Object) => ASYNC_RESPONSE;
    update: (objToUpdate: GIMBAL_COMMAND_DATA, data: GIMBAL_COMMAND_DATA) => ASYNC_RESPONSE;
    compareCommandAndCurrent: () => ASYNC_RESPONSE<string[]>;
    toJsonForWebServer: () => GS_TO_WS_GIMBAL_OBJ;
}
