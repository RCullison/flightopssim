import { AutonomousAction } from '../../../../../../classes/dataClasses/security/autonomousAction';
import { ACTION_ENVIRONMENTS, ASYNC_RESPONSE, MAP } from '../../../../../../classes/typings/all.typings';
import { IAction } from './iAction';
export declare class GimbalActionLogic implements IAction {
    constructor();
    startAction: (environments: ACTION_ENVIRONMENTS, autonomousAction: AutonomousAction) => Promise<ASYNC_RESPONSE>;
    endAction: (environments: ACTION_ENVIRONMENTS, autonomousAction: AutonomousAction) => Promise<ASYNC_RESPONSE>;
    private startScan;
    private startStow;
    private startMove;
    private stopScan;
    private stopStow;
    private stopMove;
    actionConfig: MAP<{
        start: Function;
        stop: Function;
    }>;
    private log;
}
