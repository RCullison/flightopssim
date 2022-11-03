import { ASYNC_RESPONSE, GIMBAL_TARGET } from '../../../../classes/typings/all.typings';
export declare class GimbalManager {
    private static instance;
    private intervals;
    private arrivedToStart;
    private scanParameters;
    oldGimbalYawParameters: {
        yaw: number;
        timestamp: number;
    };
    isGimbalMove: boolean;
    private singleGimbalAction;
    private startFollowTarget;
    private finishFollowTarget;
    static singleGimbalAction: (obj: any) => Promise<ASYNC_RESPONSE>;
    static startFollowTarget: (target: GIMBAL_TARGET) => Promise<ASYNC_RESPONSE>;
    static finishFollowTarget: () => Promise<ASYNC_RESPONSE>;
}
