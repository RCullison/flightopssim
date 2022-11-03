import { ACTION_DIRECTIONS, ACTION_PARAMETERS, CAMERA_ACTION_PARAMETERS, REL_TYPE } from '../../../typings/all.typings';
import { IAction } from './i_action';
export declare class CameraAction implements IAction {
    startScanYaw: number;
    finishScanYaw: number;
    relType: REL_TYPE;
    pitch: number;
    direction: ACTION_DIRECTIONS;
    zoomValue: number;
    constructor(data?: Partial<ACTION_PARAMETERS>);
    update: (data: Object) => void;
    private saveConfig;
    private functionSaveConfig;
    toJsonForSave: () => CAMERA_ACTION_PARAMETERS;
}
