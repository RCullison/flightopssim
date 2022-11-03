import { ACTION, ACTION_PARAMETERS, ACTION_DROP_REQUEST, INSTALL_ACTION_PARAMETERS, POD_TYPE_ID_ENUM, SENSOR_TYPE_ID_ENUM, WAYPOINT_ACTION_TYPE, ACTION_KEY, AUTONOMOUS_TASK_METADATA } from '../../../typings/all.typings';
import { IActionData } from './iActionData';
export declare class InstallAction implements IActionData {
    actionId: string;
    type: WAYPOINT_ACTION_TYPE.Install;
    DropHeightAGL: number;
    sensorType: SENSOR_TYPE_ID_ENUM;
    PodTypeID: POD_TYPE_ID_ENUM;
    flightId: string;
    action: ACTION;
    actionKey: ACTION_KEY;
    metadata: AUTONOMOUS_TASK_METADATA;
    constructor(data: Partial<ACTION_PARAMETERS>, type: WAYPOINT_ACTION_TYPE);
    update: (data: Object) => void;
    private saveConfig;
    private functionSaveConfig;
    PlanID: string;
    nodeIndex: number;
    toJsonForSave: () => INSTALL_ACTION_PARAMETERS;
    toJsonForPodService: () => ACTION_DROP_REQUEST;
}
