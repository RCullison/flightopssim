import { AutonomousAction } from '../../../../../../classes/dataClasses/security/autonomousAction';
import { ACTION_ENVIRONMENTS, ASYNC_RESPONSE, MAP } from '../../../../../../classes/typings/all.typings';
import { IAction } from './iAction';
export declare class VehicleActionLogic implements IAction {
    constructor();
    startAction: (environments: ACTION_ENVIRONMENTS, autonomousAction: AutonomousAction) => Promise<ASYNC_RESPONSE>;
    endAction: (environments: ACTION_ENVIRONMENTS, autonomousAction: AutonomousAction) => Promise<ASYNC_RESPONSE>;
    private landOnMissionFunction;
    private landFunction;
    private takeOffOnMission;
    private takeOffFunction;
    private rotate;
    private stopFunction;
    private changeAltitude;
    private stopChangeAltitude;
    private log;
    actionConfig: MAP<{
        start: Function;
        stop: Function;
    }>;
}
