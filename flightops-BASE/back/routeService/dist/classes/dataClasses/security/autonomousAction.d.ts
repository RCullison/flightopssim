import { IAction } from './action/i_action';
import { ACTION_CONDITIONS, ACTION_FOR, AUTONOMOUS_ACTION, ACTION_TYPE, ON_ERROR_ACTION_PARAMETERS } from '../../typings/all.typings';
export declare class AutonomousAction {
    actionFor: ACTION_FOR;
    type: ACTION_TYPE;
    startConditions: ACTION_CONDITIONS;
    actionId: string;
    endConditions: ACTION_CONDITIONS;
    onErrorAction: ON_ERROR_ACTION_PARAMETERS;
    action: IAction;
    constructor(data?: Partial<AUTONOMOUS_ACTION>);
    update: (data: Object) => void;
    private saveAction;
    private saveConfig;
    private functionSaveConfig;
    private getActions;
    toJsonForSave: () => AUTONOMOUS_ACTION;
}
