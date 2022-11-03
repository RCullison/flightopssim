import { ACTION_TYPE, DROP_ACTION_PARAMETERS } from '../../../typings/all.typings';
import { IActionData } from './iActionData';
export declare class DropAction implements IActionData {
    type: ACTION_TYPE;
    constructor(data: DROP_ACTION_PARAMETERS, type: ACTION_TYPE);
    update: (data: Object) => void;
    private saveConfig;
    private functionSaveConfig;
    toJsonForSave: () => DROP_ACTION_PARAMETERS;
}
