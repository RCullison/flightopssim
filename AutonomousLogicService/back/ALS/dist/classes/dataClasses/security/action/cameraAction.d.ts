import { ACTION_PARAMETERS, CAMERA_ACTION_PARAMETERS } from '../../../typings/all.typings';
import { WAYPOINT_ACTION_TYPE } from '../../../typings/all.typings';
import { IActionData } from './iActionData';
export declare class CameraAction implements IActionData {
    type: WAYPOINT_ACTION_TYPE;
    zoomValue: number;
    constructor(data: Partial<ACTION_PARAMETERS>, type: WAYPOINT_ACTION_TYPE);
    update: (data: Object) => void;
    private saveConfig;
    private functionSaveConfig;
    toJsonForSave: () => CAMERA_ACTION_PARAMETERS;
}
