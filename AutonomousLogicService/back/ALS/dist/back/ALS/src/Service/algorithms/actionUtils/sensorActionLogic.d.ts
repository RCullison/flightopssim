import { ACTION_ENVIRONMENTS } from '../../../../../../classes/typings/all.typings';
import { IAction } from './iAction';
import { AutonomousAction } from '../../../../../../classes/dataClasses/security/autonomousAction';
import { ASYNC_RESPONSE } from '../../../../../../classes/typings/all.typings';
export declare class SensorActionLogic implements IAction {
    constructor();
    startAction: (environments: ACTION_ENVIRONMENTS, autonomousAction: AutonomousAction) => Promise<ASYNC_RESPONSE>;
    endAction: (environments: ACTION_ENVIRONMENTS, autonomousAction: AutonomousAction) => Promise<ASYNC_RESPONSE>;
    private log;
}
