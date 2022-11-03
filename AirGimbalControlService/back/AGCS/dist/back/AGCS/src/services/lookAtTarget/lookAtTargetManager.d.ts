import { ASYNC_RESPONSE, GEOJSON_POINT, GIMBAL_TARGET } from '../../../../../classes/typings/all.typings';
export declare class LookAtTargetManager {
    private static instance;
    target: GEOJSON_POINT;
    isLookAtTarget: boolean;
    private constructor();
    private getGimbalTarget;
    private getIsLookAtTarget;
    private startFollowTarget;
    private finishFollowTarget;
    static getGimbalTarget: () => GEOJSON_POINT;
    static getIsLookAtTarget: () => boolean;
    static startFollowTarget: (data: GIMBAL_TARGET) => ASYNC_RESPONSE;
    static finishFollowTarget: () => ASYNC_RESPONSE;
}
