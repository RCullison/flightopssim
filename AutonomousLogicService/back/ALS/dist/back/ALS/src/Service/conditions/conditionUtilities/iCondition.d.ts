import { ActionPoint } from '../../../../../../classes/dataClasses/security/actionPoint';
import { AutonomousAction } from '../../../../../../classes/dataClasses/security/autonomousAction';
import { CONDITION_STATUS } from '../../../../../../classes/typings/all.typings';
import { TELEMETRY_SERVICE_DATA } from '../../../../../../classes/typings/ob-node-types';
export interface ICondition {
    checkCondition: (_actionPoint: ActionPoint, _action: AutonomousAction, _telemetry: TELEMETRY_SERVICE_DATA) => CONDITION_STATUS;
}
