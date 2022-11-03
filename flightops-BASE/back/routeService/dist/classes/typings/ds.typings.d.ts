import { BATTERY_STATUS, IMU, YXZ, YXZW, GEOPOINT3D, GIMBAL, GEOPOINT, PREV_LOCATION, MOVE_SERVICE_STATUS_ONBOARD } from './all.typings';
import { WAYPOINTS_ACTIONS } from './ws.typings';
export { POINT_PATTERN_NAMES, POINT_PATTERN_PARAMETERS, POINT_PATTERN_ACTION_REQUEST, } from './ds-ws.typings';
export { DRONEJOYSTICKFLIGHTREQUEST, DRONE_JOYSTICK_CAMERA_REQUEST, POINT3D, GEOPOINT, IMU, YXZ, YXZW, POINT, AIRVEHICLE_WEBSERVER_DATA, BATTERY_STATUS, FLYT_STATE, REQUEST_API_SET_HOME, BASIC_AIR_VEHICLES_STATUSES, AIR_VEHICLE_CREATE_DATA, AIR_VEHICLE_UPDATE_DATA, MAP, AIR_VEHICLE_SERVICE_STATES, GEOPOINT3D, AIRVEHICLE_TYPES, OWNER_TYPE, FAIL_SAFE, IS_ARMED, RESPONSE } from './all.typings';
export declare type FUNCTION_RESPONSE = {
    success: boolean;
    error?: any;
    data?: any;
};
export declare type FLYT_RESPONSE = {
    success: boolean;
    message?: string;
};
export declare type headerGlobalPosition = {
    stamp: {
        secs: number;
        nsecs: number;
    };
    frame_id: string;
    seq: number;
};
export declare type GetLocalPosition = {
    twist: {
        linear: YXZ;
        angular: YXZ;
    };
    header: headerGlobalPosition;
};
export declare type SETVELOCITYREQUEST = {
    vx: number;
    vy: number;
    vz: number;
    yaw_rate: number;
    tolerance: number;
    async: boolean;
    relative: boolean;
    yaw_rate_valid: boolean;
    body_frame: boolean;
};
export declare type SETVELOCITYREQUEST_DRONEID = {
    id: string;
    vx: number;
    vy: number;
    vz: number;
    yaw_rate: number;
    tolerance: number;
    async: boolean;
    relative: boolean;
    yaw_rate_valid: boolean;
    body_frame: boolean;
};
export declare type SETPOINTREQUEST = {
    x: number;
    y: number;
    z: number;
    yaw: number;
    tolerance: number;
    async: Boolean;
    relative: Boolean;
    yaw_valid: Boolean;
    body_frame: Boolean;
};
export declare type REQUEST_API_GLOBAL_POSITION_SETPOINT = {
    lat_x: number;
    long_y: number;
    rel_alt_z: number;
    yaw: number;
    yaw_valid: boolean;
    tolerance: number;
    async: boolean;
};
export declare type REQUEST_API_SET_POSITION = {
    x: number;
    y: number;
    z: number;
    tolerance: number;
};
export declare type WEBSOCKET_DRONE_DATA = {
    battery_state: BATTERY_STATUS;
    distance_from_home: number;
    gimbal: GIMBAL;
    height_above_takeoff: number;
    gps_health: number;
    heading: number;
    attitude: YXZW;
    imu: IMU;
    velocity: YXZ;
    gps_position: GEOPOINT3D;
    last_change_time: number;
    lastHome: GEOPOINT;
    minBattery4RH_ownerOnboard: number;
    onBoardState: ON_BOARD_STATE;
    operationalAlt: number;
    owner: OWNER;
    state: {
        armed: boolean;
    };
    timeOut4ownerOnboardInSec: number;
    tolerance: number;
    wayPoints: WAYPOINTS_DATA;
    matrixDataCreationTime: number;
    prev_02_05_position: PREV_LOCATION;
    flightCommandServiceStatus: MOVE_SERVICE_STATUS_ONBOARD;
};
export declare enum OWNER {
    'droneService' = "droneService",
    'onBoard' = "onBoard",
    'safe' = "safe",
    'emergency' = "emergency",
    'gcs' = "gcs"
}
export declare enum ON_BOARD_STATE {
    'None' = "None",
    'Landing' = "Landing",
    'ReturnHome' = "ReturnHome"
}
export declare type WAYPOINT = {
    longitude: number;
    latitude: number;
    altitude: number;
    velocity: number;
    yaw: number;
};
export declare type WAYPOINTS_DATA = {
    lengthOfPointsLeft: number;
    isSettedVelocity: boolean;
    settedVelocity: number;
    status: WAYPOINTS_ACTIONS;
    points: WAYPOINT[];
    distance2nextPoint: number;
};
export declare type COMMON_REQUEST = {
    methodRest: string;
    ip: string;
    namespace: string;
    action: string;
    method: string;
    bodyReq?: any;
    count?: number;
};
export declare type ON_BOARD_REQUEST = {
    ip: string;
    action: string;
    bodyReq: any;
};
