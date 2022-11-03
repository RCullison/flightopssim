import { ACTION_TYPE, WINCH_ACTION_PARAMETERS } from '../../../typings/all.typings';
import { IActionData } from './iActionData';
export declare class WinchAction implements IActionData {
    type: ACTION_TYPE;
    startAltitude: number;
    requestedPackageHeight: number;
    constructor(data: WINCH_ACTION_PARAMETERS, type: ACTION_TYPE);
    update: (data: Object) => void;
    private saveConfig;
    private functionSaveConfig;
    toJsonForSave: () => WINCH_ACTION_PARAMETERS;
}
