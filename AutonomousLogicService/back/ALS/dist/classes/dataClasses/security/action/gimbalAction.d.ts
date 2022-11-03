import { ACTION_PARAMETERS, GIMBAL_ACTION_PARAMETERS } from '../../../typings/all.typings';
import { DIRECTION_GIMBAL, REL_TYPE, WAYPOINT_ACTION_TYPE } from '../../../typings/all.typings';
import { IActionData } from './iActionData';
export declare class GimbalAction implements IActionData {
    type: WAYPOINT_ACTION_TYPE;
    actionType: WAYPOINT_ACTION_TYPE;
    startScanYaw: number;
    finishScanYaw: number;
    relType: REL_TYPE;
    direction: DIRECTION_GIMBAL;
    pitch: number;
    roll: number;
    yaw: number;
    constructor(data: Partial<ACTION_PARAMETERS>, type: WAYPOINT_ACTION_TYPE);
    update: (data: Object) => void;
    private saveConfig;
    private functionSaveConfig;
    toJsonForSave: () => GIMBAL_ACTION_PARAMETERS;
}
