import { ACTIONS_ON_ROUTE_COMMAND, ALGORITHM_STATUS, ASYNC_RESPONSE, MAP, WAYPOINTS_PATTERN_STATUS } from './all.typings';
export { GEOPOINT3D, COMMINT_MISSION_OPER_TYPE, COMMINT_MISSION_STATUS, MAP, DRONE_JOYSTICK_CAMERA_REQUEST, DRONEJOYSTICKFLIGHTREQUEST, COMMINT_MISSION_TYPES, PARAMS_TABLE_ENTITY, SCRAMBLING_CODE_ENTITY, MISSION_SETTINGS, UIJOYSTICKREQUEST, BASIC_AIR_VEHICLES_STATUSES, AIR_VEHICLE_STATUS, AIR_VEHICLE_MODE, POINT, POINT3D, LOITER_PATTERN_STATUS, AIRVEHICLE_TYPES, AIRVEHICLE_UI_DATA, AIRVEHICLE_WEBSERVER_DATA, } from './all.typings';
export { POINT_PATTERN_ACTIONS, POINT_PATTERN_ACTION_REQUEST, } from './ds-ws.typings';
export { HOT_POINT_PARAMETERS, NOTIFICATION, NOTIFICATION_TYPE, ACK_MESSAGES_DATA, } from './ws-ui.typings';
export declare type DEFAULT_HOTPOINT_PARAMETERS = {
    angular_speed: number;
    is_clockwise: number;
    radius: number;
    yaw_mode: number;
};
export declare enum LOITER_ACTIONS {
    start = 0,
    stop = 1,
    pause = 2,
    resume = 3
}
export declare enum WAYPOINTS_ACTIONS {
    start = 0,
    stop = 1,
    pause = 2,
    resume = 3,
    undefined = -1
}
export declare type LOITER_ACTIONS_PARAMETERS = {
    action: LOITER_ACTIONS;
    parameters: MAP<any>;
};
export declare type WAYPOINTS_ACTIONS_PARAMETERS = {
    action: WAYPOINTS_ACTIONS;
    parameters: MAP<any>;
};
export declare type ALGORITHM_CONFIG = {
    status: ALGORITHM_STATUS | WAYPOINTS_PATTERN_STATUS;
    runFunction: (data: Object, action: ACTIONS_ON_ROUTE_COMMAND) => ASYNC_RESPONSE;
    algorithmClass: any;
};
