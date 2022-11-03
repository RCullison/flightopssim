import { GEOJSON_POINT, GIMBAL, LOOK_AT_TARGET_STATE, WS_TO_GS_GIMBAL_OBJ } from '../../typings/all.typings';
export declare class GimbalTarget {
    sensorId: string;
    isLookAtTarget: LOOK_AT_TARGET_STATE;
    target: GEOJSON_POINT;
    requestedGimbalAngles: GIMBAL;
    config: {
        sensorId: string;
        isLookAtTarget: string;
        target: string;
        requestedGimbalAngles: string;
    };
    constructor(data: WS_TO_GS_GIMBAL_OBJ);
    update: (obj: WS_TO_GS_GIMBAL_OBJ) => void;
}
