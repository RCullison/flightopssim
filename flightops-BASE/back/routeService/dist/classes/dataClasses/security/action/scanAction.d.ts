import { ACTION_DIRECTIONS, ACTION_PARAMETERS, REL_TYPE, SCAN_ACTION_PARAMETERS } from '../../../typings/all.typings';
import { IAction } from './i_action';
export declare class ScanAction implements IAction {
    startScanYaw: number;
    finishScanYaw: number;
    relType: REL_TYPE;
    pitch: number;
    direction: ACTION_DIRECTIONS;
    constructor(data?: Partial<ACTION_PARAMETERS>);
    update: (data: Object) => void;
    private saveConfig;
    private functionSaveConfig;
    toJsonForSave: () => SCAN_ACTION_PARAMETERS;
}
