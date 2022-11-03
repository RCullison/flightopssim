import { IAction } from './i_action';
import { ACTION_TYPE, IR_LOCK_ACTION_PARAMETERS } from '../../../typings/all.typings';
export declare class IrLockAction implements IAction {
    type: ACTION_TYPE;
    startAltitude: number;
    requestedAltitude: number;
    azimuth: number;
    constructor(data: IR_LOCK_ACTION_PARAMETERS, type: ACTION_TYPE);
    update: (data: Object) => void;
    private saveConfig;
    private functionSaveConfig;
    toJsonForSave: () => IR_LOCK_ACTION_PARAMETERS;
}
