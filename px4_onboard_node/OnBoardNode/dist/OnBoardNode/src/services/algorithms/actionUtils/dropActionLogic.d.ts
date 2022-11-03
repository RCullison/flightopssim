import { IAction } from './iAction';
import { AutonomousAction } from '../../../../../classes/dataClasses/security/autonomousAction';
import { ASYNC_RESPONSE } from '../../../../../classes/typings/all.typings';
import { ActionPoint } from "../../../../../classes/dataClasses/security/actionPoint";
export declare class DropActionLogic implements IAction {
    constructor();
    startAction: (autonomousAction: AutonomousAction, actionPointData: {
        index: number;
        actionPoint: ActionPoint;
    }) => Promise<ASYNC_RESPONSE>;
    endAction: (autonomousAction: AutonomousAction) => Promise<ASYNC_RESPONSE>;
    private startDrop;
    private stopFunction;
    private log;
    actionConfig: {
        Drop: {
            start: Function;
            stop: Function;
        };
    };
}
