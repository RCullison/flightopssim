import { ACTION_PARAMETERS, EXTERNAL_INPUT_PARAMETERS, EXTERNAL_STATUS, WAYPOINT_ACTION_TYPE } from '../../../typings/all.typings';
import { IActionData } from './iActionData';
export declare class InputExternalAction implements IActionData {
    type: WAYPOINT_ACTION_TYPE.externalInput;
    description: string;
    options: EXTERNAL_STATUS;
    constructor(data: Partial<ACTION_PARAMETERS>, type: WAYPOINT_ACTION_TYPE);
    update: (data: Object) => void;
    private saveConfig;
    private functionSaveConfig;
    toJsonForSave: () => EXTERNAL_INPUT_PARAMETERS;
}
