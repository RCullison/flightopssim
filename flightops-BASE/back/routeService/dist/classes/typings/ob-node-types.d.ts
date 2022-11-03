import { ON_BOARD_STATE, OWNER } from "./ds.typings";
export declare type TELEMETRY_SERVICE_DATA = {
    missionTime?: number;
    heading?: number;
    height_above_takeoff?: number;
    gps_health?: number;
    gps_position?: {
        latitude: number;
        altitude: number;
        longitude: number;
    };
    state?: {
        armed: boolean;
    };
    velocity?: {
        x: number;
        y: number;
        z: number;
    };
    distance_from_home?: number;
    last_change_time?: number;
    lastHome?: {
        latitude: number;
        longitude: number;
        operationalAlt: number;
    };
    onBoardState?: ON_BOARD_STATE;
    operationalAlt?: number;
    owner?: OWNER;
    timeOut4ownerOnboardInSec?: number;
    tolerance?: number;
    wayPoints?: {
        lengthOfPointsLeft: number;
        isSettedVelocity: boolean;
        settedVelocity: number;
        status: number;
        points: WAYPOINT_TELEMETRY[];
        distance2nextPoint: number;
    };
    keepAlive?: number;
    keepAliveTelemetryService?: number;
    keepAliveRequestService?: number;
    siteName?: number;
    rpmEngine?: number;
    isOnGnd?: boolean;
};
export declare type TRUE_FALSE = {
    value: boolean;
};
export declare enum TELEMETRY_DEFAULT_VALUE {
    missionTime = 0,
    height_above_takeoff = 0,
    gps_health = 0,
    heading = 0,
    velocityX = 0,
    velocityY = 0,
    velocityZ = 0,
    gps_positionLatitude = 0,
    gps_positionAltitude = 0,
    gps_positionLongitude = 0,
    last_change_time = 0,
    lastHomeLatitude = 0,
    lastHomeLongitude = 0,
    lastHomeOperationalAlt = 0,
    onBoardState = "None",
    operationalAlt = 0,
    owner = "droneService",
    timeOut4ownerOnboardInSec = 0,
    tolerance = 0,
    wayPointsLengthOfPointsLeft = 0,
    wayPointsSettedVelocity = 0,
    wayPointsStatus = -1,
    wayPointsDistance2nextPoint = 0,
    keepAlive = 0,
    rpmEngine = -1
}
export declare type WAYPOINT_TELEMETRY = {
    longitude: number;
    latitude: number;
    altitude: number;
    velocity: number;
    yaw: number;
};
export declare enum TASK_ACTIONS {
    start = "start",
    stop = "stop"
}
export declare type FORCE_PUBLISHER_DATA = {
    axes: [number, number, number, number];
};
