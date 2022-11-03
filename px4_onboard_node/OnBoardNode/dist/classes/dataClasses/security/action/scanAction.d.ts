import { ACTION_PARAMETERS, ACTION_TYPE, REL_TYPE, SCAN_ACTION_PARAMETERS } from '../../../typings/all.typings';
import { IActionData } from './iActionData';
export declare class ScanAction implements IActionData {
    type: ACTION_TYPE;
    startScanYaw: number;
    finishScanYaw: number;
    relType: REL_TYPE;
    pitch: number;
    constructor(data?: Partial<ACTION_PARAMETERS>);
    update: (data: Object) => void;
    private saveConfig;
    private functionSaveConfig;
    toJsonForSave: () => SCAN_ACTION_PARAMETERS;
}
