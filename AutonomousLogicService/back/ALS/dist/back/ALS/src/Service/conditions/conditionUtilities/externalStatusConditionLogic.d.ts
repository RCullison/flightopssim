import { ACTION_CONDITIONS, MAP, CONDITION_STATUS, CHECK_EXTERNAL_STATUS_PARAMETERS } from '../../../../../../classes/typings/all.typings';
import { TELEMETRY_SERVICE_DATA } from '../../../../../../classes/typings/ob-node-types';
import { ICondition } from './iCondition';
import { ActionPoint } from '../../../../../../classes/dataClasses/security/actionPoint';
import { AutonomousAction } from '../../../../../../classes/dataClasses/security/autonomousAction';
export declare class ExternalStatusConditionLogic implements ICondition {
    relevantPoint: ActionPoint;
    autonomousAction: AutonomousAction;
    telemetry: TELEMETRY_SERVICE_DATA;
    constructor();
    checkCondition: (_actionPoint: ActionPoint, _action: AutonomousAction, _telemetry: TELEMETRY_SERVICE_DATA) => CONDITION_STATUS;
    checkConditionsLogic: (checkParametersData: ACTION_CONDITIONS, isNeedBeStarted: boolean) => boolean;
    private findActionById;
    private checkExternalStatus;
    private tryCallFunction;
    checkParametersConfig: MAP<CHECK_EXTERNAL_STATUS_PARAMETERS>;
}
