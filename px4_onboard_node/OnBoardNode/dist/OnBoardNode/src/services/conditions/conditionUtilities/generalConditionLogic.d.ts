import { ICondition } from "./iCondition";
import { ActionPoint } from "../../../../../classes/dataClasses/security/actionPoint";
import { AutonomousAction } from "../../../../../classes/dataClasses/security/autonomousAction";
import { TELEMETRY_SERVICE_DATA } from "../../../../../classes/typings/ob-node-types";
import { ACTION_CONDITIONS, CHECK_PARAMETERS, CONDITION_STATUS, MAP } from "../../../../../classes/typings/all.typings";
export declare class GeneralConditionLogic implements ICondition {
    relevantPoint: ActionPoint;
    autonomousAction: AutonomousAction;
    telemetry: TELEMETRY_SERVICE_DATA;
    constructor();
    checkCondition: (_actionPoint: ActionPoint, _action: AutonomousAction, _telemetry: TELEMETRY_SERVICE_DATA) => CONDITION_STATUS;
    checkConditionsLogic: (checkParametersData: ACTION_CONDITIONS, isNeedBeStarted: boolean) => boolean;
    private checkPrimitiveParameter;
    private checkTimeFromRelativeAction;
    private findActionById;
    private checkPointReached;
    private tryCallFunction;
    checkParametersConfig: MAP<CHECK_PARAMETERS>;
}
