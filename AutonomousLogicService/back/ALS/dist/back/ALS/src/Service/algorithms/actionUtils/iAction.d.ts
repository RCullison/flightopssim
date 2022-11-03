import { AutonomousAction } from '../../../../../../classes/dataClasses/security/autonomousAction';
import { ACTION_ENVIRONMENTS, ASYNC_RESPONSE, MAP } from '../../../../../../classes/typings/all.typings';
export interface IAction {
    startAction: (environments: ACTION_ENVIRONMENTS, autonomousAction: AutonomousAction) => Promise<ASYNC_RESPONSE<MAP>>;
    endAction: (environments: ACTION_ENVIRONMENTS, autonomousAction: AutonomousAction) => Promise<ASYNC_RESPONSE>;
}
