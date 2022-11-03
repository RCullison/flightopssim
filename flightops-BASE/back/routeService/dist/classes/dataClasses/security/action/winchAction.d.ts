import { IAction } from './i_action';
import { ACTION_TYPE, WINCH_ACTION_PARAMETERS } from '../../../typings/all.typings';
export declare class WinchAction implements IAction {
    type: ACTION_TYPE;
    startAltitude: number;
    requestedPackageHeight: number;
    constructor(data: WINCH_ACTION_PARAMETERS, type: ACTION_TYPE);
    update: (data: Object) => void;
    private saveConfig;
    private functionSaveConfig;
    toJsonForSave: () => WINCH_ACTION_PARAMETERS;
}
