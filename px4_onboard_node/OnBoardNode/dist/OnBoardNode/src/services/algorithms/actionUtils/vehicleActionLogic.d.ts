import { ActionPoint } from "../../../../../classes/dataClasses/security/actionPoint";
import { IAction } from './iAction';
import { AutonomousAction } from '../../../../../classes/dataClasses/security/autonomousAction';
import { ASYNC_RESPONSE, MAP } from '../../../../../classes/typings/all.typings';
export declare class VehicleActionLogic implements IAction {
    constructor();
    startAction: (autonomousAction: AutonomousAction, actionPointData: {
        index: number;
        actionPoint: ActionPoint;
    }) => Promise<ASYNC_RESPONSE>;
    endAction: (autonomousAction: AutonomousAction) => Promise<ASYNC_RESPONSE>;
    private changeAltitude;
    private rotate;
    private log;
    private stopFunction;
    private stopChangeAltitude;
    actionConfig: MAP<{
        start: Function;
        stop: Function;
    }>;
}
