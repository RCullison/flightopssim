import { ALGORITHM_PROGRESS_STATUS, ALGORITHM_STATUS, CHANGE_ALT_DATA, GEOPOINT3D, OWNER_TYPE, PREV_LOCATION, RC_MODE, MOVE_SERVICE_STATUS_ONBOARD, YXZ, YXZW } from './all.typings';
export declare type ON_BOARD_TELEMETRY_SERVICE_DATA = {
    battery_state?: {
        percentage: number;
        voltage: number;
        current: number;
    };
    heading?: number;
    height_above_takeoff?: number;
    gps_health?: number;
    gps_position?: GEOPOINT3D;
    imu?: {
        angular_velocity: YXZ;
        orientation: YXZW;
    };
    gimbal?: {
        roll: number;
        pitch: number;
        yaw: number;
    };
    state?: {
        armed: boolean;
    };
    velocity?: YXZ;
    distance_from_home?: number;
    attitude?: YXZW;
    last_change_time?: number;
    lastHome: ON_BOARD_HOME_POSITION;
    minBattery4RH_ownerOnboard?: number;
    onBoardState?: ON_BOARD_STATE;
    operationalAlt?: number;
    owner?: OWNER_TYPE;
    timeOut4ownerOnboardInSec?: number;
    tolerance?: number;
    wayPoints?: {
        lengthOfPointsLeft: number;
        isSettedVelocity: boolean;
        settedVelocity: number;
        status: number;
        points: ON_BOARD_WAYPOINT_TELEMETRY[] | ON_BOARD_WAYPOINT2_ITEM[];
        distance2nextPoint: number;
    };
    keepAlive?: number;
    keepAliveTelemetryService?: number;
    keepAliveRequestService?: number;
    matrixDataCreationTime?: number;
    eulerAngles: ON_BOARD_TELEMETRY_EULER_ANGLES;
    extention?: ON_BOARD_EXTENTION;
    control: ON_BOARD_CONTROL;
    connectionRC: boolean;
    missionStatus: ALGORITHM_STATUS;
    prev_02_05_position: PREV_LOCATION;
    algorithmStatus: ALGORITHM_PROGRESS_STATUS;
    isTemporaryManual: boolean;
    isTemporaryLanding: boolean;
    flightCommandServiceStatus: MOVE_SERVICE_STATUS_ONBOARD;
    externalServices: CHANGE_ALT_DATA;
};
export declare type ON_BOARD_HOME_POSITION = {
    lon: number;
    lat: number;
    verticalSpeed?: number;
    horizontalSpeed?: number;
    maxErrorDistance?: number;
    minAltitude?: number;
    altOffset?: number;
    corridorPoint?: {
        latitude: number;
        longitude: number;
    };
    isAccurateLand: boolean;
    isCorridor: boolean;
};
export declare enum ON_BOARD_STATE {
    'None' = "None",
    'Landing' = "Landing",
    'ReturnHome' = "ReturnHome"
}
export declare enum ON_BOARD_OWNER {
    'droneService' = "droneService",
    'onBoard' = "onBoard",
    'RTH' = "RTH"
}
export declare type ON_BOARD_WAYPOINT_TELEMETRY = {
    longitude: number;
    latitude: number;
    altitude: number;
    velocity: number;
    yaw: number;
};
export declare type ON_BOARD_WAYPOINT2_ITEM = {
    index: number;
    longitude: number;
    latitude: number;
    relativeHeight: number;
    waypointType: number;
    headingMode: number;
    config: [
        0,
        0,
        0
    ];
    dampingDistance: number;
    heading: number;
    turnMode: number;
    pointOfInterest: [number, number, number];
    maxFlightSpeed: number;
    autoFlightSpeed: number;
};
export declare type ON_BOARD_TELEMETRY_EULER_ANGLES = {
    rollQuaternion: number;
    pitchQuaternion: number;
    yawQuaternion: number;
};
export declare type ON_BOARD_EXTENTION = {
    'type': ON_BOARD_TYPE_DRONE;
    'name': ON_BOARD_NAME_DRONE;
    'rc': {
        'mode': RC_MODE;
    };
};
export declare enum ON_BOARD_CONTROL {
    pilot = "pilot",
    onboard = "onboard",
    na = "na"
}
export declare enum ON_BOARD_TYPE_DRONE {
    DJI = "DJI",
    PX4 = "PX4",
    vector = "vector"
}
export declare enum ON_BOARD_NAME_DRONE {
    M100 = "M100",
    M210 = "M210",
    M600 = "M600",
    M300 = "M300"
}
