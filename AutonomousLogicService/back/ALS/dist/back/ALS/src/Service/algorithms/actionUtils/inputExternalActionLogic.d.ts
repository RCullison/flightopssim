import { AutonomousAction } from '../../../../../../classes/dataClasses/security/autonomousAction';
import { ACTION_ENVIRONMENTS, ASYNC_RESPONSE } from '../../../../../../classes/typings/all.typings';
import { IAction } from './iAction';
export declare class InputExternalActionLogic implements IAction {
    constructor();
    startAction: (environments: ACTION_ENVIRONMENTS, autonomousAction: AutonomousAction) => Promise<ASYNC_RESPONSE>;
    endAction: (environments: ACTION_ENVIRONMENTS, autonomousAction: AutonomousAction) => Promise<ASYNC_RESPONSE>;
    private log;
}
