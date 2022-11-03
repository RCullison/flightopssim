import { TELEMETRY_SERVICE_DATA } from "./ob-node-types";
export declare type POINT = [number, number];
export declare type POINT3D = [number, number, number?];
export declare enum LOG_LEVEL {
    ERROR = "ERROR",
    INFO = "INFO",
    WARNING = "WARNING",
    CRITICAL = "CRITICAL"
}
export declare type LOG_DATA = {
    serviceName: string;
    logLevel: LOG_LEVEL;
    data: any;
};
export declare type ASYNC_RESPONSE<T = any> = {
    success: boolean;
    message?: string[];
    description?: string;
    data?: T;
};
export declare type MAP<T = any> = {
    [key: string]: T;
};
export declare type RESPONSE<T = {}> = T & {
    success: boolean;
    message: Array<string>;
    step?: number;
    additionalData?: {};
};
export declare type ROUTE_POLYLINE = {
    speed: number;
    yaw: number;
    toBody: boolean;
    actionOnRouteEnd: ACTION_ON_ROUTE_END.Hover;
};
export declare type POINT_WASP_DATA = {
    point: any;
    waspAzimuth: 0;
    taskId?: string;
};
export declare type TASK_ROUTE_DATA = {
    polyline: boolean;
    circles: boolean;
    polylineLatLngs: {
        lat: number;
        lng: number;
    }[];
    taskId?: string;
    routeId?: string;
    sensorType?: string;
    actionOnRouteEnd?: ACTION_ON_ROUTE_END;
    waspAzimuth?: number;
};
export declare type LOGIN_UI = {
    name: string;
    password: string;
    token?: string;
};
export declare type CARTESIAN3 = {
    x: number;
    y: number;
    z: number;
};
export declare type GEOMETRY = {
    coordinates: POINT | POINT3D;
    type?: string;
};
export declare enum BOOLEAN_NUMBER {
    true = 1,
    false = 0
}
export declare type IS_ARMED = {
    armed: boolean;
};
export declare type FLYT_STATE = IS_ARMED & {
    mode?: string;
    connected?: boolean;
};
export declare type BATTERY_STATUS = {
    percentage: number;
};
export declare type AIR_VEHICLE_SERVICE_STATES = {
    onBoard: boolean;
    flytBase: boolean;
    network: boolean;
};
export declare type FAIL_SAFE = {
    RHBat: number;
    LandBat: number;
    EmergencyLandHeight: number;
};
export declare type RETURN_HOME_STATUS = {
    returnHome: boolean;
    landing: boolean;
};
export declare enum OWNER_TYPE {
    droneService = "droneService",
    onBoard = "onBoard",
    gcs = "gcs",
    emergency = "emergency",
    safe = "safe"
}
export declare type REQUEST_API_SET_HOME = {
    lat: number;
    lon: number;
    alt: number;
    set_current: boolean;
};
export declare enum MISSION_SENSOR {
    Sensor1 = "Sensor1",
    WASP = "WASP"
}
export declare enum ACTIONS_ON_ROUTE_COMMAND {
    Start = "Start",
    Pause = "Pause",
    Resume = "Resume",
    Stop = "Stop"
}
export declare enum ALGORITHM_STATUS {
    Start = "Started",
    Pause = "Paused",
    Resume = "resumeAlgorithm",
    Stop = "Stopped",
    InProcess = "InProcess",
    ExternalPause = "ExternalPause",
    finished = "finished",
    Unknown = "Unknown"
}
export declare type AUTONOMOUS_TO_ONBOARD = {
    type: TASK_TYPE;
    actionPoints: {
        id: string;
        geoPoint: {
            lat: number;
            lon: number;
            alt: number;
        };
        relativeAlt: number;
        relativeHeadingType: string;
        heading: number;
        headingType: string;
        velocity: number;
        actions: string[];
    }[];
    id: string;
};
export declare enum ACTION_ON_ROUTE_END {
    Loiter = "Loiter",
    Hold = "Hold",
    Hover = "Hover"
}
export declare enum YAW_MODE {
    auto = 0,
    firstYaw = 1,
    targetYaw = 3
}
export declare type ROUTE_POINT_DATA_DRONESERVICE = GEOPOINT & {
    altitude: number;
    velocity: number;
    yaw: number;
    ToBody: boolean;
};
export declare type ROUTE_DATA_FOR_DRONESERVICE = {
    id?: string;
    AltFromDrone: boolean;
    yaw_mode: YAW_MODE;
    points: ROUTE_POINT_DATA_DRONESERVICE[];
};
export declare type ROUTE_DATA_FOR_ONBOARD = {
    action_on_finish: number;
    action_on_rc_lost: number;
    gimbal_pitch_mode: number;
    idle_velocity: number;
    mission_exec_times: number;
    damping_distance: number;
    target_gimbal_pitch: number;
    turn_mode: number;
    has_action: number;
    action_time_limit: number;
    action_repeat: number;
    trace_mode: number;
    velocity_range: number;
    yaw_mode: number;
    points: ROUTE_POINT_DATA_DRONESERVICE[];
};
export declare type CREDENTIALS = {
    name: string;
    password: string;
} | {};
export declare type GIMBAL = {
    roll?: number;
    pitch: number;
    yaw: number;
};
export declare enum TARGET_TYPES {
    commint = "Commint",
    elint = "elint",
    drone = "drone"
}
export declare enum AIR_VEHICLE_MODE {
    manual = "Manual",
    auto = "auto",
    rh = "rh"
}
export declare enum AIR_VEHICLE_STATUS {
    NotActive = "Not Active",
    Ready = "Ready",
    ReadyAllocated = "Ready Allocated",
    TakeOff = "Take Off",
    ReturnHome = "Return Home",
    Landing = "Landing",
    OnMission = "On Mission",
    Observing = "Observing",
    Manual = "Manual",
    ReadyOnAir = "Ready On Air",
    ReadyOnAirAllocated = "Ready On Air Allocated",
    DroneStatusDS = "External Control"
}
export declare enum BASIC_AIR_VEHICLES_STATUSES {
    ExtRH = "External RH",
    ExtLanding = "External Landing",
    Landing = "Landing",
    ReturnHome = "ReturnHome",
    OnGround = "OnGround",
    NA = "NA"
}
export declare enum LOITER_PATTERN_STATUS {
    notActive = "Not Active",
    paused = "Paused",
    waiting = "Waiting at Start Point",
    stoped = "Stoped",
    running = "Running",
    started = "Started",
    hotPointError = "hotPoint/uploadAndStart command error"
}
export declare enum WAYPOINTS_PATTERN_STATUS {
    notActive = "Not Active",
    paused = "Paused",
    waiting = "Waiting at Start Point",
    stopped = "Stopped",
    running = "Running",
    started = "Started",
    waypointsError = "wayPoints/uploadAndStart command error"
}
export declare enum AIR_VEHICLE_FLY_STATUS {
    wayPoint = "wayPoint",
    hotPoint = "hotPoint",
    stop = "stop"
}
export declare type ALTITUDE_SLOT = {
    altitude: number;
    ip: string;
};
export declare type UIJOYSTICKREQUEST = {
    id: ID_TYPE;
    moveX: number;
    moveY: number;
};
export declare type DRONE_JOYSTICK_CAMERA_REQUEST = {
    id: ID_TYPE;
    cdmeraMoveY: number;
    yaw_rate: number;
};
export declare type DRONEJOYSTICKFLIGHTREQUEST = {
    id: ID_TYPE;
    vy: number;
    vx: number;
};
export declare enum COMMINT_MISSION_TYPES {
    Tactical = "Tactical",
    Cellular = "Cellular",
    DroneRC = "DroneRC"
}
export declare enum COMMINT_MISSION_OPER_TYPE {
    Stby = "Stby",
    Scan = "Scan"
}
export declare enum COMMINT_MISSION_STATUS {
    Off = "Off",
    Stby = "Stby",
    Scanning = "Scanning",
    Error = "Error",
    Warning = "Warning",
    empty = "-"
}
export declare type MISSION_PARAMS = {
    StartFreq: number;
    StopFreq: number;
    Duration: number;
    Repeats: number;
    Priority: number;
};
export declare type PARAMS_TABLE_ENTITY = {
    Params: MISSION_PARAMS;
};
export declare type SCRAMBLING_CODE_ENTITY = {
    ScramblingCode: number;
};
export declare type TABLE_DATA<T> = {
    data: Array<T>;
    columns: Array<string>;
    columnNames: Array<string>;
};
export declare type MISSION_DATA = {
    MissionType: COMMINT_MISSION_TYPES;
    table: TABLE_DATA<MISSION_PARAMS | SCRAMBLING_CODE_ENTITY>;
};
export declare type MISSION_SETTINGS = {
    [key in COMMINT_MISSION_TYPES]: MISSION_DATA;
};
export declare enum AIR_VEHICLE_TYPES {
    alpha = "alpha"
}
export declare enum SENSOR_TYPE {
    Visint = "Visint",
    Commint = "Commint",
    Sensor1 = "Sensor1",
    Sensor2 = "Sensor2",
    Sensor3 = "Sensor3",
    Sensor4 = "Sensor4"
}
export declare type VALIDATION_OBJ = {
    success: boolean;
    message: string;
};
export declare enum GIMBAL_TYPES {
    ThirdEye = "ThirdEye",
    Ronin = "Ronin",
    IG = "IG"
}
export declare type GIMBAL_COMMAND = GIMBAL_COMMAND_DATA & {
    sensorId: SENSOR_ID;
    Action: GIMBAL_ACTIONS;
};
export declare enum GIMBAL_MOVE {
    Up = "Up",
    Down = "Down",
    Left = "Left",
    Right = "Right"
}
export declare enum GIMBAL_ZOOM {
    In = "In",
    Out = "Out"
}
export declare enum GIMBAL_ACTIONS {
    GimbalUp = "GimbalUp",
    GimbalDown = "GimbalDown",
    GimbalLeft = "GimbalLeft",
    GimbalRight = "GimbalRight",
    ZoomIn = "ZoomIn",
    ZoomOut = "ZoomOut",
    AnalyticsStart = "AnalyticsStart",
    AnalyticsStop = "AnalyticsStop",
    Day = "Day",
    Night = "Night"
}
export declare type GIMBAL_COMMAND_DATA = GIMBAL_ANGLES & {
    sensorId?: SENSOR_ID;
    yawRef?: YAW_REF;
    action?: string;
    roll?: number;
    isLookAtTarget?: LOOK_AT_TARGET_STATE;
};
export declare type GIMBAL_ANGLES = {
    pitch?: number;
    yaw?: number;
};
export declare type GIMBAL_TELEMETRY = {
    sensorId?: SENSOR_ID;
    pitch?: number;
    yaw?: number;
    yawRef?: YAW_REF;
    action?: string;
    roll?: number;
    sensorVector?: [GEOPOINT, GEOPOINT];
};
export declare enum YAW_REF {
    Body = "Body",
    North = "North"
}
export declare enum SOCKET_IO_CLIENT_TYPES {
    webServer = "webServer",
    gimbal = "gimbal",
    pws = "pws",
    IG = "IG"
}
export declare enum ALGORITHM_TYPES_COMMAND {
    All = "All"
}
export declare enum TASK_TYPE {
    Route = "Route",
    Point = "Point",
    WASP = "WASP",
    Dynamic = "Dynamic",
    Security = "Security",
    AutomonousRoute = "AutomonousRoute",
    NoGpsRoute = "NoGpsRoute"
}
export declare type TASK = SITE_ID_OBJ & {
    taskId?: TASK_ID;
    routeId?: string;
    name?: string;
    type?: TASK_TYPE;
    status?: ALGORITHM_STATUS;
    totalValue?: number;
    sensorType?: string;
    actionOnRouteEnd?: ACTION_ON_ROUTE_END;
    waspAzimuth?: number;
    airVehicleParameters?: {
        airVehicleId: AIR_VEHICLE_ID;
        status: AIR_VEHICLE_STATUS;
        sensorIp: string;
    }[];
    sensorIp?: string;
};
export declare type TASK_PROCESSING_APP = {
    taskId: TASK_ID;
    sensorIp: string;
    name: string;
    systemStatus: SYSTEM_STATUS;
    airVehicleStatuses: AIR_VEHICLE_STATUS;
    type: TASK_TYPE.WASP;
    finishShowParameters: FINISH_SHOW_PARAMETERS;
    airVehicleParameters?: {
        airVehicleId: AIR_VEHICLE_ID;
        status: AIR_VEHICLE_STATUS;
        sensorIp: string;
    }[];
    styles: {
        borderColor: string;
        fillColor: string;
        colorStatusAV: string;
        textColorStatusAV: string;
    };
};
export declare type FINISH_SHOW_PARAMETERS = {
    waspPolygon: WASP_POLYGON;
};
export declare type WASP_POLYGON = {
    pointsArray: POINT[];
    arrow: POINT[];
};
export declare type SETTINGS = {
    landingDirection: number;
    minAlt: number;
    altGaps: number;
    maxAlt: number;
    RHminEnergy: number;
    OBminEnergy: number;
    NoComRhTime: number;
};
export declare type SITE_GRID = SITE_ROUTE_SERVICE & {
    grid: any;
};
export declare type SITE_ROUTE_SERVICE = {
    northWest: POINT;
    cellSize: POINT;
    matrixNFZSafetyFactor: boolean[][];
    flyPolygon: POINT[][][];
    inverseFlyPolygon: POINT[][][];
    id: number | string;
    perimeter?: POINT[];
};
export declare type POLYGON_POINTS = {
    polygonPoints: POINT[];
};
export declare enum NFZ_TYPE {
    static = "static",
    dynamic = "dynamic",
    external = "external",
    temporary = "temporary"
}
export declare type NFZ_DATA = POLYGON_POINTS & SITE_ID_OBJ & {
    id?: ID_TYPE;
    name: string;
    maxAlt: number;
    isLimitAlt: boolean;
    allowedId: AIR_VEHICLE_ID;
    type: NFZ_TYPE;
    styles: MAP<string>;
};
export declare type NFZ_DATA_DYNAMIC = NFZ_DATA & ALLOWED_ID;
export declare type ALLOWED_ID = {
    allowedId: AIR_VEHICLE_ID;
};
export declare type PERIMETER_DATA = POLYGON_POINTS & ID_OBJ;
export declare type MATRIX_DATA = ID_OBJ & {
    matrixNFZ: boolean[][];
    matrixNFZSafetyFactor: boolean[][];
    cellSize: [number, number];
    northWest: POINT;
    creationTime: number;
};
export declare type MATRIX_DATA_RS = MATRIX_DATA & {
    grid: any;
};
export declare type BOUND_DATA = ID_OBJ & {
    northWest: POINT;
    southWEST: POINT;
    northEast: POINT;
    boundSize: [number, number];
};
export declare type SITE_TO_SAVE = {
    perimeter: POINT[];
    NFZ_array: NFZ_DATA[];
};
export declare type PERIMETER_TO_SAVE = ID_OBJ & SITE_ID_OBJ & {
    polygonPoints: POINT[];
};
export declare type CARTOGRAPHIC_DATA = {
    perimeter: PERIMETER_DATA;
    NFZ_static_MAP: MAP<NFZ_DATA>;
    NFZ_dynamic_MAP_MAP: MAP<MAP<NFZ_DATA>>;
};
export declare enum OBJ_VALUE {
    blank = "blank"
}
export declare type GS_TO_WS_GIMBAL_OBJ = {
    sensorId: SENSOR_ID;
    pitch: number;
    yaw: number;
};
export declare type WS_TO_UI_GIMBAL_OBJ = {
    sensorId: SENSOR_ID;
    isLookAtTarget: LOOK_AT_TARGET_STATE;
    pitch: number;
    yaw: number;
};
export declare type GS_WS_DATA = {
    gimbalsList: Array<GS_TO_WS_GIMBAL_OBJ>;
};
export declare enum UI_GIMBAL_ACTIONS {
    LookAtTargetOff = "LookAtTargetOff",
    LookAtTargetOn = "LookAtTargetOn"
}
export declare enum LOOK_AT_TARGET_STATE {
    NotActive = "NotActive",
    Auto = "Auto",
    Manual = "Manual"
}
export declare type JOYSTICK_DATA = {
    sensorId: SENSOR_ID;
    moveX: number;
    moveY: number;
};
export declare type CHECK_CELLS = {
    cell: POINT;
    isFree: boolean;
};
export declare type DOUBLE_CHECK_CELLS = [CHECK_CELLS, CHECK_CELLS];
export declare type RANGE = {
    min: number;
    max: number;
};
export declare type RELEASE_TASK = {
    airVehicleId: AIR_VEHICLE_ID;
};
export declare const NOT_REQUIRED = "NOT_REQUIRED";
export declare enum SYSTEM_STATUS {
    Ok = "Ok",
    Warning = "Warning",
    Error = "Error",
    Off = "Off"
}
export declare type SENSOR_DATA_PWS = {
    sensorIp: string;
    airVehicleIp: string;
    status: AIR_VEHICLE_STATUS;
    taskId: TASK_ID | OBJ_VALUE;
};
export declare type COMPUTE_LENGTH_UTIL_DATA = {
    point: POINT;
    length: number;
};
export declare type ZIP_DATA<T = any> = {
    zip?: string;
    json?: T;
};
export declare enum DETECTION_CLASS {
    Vehicle = "Vehicle",
    human = "human",
    unknown = "unknown"
}
export declare enum DETECTION_SUB_CLASS {
    truck = "truck"
}
export declare enum CONFIDENCE {
    excellent = "excellent",
    good = "good",
    poor = "poor",
    catastrophe = "catastrophe"
}
export declare type ID_TYPE = string;
export declare type SENSOR_ID = ID_TYPE;
export declare type TASK_ID = ID_TYPE;
export declare type AIR_VEHICLE_ID = ID_TYPE;
export declare type SITE_ID = ID_TYPE | number;
export declare type ID_OBJ = {
    id: ID_TYPE;
};
export declare type SITE_ID_OBJ = {
    siteId?: SITE_ID;
};
export declare type ZIP_REQUEST<T> = ZIP_DATA & T;
export declare type DYNAMIC_NFZ_ID = ID_OBJ & ALLOWED_ID;
export declare type ROUTE = {
    route: POINT3D[];
};
export declare type COMPUTE_ROUTE = ROUTE & {
    id?: ID_TYPE;
};
export declare type DEVIATION = {
    size: number;
    x: number;
    y: number;
};
export declare type COMPUTE_ROUTE_PARAMETERS = {
    allowedId: AIR_VEHICLE_ID;
    matrixPoint: POINT;
    targetPoint: POINT;
    callback: Function;
};
export declare type CAMERA_PARAMETERS = GEOPOINT & {
    height: number;
    pitch: number;
    sumYaw: number;
    roll: number;
    heading: number;
    yaw: number;
};
export declare type LOCATION_PARAMETERS = GEOPOINT & {
    height: number;
    heading: number;
};
export declare type GIMBAL_PARAMETERS = {
    pitch: number;
    yaw: number;
    roll: number;
    cameraViewAngle?: number;
};
export declare type LOCK_DATA = {
    isLock: boolean | string;
    timestamp: number;
};
export declare type FROM_TO<T = (POINT | POINT3D)> = [T, T];
export declare type FROM_TO_3D = [POINT3D, POINT3D];
export declare type GEOPOINT = {
    latitude: number;
    longitude: number;
};
export declare type GEOPOINT3D = GEOPOINT & {
    altitude: number;
};
export declare type GEOPOINT_SHORT = {
    lat: number;
    lon: number;
};
export declare type GEOPOINT3D_SHORT = GEOPOINT_SHORT & {
    alt: number;
};
export declare type GEOPOINT_3D_SHORT_VELOCITY = GEOPOINT3D_SHORT & {
    velocity: number;
};
export declare type GEOPOINT_3D_SHORT_STATUS = GEOPOINT3D_SHORT & {
    status: POINT_STATE;
    lastUpdateStatus: number;
};
export declare type VECTOR = [POINT3D, POINT3D];
export declare type CARTESIAN2 = {
    x: number;
    y: number;
};
export declare type RANGE_CARTESIAN2 = {
    minX: number;
    maxX: number;
    minY: number;
    maxY: number;
};
export declare type DTM_GRAPH = {
    groundASL_Cartesian2: CARTESIAN2[];
    routeASL_Cartesian2: CARTESIAN2[];
    locationDrone?: CARTESIAN2;
    graphRange: RANGE_CARTESIAN2;
    airVehicleId?: string;
    taskId?: string;
};
export declare type DTM_ROUTE_DATA = ROUTE & {
    groundASL: POINT3D[];
};
export declare type DTM_ROUTE_FULL_DATA = ROUTE & DTM_GRAPH & {
    groundASL: POINT3D[];
};
export declare type COMPUTE_ROUTE_DIRECTION_REQUEST = COMPUTE_ROUTE_REQUEST & {
    direction: number;
    lastLegLength?: number;
};
export declare type CARTOGRAPHIC_TO_MATRIX = {
    allowedId: AIR_VEHICLE_ID;
    point: POINT | POINT3D;
    height?: number;
};
export declare type COMPUTE_ROUTE_REQUEST = COMPUTE_ROUTE_ALTITUDE_PARAMETERS & {
    fromTo: FROM_TO_3D;
    staticPath?: POINT[];
    allowedId: AIR_VEHICLE_ID;
    maxLegLength?: number;
    height?: number;
    isAGL?: boolean;
    takeOffAslHeight: number;
};
export declare type COMPUTE_ROUTE_ALTITUDE_PARAMETERS = {
    altitudeRange?: RANGE;
    ASL_Max?: number;
    slope?: RANGE;
};
export declare type COMPUTE_ROUTE_BYPASS_RELIEF = COMPUTE_ROUTE_ALTITUDE_PARAMETERS & {
    allowedId: AIR_VEHICLE_ID;
    cartographicPath: (POINT | POINT3D)[];
};
export declare type CELL_PARAMETERS = {
    northWest: POINT;
    northWestCropped?: POINT;
    cellSize: [number, number];
};
export declare type SITE_METADATA = ID_OBJ & CELL_PARAMETERS & {
    creationTime: number;
    heightRange: RANGE;
    matrixSize: CARTESIAN2;
    cartographicFactor?: CARTESIAN2;
};
export declare type SITE_METADATA_GRID = SITE_METADATA & {
    grid: any;
};
export declare type MATRIX_DATA_3D = SITE_METADATA & {
    matrixNFZ_MAP: MAP<MAP<number>>;
};
export declare type MATRIX_DATA_3D_RS = MATRIX_DATA_3D & {
    externalMatrixHeightMAP: MAP<BOOLEAN_NUMBER[][]>;
    grid: MAP<any>;
};
export declare type POINT_ON_PATH = {
    point: POINT | POINT3D;
    distance: number;
    height: number;
    isPointFixed: boolean;
    isHeightFixed: boolean;
    obstacleId?: ID_TYPE;
    index?: number;
};
export declare type POINT_INDEXED = {
    point: POINT_ON_PATH;
    index: number;
};
export declare type ROUTE_AIR_VEHICLE = {
    allowedId: AIR_VEHICLE_ID;
    height?: number;
};
export declare type CARTOGRAPHIC_ARR_TO_MATRIX = {
    allowedId: AIR_VEHICLE_ID;
    points: (POINT | POINT3D)[];
};
export declare type TOP_LEFT_BOTTOM_RIGHT = {
    topLeft: (POINT | POINT3D);
    bottomRight: (POINT | POINT3D);
};
export declare type POI = {
    latitude: number;
    longitude: number;
    altitude: number;
    id: number;
    name: string;
    delay: number;
    speed: number;
};
export declare type ROUTE_DTM = DTM_ROUTE_FULL_DATA & {
    path: POINT3D[];
    maxDtmHeightFromLauncherPoint: number;
};
export declare type ALONG_GEOPOINT3D = {
    point: GEOPOINT3D;
    distance: number;
    index: number;
};
export declare type FIX_POINT_DATA = {
    point?: POINT_ON_PATH;
    index?: number;
    isFixed: boolean;
};
export declare type FIX_ROUTE_REQUEST = {
    path: POINT_ON_PATH[];
    maxHeight: number;
    slope: RANGE;
    groundPath: POINT3D[];
};
export declare type FIX_ROUTE_OBJ = {
    path: POINT_ON_PATH[];
    maxHeight: number;
    slope: RANGE;
    pathMap: MAP<POINT_INDEXED>;
    pathHeightSorted: POINT_INDEXED[];
    pathOptimized: CARTESIAN2[];
    groundPath: POINT3D[];
};
export declare type PRE_COMPRESSD_MATRIX_DATA_3D = SITE_METADATA & {
    matrixNFZ_MAP_COMPRESS: {};
};
export declare enum LANDING_TYPE {
    NORMAL = "normal",
    OPTIC = "optic",
    ACCURATE = "accurate",
    EMERGENCY = "emergency"
}
export declare type COMMAND_TAKEOFF = HOME_POSITION & {
    id?: ID_TYPE;
    absHeight?: number;
    corridorPoint?: GEOPOINT;
    landingType: LANDING_TYPE;
    homeData?: {
        isAGL: boolean;
        takeoffASLHeight?: number;
        landASLHeight?: number;
        altitudeRange: RANGE;
        ASL_Max: number;
        slope: RANGE;
        emergencyRHHeight?: number;
        homePoint?: {
            geometry: {
                type: string;
                coordinates: [
                    number,
                    number,
                    number
                ];
            };
        };
    };
    onboardRHAlt?: number;
    timeToOnboardRHSec?: number;
    sensors: SENSOR_OB[];
};
export declare type SENSOR_OB = {
    sensorId: string;
    type: MAPI_SENSOR_TYPE | string;
};
export declare enum MAPI_SENSOR_TYPE {
    FPVCamera = "FPVCamera",
    DPVCamera = "DPVCamera",
    Winch = "Winch",
    Lidar = "Lidar"
}
export declare type HOME_POSITION = {
    homeLocation: {
        longitude: number;
        latitude: number;
        altitude: number;
        REAL_TAKEOFF_ASL: number;
        PX_TAKEOFF_ASL: number;
        REAL_LAND_ASL: number;
        PX_LAND_ASL: number;
        isChangedHome: boolean;
    };
    prevHomeLocation?: {
        longitude: number;
        latitude: number;
        altitude: number;
        REAL_TAKEOFF_ASL: number;
        PX_TAKEOFF_ASL: number;
        REAL_LAND_ASL: number;
        PX_LAND_ASL: number;
    };
};
export declare type ACCURATE_VISUAL_LANDING = COMMAND_TAKEOFF & HOME_POSITION & {
    emergencyPosition?: {
        latitude: number;
        longitude: number;
    };
    horizontalSpeed?: number;
    maxErrorDistance?: number;
    minAltitude?: number;
    minAltitudeTolerance?: number;
    verticalSpeed?: number;
    altOffset?: number;
    altForVisualLanding?: number;
    maxVerticalSpeed?: number;
    headingRelativeNorth?: number;
    operationalAlt?: number;
    isCorridor?: boolean;
    visualLandingTimeoutSecond?: number;
};
export declare type ACCURATE_VISUAL_LANDING_DEDAULT_VALUES = {
    "horizontalSpeed": number;
    "maxErrorDistance": number;
    "minAltitude": number;
    "minAltitudeTolerance": number;
    "verticalSpeed": number;
    "altOffset": number;
    "altForVisualLanding": number;
    "maxVerticalSpeed": number;
};
export declare type NORMAL_LANDING = COMMAND_TAKEOFF;
export declare type VISUAL_LANDING = COMMAND_TAKEOFF & {
    emergencyPosition: GEOPOINT3D;
    landingSurfaceHeight: number;
    visualLandingTimeoutSecond: number;
    horizontalSpeed: number;
    visualMaxTolerance: number;
    minAltitudeTolerance: number;
    verticalSpeed: number;
    startAltForVisualLanding: number;
    minAltForVisualLanding: number;
    maxVerticalSpeed: number;
    headingRelativeNorth: number;
};
export declare type ACCURATE_LANDING = COMMAND_TAKEOFF & {
    horizontalSpeed: number;
    accurateMaxTolerance: number;
    minAltitudeTolerance: number;
    verticalSpeed: number;
    altOffset: number;
    startAltForAccurateLanding: number;
    minAltForAccurateLanding: number;
    maxVerticalSpeed: number;
};
export declare type ACCURATE_POSITION_MAX_TOLERANCE_HORIZONTAL_SPEED = {
    longitude: number;
    latitude: number;
    horizontalSpeed: number;
    maxErrorDistance: number;
};
export declare type FORCE_DATA_CPP = {
    date?: number;
    velocityAndYawRateCtrl: boolean;
    vx: number;
    vy: number;
    vz: number;
    yaw: number;
    isGps?: boolean;
};
export declare enum REL_TYPE {
    North = "North",
    Body = "Body"
}
export declare type AUTONOMOUS_POINT = {
    id: string;
    geoPoint: GEOPOINT_SHORT;
    relativeAlt: number;
    relativeHeadingType: REL_TYPE;
    heading: number;
    headingType: HEADING_TYPE;
    velocity: number;
    POI?: {
        geoPoint: GEOPOINT3D_SHORT;
    };
    actions: AUTONOMOUS_ACTION[];
};
export declare enum ACTION_FOR {
    Vehicle = "Vehicle",
    Gimbal = "Gimbal",
    Camera = "Camera",
    Sensor = "Sensor",
    Drop = "Drop",
    IR_Lock = "IR_Lock",
    Winch = "Winch"
}
export declare enum ACTION_TYPE {
    maneuver = "maneuver",
    Scan = "Scan",
    Stow = "Stow",
    Move = "Move",
    ExternalAction = "ExternalAction",
    IR_Lock = "IR_Lock",
    Winch = "Winch",
    Drop = "Drop"
}
export declare type AUTONOMOUS_ACTION = {
    actionId: string;
    actionFor: ACTION_FOR;
    type: ACTION_TYPE;
    startConditions: ACTION_CONDITIONS;
    endConditions: ACTION_CONDITIONS;
    action: ACTION_PARAMETERS;
};
export declare enum WAYPOINTS_ACTION {
    Pause = "Pause",
    Resume = "Resume",
    Stop = "Stop",
    Start = "Start",
    ChangeAltitude = "ChangeAltitude",
    Rotate = "Rotate"
}
export declare type SCAN_ACTION_PARAMETERS = {
    startScanYaw: number;
    finishScanYaw: number;
    relType: REL_TYPE;
    pitch: number;
};
export declare type WAYPOINTS_ACTION_PARAMETERS = {
    waypointsMissionAction: WAYPOINTS_ACTION;
    requestedAltitude: number;
    requestedAzimuth: number;
};
export declare type IR_LOCK_ACTION_PARAMETERS = {
    azimuth: number;
    requestedAltitude: number;
    dropGeoPoint: GEOPOINT3D_SHORT;
};
export declare type WINCH_ACTION_PARAMETERS = {
    startAltitude: number;
    requestedPackageHeight: number;
};
export declare type DROP_ACTION_PARAMETERS = {};
export declare type ACTION_PARAMETERS = SCAN_ACTION_PARAMETERS | WAYPOINTS_ACTION_PARAMETERS | IR_LOCK_ACTION_PARAMETERS | WINCH_ACTION_PARAMETERS | DROP_ACTION_PARAMETERS;
export declare enum ACTION_CONDITIONS_FIELDS {
    velocity = "velocity",
    altitude = "altitude",
    heading = "heading",
    pointReached = "pointReached",
    timeFromRelativeAction = "timeFromRelativeAction",
    relWithAction = "relWithAction",
    relativeActionId = "relativeActionId"
}
export declare type ACTION_CONDITIONS = {
    [ACTION_CONDITIONS_FIELDS.velocity]?: number;
    [ACTION_CONDITIONS_FIELDS.altitude]?: number;
    [ACTION_CONDITIONS_FIELDS.heading]?: number;
    [ACTION_CONDITIONS_FIELDS.pointReached]?: boolean;
    [ACTION_CONDITIONS_FIELDS.timeFromRelativeAction]?: number;
    [ACTION_CONDITIONS_FIELDS.relWithAction]?: REL_WITH_ACTION;
    [ACTION_CONDITIONS_FIELDS.relativeActionId]?: string;
};
export declare enum REL_WITH_ACTION {
    startToStart = "startToStart",
    endToStart = "endToStart",
    startToEnd = "startToEnd",
    endToEnd = "endToEnd"
}
export declare type POINT_CONDITION = {
    velocityHorizontal: number;
    velocityVertical: number;
    reachedPoint: GEOPOINT3D_SHORT;
};
export declare enum POINT_STATE {
    StartWaiting = "StartWaiting",
    StoppedByTimeOut = "StoppedByTimeOut",
    ArrivedToPoint = "ArrivedToPoint",
    None = "None"
}
export declare type GO_TO_HEIGHT_REQUEST = {
    height: number;
    maxVerSpeed?: number;
};
export declare type ROTATE_REQUEST = {
    requestedAzimuth: number;
    maxAngularSpeed?: number;
};
export declare type VEHICLE_SCAN = {
    startScanYaw: number;
    finishScanYaw: number;
    relType: REL_TYPE;
};
export declare enum HEADING_TYPE {
    Auto = "Auto",
    Fixed = "Fixed",
    Manual = "Manual",
    Custom = "Custom",
    POI = "POI",
    GimbalYawFollow = "GimbalYawFollow"
}
export declare type AUTONOMUS_ROUTE = {
    type: TASK_TYPE;
    actionPoints: AUTONOMOUS_POINT[];
    id: string;
    landingPoints: LANDING_POINT[];
};
export declare type LANDING_POINT = {
    id: string;
    location: {
        longitude: number;
        latitude: number;
        altitude: number;
    };
    "name": string;
    "landingSurfaceHeight": number;
};
export declare type ROCK_SEVEN_TELEMETRY = {
    imei: string;
    momsn: string;
    transmit_time: string;
    iridium_latitude: string;
    iridium_longitude: string;
    iridium_cep: string;
    data: string;
};
export declare type ROCK_SEVEN_EXPECTED_DATA = {
    imei: string;
    username: string;
    password: string;
    data: string;
    flush?: ROCK_SEVEN_FLUSH;
};
export declare enum ROCK_SEVEN_FLUSH {
    flush = "yes"
}
export declare type PARAMS_TYPE = {
    filed: string;
    type: string;
};
export declare enum PARAMS_FIELDS_TYPE {
    float = "float",
    string = "string",
    int16 = "int16",
    uint16 = "uint16",
    uint8 = "uint8",
    uint32 = "uint32",
    int8 = "int8"
}
export declare enum COMMAND_ENUM {
    land = 0,
    returnHome = 1,
    flyTo = 2,
    telemetry = 3
}
export declare enum COMMAND_ACK_ENUM {
    land_s = 0,
    land_f = 1,
    returnHome_s = 2,
    returnHome_f = 3,
    flyTo_s = 4,
    flyTo_f = 5
}
export declare type ROCK_SEVEN_DRONE_TELEMETRY = {
    air_vehicle_id?: number;
    battery_voltage?: number;
    height_above_takeoff?: number;
    gps_health?: number;
    velocity?: number;
    lat?: number;
    lon?: number;
    last_change_time?: number;
    ack?: number;
};
export declare enum WAYPOINT_ACTION {
    Start = 0,
    Stop = 1,
    Pause = 2,
    Resume = 3
}
export declare type AUTONOMUS_ROUTE_ACTION = {
    action: WAYPOINT_ACTION;
};
export declare type MISSION_ACTION = {
    action: MISSION_ACTIONS;
};
export declare enum MISSION_ACTIONS {
    start = "start",
    stop = "stop"
}
export declare enum CONDITION_STATUS {
    pending = 1,
    needToStart = 2,
    inProgress = 3,
    needToEnd = 4,
    done = 5
}
export declare enum WAYPOINTS_STATUS {
    notActive = "Not Active",
    sendCommandProcess = "sendCommandProcess",
    uploadProcess = "uploadProcess",
    uploadProcess1 = "uploadProcess1",
    uploadProcess2 = "uploadProcess2",
    uploadProcess3 = "uploadProcess3",
    uploaded = "uploaded",
    stopped = "Stopped",
    startProcess = "StartProcess",
    started = "Started",
    running = "Running",
    paused = "Paused",
    waiting = "Waiting at Start Point"
}
export declare enum IR_LOCK_STATUS {
    notActive = "Not Active",
    started = "Started",
    running = "Running",
    paused = "Paused",
    stopped = "Stopped"
}
export declare type STATUS<T> = {
    status: T;
};
export declare type CHECK_PARAMETERS = {
    function: Function;
    tolerance: number;
    name: string;
};
export declare type ALL_CHECK_PARAMETERS = {
    checkParametersConfig: CHECK_PARAMETERS;
    airVehicle: TELEMETRY_SERVICE_DATA;
    checkParameters: ACTION_CONDITIONS;
};
export declare enum CHECK_PARAMETER_PRIMITIVE {
    velocity = "velocity",
    altitude = "altitude",
    heading = "heading"
}
export declare type FORCE_DATA_NODE = {
    type: 'joystick';
    action: SEND_UDP_ACTIONS;
    command: string;
    vx: number;
    vy: number;
    vz: number;
    yaw: number;
    date: number;
};
export declare enum SEND_UDP_ACTIONS {
    GIMBAL = "gimbal",
    FORCE = "force"
}
export declare type GIMBAL_DATA_CPP = {
    gimbal: true;
    pitch: number;
    roll: number;
    yaw: number;
    time: number;
    rotationMode: 0;
};
export declare enum A2Z_STATE {
    A2Z_STATE_ATTACHED = 0,
    A2Z_STATE_IN_AIR = 1,
    A2Z_STATE_ON_GROUND = 2,
    A2Z_STATE_FREEFALL = 3,
    A2Z_STATE_BRAKING = 4,
    A2Z_STATE_REELING_DOWN = 5,
    A2Z_STATE_REELING_UP = 6,
    A2Z_STATE_FREEWHEEL = 7,
    A2Z_STATE_AUTODELIVER = 8,
    A2Z_STATE_DEV = 9,
    A2Z_STATE_UNKNOWN = 10,
    A2Z_STATE_ERROR = 11
}
export declare enum TECHNICAL_STATUS {
    OK = "OK",
    NOT_CONNECTED = "NOT_CONNECTED"
}
export declare type WINCH_TELEMETRY_DATA = {
    state: A2Z_STATE;
    agl: number;
    payload_height: number;
    scale_weight: number;
    time_stamp: number;
    technicalStatus: TECHNICAL_STATUS;
};
export declare type SEND_STATUS = {
    timeStamp: number;
    status: FLIGHT_SERVICE_STATUS;
};
export declare enum FLIGHT_SERVICE_STATUS {
    NA = "N/A",
    Pending = "Pending",
    InProcess = "InProcess",
    Error = "Error"
}
export declare type HOME_FROM_CONTROLLER = {
    lastHome: {
        homeLocation: {
            longitude: number;
            latitude: number;
            altitude: number;
        };
    };
};
