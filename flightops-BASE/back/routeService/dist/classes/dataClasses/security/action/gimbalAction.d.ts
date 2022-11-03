import { ACTION_DIRECTIONS, ACTION_PARAMETERS, ACTION_TYPE, GIMBAL_ACTION_PARAMETERS, GIMBAL_REL_TYPE } from '../../../typings/all.typings';
import { IAction } from './i_action';
export declare class GimbalAction implements IAction {
    actionType: ACTION_TYPE;
    startScanYaw: number;
    finishScanYaw: number;
    relType: GIMBAL_REL_TYPE;
    pitch: number;
    direction: ACTION_DIRECTIONS;
    yaw: number;
    constructor(data?: Partial<ACTION_PARAMETERS>);
    update: (data: Object) => void;
    private saveConfig;
    private functionSaveConfig;
    toJsonForSave: () => GIMBAL_ACTION_PARAMETERS;
}
