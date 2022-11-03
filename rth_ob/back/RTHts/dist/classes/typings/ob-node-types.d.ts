import { OWNER } from "./ds.typings";
import { ACCURATE_VISUAL_LANDING, AIR_VEHICLE_ID, ALGORITHM_STATUS, POINT3D, SEND_STATUS, WINCH_TELEMETRY_DATA } from "./all.typings";
export declare type TELEMETRY_PX4 = {
    position: {
        "latitude_deg": number;
        "longitude_deg": number;
        "absolute_altitude_m": number;
        "relative_altitude_m": number;
    };
    homePosition: {
        "latitude_deg": number;
        "longitude_deg": number;
        "absolute_altitude_m": number;
        "relative_altitude_m": number;
    };
    battery: {
        "remaining_percent": number;
        "voltage_v": number;
    };
    armStatus: {
        "is_armed": boolean;
    };
    generalHealth: {
        "health_all_ok": boolean;
    };
    gpsHealth: {
        "fix_type": number;
    };
    health: {
        "gyrometer_calibration_ok": boolean;
        "accelerometer_calibration_ok": boolean;
        "magnetometer_calibration_ok": boolean;
        "level_calibration_ok": boolean;
        "local_position_ok": boolean;
        "global_position_ok": boolean;
        "home_position_ok": boolean;
    };
    flightMode: {
        "flight_mode": FLIGHT_MODE_PX4 | FLIGHT_MODE_ARDUPILOT;
    };
    eulerAngle: {
        "roll_deg": number;
        "pitch_deg": number;
        "yaw_deg": number;
    };
    positionVelocityNED: {
        "velocityNED": {
            "north_m_s": number;
            "east_m_s": number;
            "down_m_s": number;
        };
        "positionNED": {
            "north_m": number;
            "east_m": number;
            "down_m": number;
        };
    };
    cameraEulerAngle: {
        "roll_deg": number;
        "pitch_deg": number;
        "yaw_deg": number;
    };
    quaternion: {
        w: number;
        x: number;
        y: number;
        z: number;
    };
    subscribeProgress: {
        current: number;
        total: number;
    };
    timeStamp: number;
    winch?: WINCH_TELEMETRY_DATA;
};
export declare type TELEMETRY_SERVICE_DATA = {
    battery_state?: {
        percentage: number;
        voltage: number;
    };
    distance_from_home?: number;
    gimbal?: {
        roll: number;
        pitch: number;
        yaw: number;
    };
    height_above_takeoff?: number;
    gps_health?: number;
    heading?: number;
    velocity?: {
        x: number;
        y: number;
        z: number;
    };
    gps_position?: {
        latitude: number;
        altitude: number;
        longitude: number;
    };
    last_change_time?: number;
    lastHome?: ACCURATE_VISUAL_LANDING;
    owner?: OWNER;
    state?: {
        armed: boolean;
    };
    wayPoints?: {
        status: ACTION_TYPE;
    };
    keepAlive?: number;
    allowedId?: AIR_VEHICLE_ID;
    matrixDataCreationTime?: number;
    triggers: TRIGGER[];
    missionStatus?: ALGORITHM_STATUS;
    control: CONTROL;
    connectionRC: boolean;
    isForce?: boolean;
    flightCommandServiceStatus: SEND_STATUS;
    minEnergy?: number;
};
export declare type TRIGGER = {
    timeStamp: number;
    point: POINT3D;
};
export declare enum COPTER_TYPE {
    Ardupilot = "Ardupilot",
    PX4 = "PX4"
}
export declare enum FLIGHT_MODE_PX4 {
    UNKNOWN = 0,
    READY = 1,
    TAKEOFF = 2,
    HOLD = 3,
    MISSION = 4,
    RETURN_TO_LAUNCH = 5,
    LAND = 6,
    OFFBOARD = 7,
    FOLLOW_ME = 8,
    MANUAL = 9,
    ALTCTL = 10,
    POSCTL = 11,
    ACRO = 12,
    STABILIZED = 13,
    RATTITUDE = 14
}
export declare enum FLIGHT_MODE_PX4_ENUM {
    'num0' = "UNKNOWN",
    'num1' = "READY",
    'num2' = "TAKEOFF",
    'num3' = "HOLD",
    'num4' = "MISSION",
    'num5' = "RETURN_TO_LAUNCH",
    'num6' = "LAND",
    'num7' = "OFFBOARD",
    'num8' = "FOLLOW_ME",
    'num9' = "MANUAL",
    'num10' = "ALTCTL",
    'num11' = "POSCTL",
    'num12' = "ACRO",
    'num13' = "STABILIZED",
    'num14' = "RATTITUDE"
}
export declare enum FLIGHT_MODE_ARDUPILOT {
    MODE_STABILIZE = 0,
    MODE_ACRO = 1,
    MODE_ALT_HOLD = 2,
    MODE_AUTO = 3,
    MODE_GUIDED = 4,
    MODE_LOITER = 5,
    MODE_RTL = 6,
    MODE_CIRCLE = 7,
    MODE_LAND = 9,
    MODE_DRIFT = 11,
    MODE_SPORT = 13,
    MODE_FLIP = 14,
    MODE_AUTOTUNE = 15,
    MODE_POSHOLD = 16,
    MODE_BRAKE = 17,
    MODE_THROW = 18,
    MODE_AVOID_ADSB = 19,
    MODE_GUIDED_NOGPS = 20,
    MODE_SMART_RTL = 21,
    MODE_ENUM_END = 22,
    MODE_ENUM_TAKEOFF = 23,
    MODE_ENUM_HOLD = 24,
    MODE_ENUM_UNKNOWN = 25
}
export declare enum FLIGHT_MODE_ARDUPILOT_ENUM {
    'num0' = "MODE_STABILIZE",
    'num1' = "MODE_ACRO",
    'num2' = "MODE_ALT_HOLD",
    'num3' = "MODE_AUTO",
    'num4' = "MODE_GUIDED",
    'num5' = "MODE_LOITER",
    'num6' = "MODE_RTL",
    'num7' = "MODE_CIRCLE",
    'num9' = "MODE_LAND",
    'num11' = "MODE_DRIFT",
    'num13' = "MODE_SPORT",
    'num14' = "MODE_FLIP",
    'num15' = "MODE_AUTOTUNE",
    'num16' = "MODE_POSHOLD",
    'num17' = "MODE_BRAKE",
    'num18' = "MODE_THROW",
    'num19' = "MODE_AVOID_ADSB",
    'num20' = "MODE_GUIDED_NOGPS",
    'num21' = "MODE_SMART_RTL",
    'num22' = "MODE_ENUM_END",
    'num23' = "MODE_ENUM_TAKEOFF",
    'num24' = "MODE_ENUM_HOLD",
    'num25' = "MODE_ENUM_UNKNOWN"
}
export declare type POINT_PX4 = {
    latitude_deg: number;
    longitude_deg: number;
    relative_altitude: number;
    fly_through: boolean;
    acceptance_radius: number;
    speed: number;
    gimbal_pitch_deg: number;
    gimbal_yaw_deg: number;
    loiter_time: number;
    camera_action: number;
};
export declare enum CAMERA_ACTION {
    TAKE_PHOTO = /**< @brief Take single photo. */ 0,
    START_PHOTO_INTERVAL = /**< @brief Start capturing photos at regular intervals - see set_camera_photo_interval(). */ 1,
    STOP_PHOTO_INTERVAL = /**< @brief Stop capturing photos at regular intervals. */ 2,
    START_VIDEO = /**< @brief Start capturing video. */ 3,
    STOP_VIDEO = /**< @brief Stop capturing video. */ 4,
    NONE = 5 /**< @brief No action. */
}
export declare enum STATUS_TEXT_TYPE {
    "num0" = "INFO",
    "num1" = "WARNING",
    "num2" = "CRITICAL"
}
export declare type SHOOT_ATTRIBUTES = {
    trigger: TRIGGER_SENSOR;
    triggerValue: number;
};
export declare enum TRIGGER_SENSOR {
    triggerByTime = "TriggerByTime",
    triggerByDistance = "TriggerByDistance"
}
export declare type XYZ = {
    "x": number;
    "y": number;
    "z": number;
};
export declare type COMMAND_LIST = [
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number
];
export declare type COMMAND_PARAMETER = [
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number
];
export declare type WAYPOINT_ITEM = {
    "index": number;
    "latitude": number;
    "longitude": number;
    "altitude": number;
    "damping": number;
    "yaw": number;
    "gimbalPitch": number;
    "turnMode": number;
    "hasAction": number;
    "actionTimeLimit": number;
    "actionNumber": number;
    "actionRepeat": number;
    "commandList": COMMAND_LIST;
    "commandParameter": COMMAND_PARAMETER;
};
export declare type WAYPOINT_UPLOAD = {
    "waypoints": WAYPOINT_ITEM[];
    "maxVelocity": number;
    "idleVelocity": number;
    "finishAction": number;
    "executiveTimes": number;
    "yawMode": number;
    "traceMode": number;
    "RCLostAction": number;
    "gimbalPitch": number;
};
export declare enum ACTION_TYPE {
    start = 0,
    stop = 1,
    pause = 2,
    resume = 3,
    undefined = -1
}
export declare enum CONTROL {
    pilot = "pilot",
    onboard = "onboard",
    na = "na"
}
export declare enum typesUDP {
    joystick = "joystick",
    commandService = "commandService",
    rthService = "rthService",
    none = "none",
    movexy = "movexy"
}
export declare type JOYSTICK_CONTROL = {
    type: typesUDP.joystick;
    vx: number;
    vy: number;
    vz: number;
    yaw: number;
    date: number;
};
export declare type CPP_force = {
    date: number;
    velocityAndYawRateCtrl: boolean;
    vx: number;
    vy: number;
    vz: number;
    yaw: number;
    type?: typesUDP;
};
export declare type CONTROL_AND_POSITION = {
    isOnGround: boolean;
    isOnBoardControl: boolean;
};
export declare type VISUAL_LANDING_DATA = {
    distance_in_cm: number;
    x_direction: number;
    y_direction: number;
    is_success: boolean;
};
export declare type ACCURANCE_LAND = {
    lat?: number;
    lon?: number;
    horizontalSpeed: number;
    maxErrorDistance: number;
    minAltitude: number;
    minAltitudeTolerance: number;
    verticalSpeed: number;
    altOffset: number;
    visualLanding: boolean;
    altForStartLanding: number;
};
export declare type ROTATION_VEHICLE_CPP = {
    yaw: number;
};
