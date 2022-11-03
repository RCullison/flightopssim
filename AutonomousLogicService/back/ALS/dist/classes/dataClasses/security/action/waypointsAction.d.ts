import { ACTION_PARAMETERS, ACTION_TYPE, LAND_REQUEST, MAP, TAKEOFF_REQUEST, WAYPOINTS_ACTION, WAYPOINTS_ACTION_PARAMETERS } from '../../../typings/all.typings';
import { IActionData } from './iActionData';
export declare class WaypointsAction implements IActionData {
    type: ACTION_TYPE;
    waypointsMissionAction: WAYPOINTS_ACTION;
    requestedAltitude: number;
    groundASL: number;
    takeoffASLHeight: number;
    isLidar: boolean;
    requestedAzimuth: number;
    isChangeParameters: boolean;
    actionParameters: MAP;
    landParameters: LAND_REQUEST;
    takeOffParameters: TAKEOFF_REQUEST;
    constructor(data?: Partial<ACTION_PARAMETERS>);
    update: (data: Object) => void;
    private saveConfig;
    private functionSaveConfig;
    toJsonForSave: () => WAYPOINTS_ACTION_PARAMETERS;
}
