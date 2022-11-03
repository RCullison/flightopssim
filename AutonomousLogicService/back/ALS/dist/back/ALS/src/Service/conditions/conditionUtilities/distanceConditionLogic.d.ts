import { CONDITION_STATUS } from '../../../../../../classes/typings/all.typings';
import { TELEMETRY_SERVICE_DATA } from '../../../../../../classes/typings/ob-node-types';
import { ICondition } from './iCondition';
import { ActionPoint } from '../../../../../../classes/dataClasses/security/actionPoint';
import { AutonomousAction } from '../../../../../../classes/dataClasses/security/autonomousAction';
export declare class DistanceConditionLogic implements ICondition {
    relevantPoint: ActionPoint;
    autonomousAction: AutonomousAction;
    telemetry: TELEMETRY_SERVICE_DATA;
    constructor();
    checkCondition: (_actionPoint: ActionPoint, _action: AutonomousAction, _telemetry: TELEMETRY_SERVICE_DATA) => CONDITION_STATUS;
}
