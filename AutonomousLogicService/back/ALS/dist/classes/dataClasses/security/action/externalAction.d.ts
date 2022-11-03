import { ACTION, ACTION_PARAMETERS, ACTION_DROP_REQUEST, POD_TYPE_ID_ENUM, SENSOR_TYPE_ID_ENUM, ACTION_KEY, AUTONOMOUS_TASK_METADATA, EXTERNAL_ACTION_PARAMETERS, ACTION_TYPE } from '../../../typings/all.typings';
import { IActionData } from './iActionData';
export declare class ExternalAction implements IActionData {
    actionId: string;
    type: ACTION_TYPE.ExternalAction;
    DropHeightAGL: number;
    sensorType: SENSOR_TYPE_ID_ENUM;
    PodTypeID: POD_TYPE_ID_ENUM;
    flightId: string;
    action: ACTION;
    actionKey: ACTION_KEY;
    metadata: AUTONOMOUS_TASK_METADATA;
    constructor(data: Partial<ACTION_PARAMETERS>);
    update: (data: Object) => void;
    private saveConfig;
    private functionSaveConfig;
    PlanID: string;
    nodeIndex: number;
    toJsonForSave: () => EXTERNAL_ACTION_PARAMETERS;
    toJsonForPodService: () => ACTION_DROP_REQUEST;
}
