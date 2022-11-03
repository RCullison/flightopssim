import { AutonomousAction } from "../../../../../classes/dataClasses/security/autonomousAction";
import { ASYNC_RESPONSE, MAP } from "../../../../../classes/typings/all.typings";
import { ActionPoint } from "../../../../../classes/dataClasses/security/actionPoint";
export interface IAction {
    startAction: (autonomousAction: AutonomousAction, actionPointData: {
        index: number;
        actionPoint: ActionPoint;
    }) => Promise<ASYNC_RESPONSE<MAP>>;
    endAction: (autonomousAction: AutonomousAction) => Promise<ASYNC_RESPONSE>;
}
