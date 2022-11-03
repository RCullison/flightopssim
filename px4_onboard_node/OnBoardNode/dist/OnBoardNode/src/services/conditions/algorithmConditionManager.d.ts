import { CONDITION_STATUS, MAP } from '../../../../classes/typings/all.typings';
import { ActionPoint } from "../../../../classes/dataClasses/security/actionPoint";
import { TimeoutConditionLogic } from "./conditionUtilities/timeoutConditionLogic";
import { DistanceConditionLogic } from "./conditionUtilities/distanceConditionLogic";
import { GeneralConditionLogic } from "./conditionUtilities/generalConditionLogic";
export declare class AlgorithmConditionManager {
    private static instance;
    relevantPoint: ActionPoint;
    checkInterval: any;
    conditionsStatuses: MAP<CONDITION_STATUS>;
    allFinished: boolean;
    conditionLogicConfig: {
        general: GeneralConditionLogic;
        timeout: TimeoutConditionLogic;
        distance: DistanceConditionLogic;
    };
    private startCheckProcess;
    private checkIntervalProcess;
    private stopAllCheckProcess;
    private getConditions;
    private getCondition;
    private setCondition;
    private findActionById;
    private checkIsFinished;
    private getIsFinished;
    private getRelevantPointId;
    static startCheckProcess: (_relevantPoint: ActionPoint) => boolean;
    static stopAllCheckProcess: () => void;
    static getCondition: (actionId: string) => CONDITION_STATUS;
    static getConditions: () => MAP<CONDITION_STATUS>;
    static checkIsFinished: () => boolean;
    static getIsFinished: () => boolean;
    static getRelevantPoint: () => ActionPoint;
    static setCondition: (actionId: string, status: CONDITION_STATUS) => boolean;
}
