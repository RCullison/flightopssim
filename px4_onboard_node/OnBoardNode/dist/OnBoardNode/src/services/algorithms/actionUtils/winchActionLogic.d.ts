import { IAction } from './iAction';
import { AutonomousAction } from '../../../../../classes/dataClasses/security/autonomousAction';
import { ASYNC_RESPONSE } from '../../../../../classes/typings/all.typings';
import { ActionPoint } from "../../../../../classes/dataClasses/security/actionPoint";
export declare class WinchActionLogic implements IAction {
    constructor();
    startAction: (autonomousAction: AutonomousAction, actionPointData: {
        index: number;
        actionPoint: ActionPoint;
    }) => Promise<ASYNC_RESPONSE>;
    endAction: (autonomousAction: AutonomousAction) => Promise<ASYNC_RESPONSE>;
    private startWinch;
    private stopFunction;
    private log;
    actionConfig: {
        Winch: {
            start: Function;
            stop: Function;
        };
    };
}
