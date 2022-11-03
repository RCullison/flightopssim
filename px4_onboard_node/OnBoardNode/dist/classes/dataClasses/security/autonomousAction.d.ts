import { IActionData } from './action/iActionData';
import { ACTION_CONDITIONS, ACTION_FOR, AUTONOMOUS_ACTION, GEOPOINT3D_SHORT, ACTION_TYPE, AUTONOMOUS_TASK_METADATA, ON_ERROR_ACTION_PARAMETERS } from '../../typings/all.typings';
export declare class AutonomousAction {
    actionId: string;
    actionFor: ACTION_FOR;
    type: ACTION_TYPE;
    startConditions: ACTION_CONDITIONS;
    endConditions: ACTION_CONDITIONS;
    errorConditions: ACTION_CONDITIONS;
    action: IActionData;
    onErrorAction: ON_ERROR_ACTION_PARAMETERS;
    startTime: number;
    finishTime: number;
    errorTime: number;
    startLocation: GEOPOINT3D_SHORT;
    finishLocation: GEOPOINT3D_SHORT;
    errorLocation: GEOPOINT3D_SHORT;
    metadata: AUTONOMOUS_TASK_METADATA;
    constructor(data?: Partial<AUTONOMOUS_ACTION>);
    update: (data: Partial<AUTONOMOUS_ACTION>) => void;
    private saveAction;
    private saveConfig;
    private functionSaveConfig;
    private getActions;
    toJsonForSave: () => AUTONOMOUS_ACTION;
}
