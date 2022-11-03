import { IAction } from './i_action';
import { ACTION_TYPE, DROP_ACTION_PARAMETERS } from '../../../typings/all.typings';
export declare class DropAction implements IAction {
    type: ACTION_TYPE;
    constructor(data: DROP_ACTION_PARAMETERS, type: ACTION_TYPE);
    update: (data: Object) => void;
    private saveConfig;
    private functionSaveConfig;
    toJsonForSave: () => DROP_ACTION_PARAMETERS;
}
