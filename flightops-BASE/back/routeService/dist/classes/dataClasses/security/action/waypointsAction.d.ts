import { ACTION_PARAMETERS, WAYPOINT_ACTION, WAYPOINTS_ACTION_PARAMETERS } from '../../../typings/all.typings';
import { IAction } from './i_action';
export declare class WaypointsAction implements IAction {
    waypointsMissionAction: WAYPOINT_ACTION;
    constructor(data?: Partial<ACTION_PARAMETERS>);
    update: (data: Object) => void;
    private saveConfig;
    private functionSaveConfig;
    toJsonForSave: () => WAYPOINTS_ACTION_PARAMETERS;
}
