import { AutonomousAction } from '../../../../../../classes/dataClasses/security/autonomousAction';
import { ACTION_ENVIRONMENTS, ACTION_STATUS, ASYNC_RESPONSE } from '../../../../../../classes/typings/all.typings';
import { IAction } from './iAction';
export declare class ExternalActionLogic implements IAction {
    constructor();
    startAction: (environments: ACTION_ENVIRONMENTS, autonomousAction: AutonomousAction) => Promise<ASYNC_RESPONSE>;
    endAction: (environments: ACTION_ENVIRONMENTS, autonomousAction: AutonomousAction) => Promise<ASYNC_RESPONSE<ACTION_STATUS>>;
    private log;
}
