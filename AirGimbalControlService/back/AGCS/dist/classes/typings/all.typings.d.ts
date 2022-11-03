import { GIMBAL_ACTIONS, LOOK_AT_TARGET_STATE, SEND_UDP_ACTIONS, typesUDP, YAW_REF } from "./enums";
export declare type MAP<T = any> = {
    [key: string]: T;
};
export declare type RESPONSE<T = {}> = T & {
    success: boolean;
    message: Array<string>;
    step?: number;
    additionalData?: {};
};
export declare type ASYNC_RESPONSE<T = any> = {
    success: boolean;
    message?: string[];
    description?: string;
    data?: T;
};
export declare type CARTESIAN1 = {
    x: number;
};
export declare type CARTESIAN2 = {
    x: number;
    y: number;
};
export declare type CARTESIAN3 = {
    x: number;
    y: number;
    z: number;
};
export declare type CARTESIAN4 = {
    x: number;
    y: number;
    z: number;
    w: number;
};
export declare type CARTESIAN2_VECTOR = [CARTESIAN2, CARTESIAN2];
export declare type CARTESIAN3_VECTOR = [CARTESIAN3, CARTESIAN3];
export declare type GEOMETRY = {
    coordinates: POINT | POINT3D;
    type?: string;
};
export declare type YXZ = {
    y: number;
    x: number;
    z: number;
};
export declare type YXZW = CARTESIAN3 & {
    w: number;
};
export declare type POINT = [number, number];
export declare type POINT3D = [number, number, number?];
export declare type VECTOR<T = POINT3D> = [T, T];
export declare type GEOPOINT_VECTOR = [GEOPOINT, GEOPOINT];
export declare type RECTANGLE = [POINT3D, POINT3D, POINT3D, POINT3D];
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
export declare type IMU = {
    angular_velocity: YXZ;
    orientation: YXZW;
};
export declare type GEOJSON_POINT = {
    geometry: {
        type: 'Point';
        coordinates: POINT3D;
    };
};
export declare type GEOJSON_POLYLINE = {
    geometry: {
        type: 'LineString';
        coordinates: POINT3D[];
    };
};
export declare type GEOJSON_POLYGON = {
    geometry: {
        type: 'Polygon';
        coordinates: (POINT3D | POINT)[][];
    };
};
export declare type AIRVEHICLE_STYLE = {
    airVehicleIconColor: string;
    airVehicleIcon: string;
    energyColor: string;
    missionLineColor: string;
    gpsColor: string;
    actionManualEnable?: boolean;
    actionAutoEnable?: boolean;
    buttonText: string;
    selectedMode?: string;
    onBoardColor: string;
    flytbaseColor: string;
    networkColor: string;
    commintSensorStatusColor?: string;
    commintSensorStatusText?: string;
    wayPointsActionText: string;
    wayPointsActionButtonEnable: boolean;
    droneIconBackgroundColor: string;
    borderStyle: string;
    borderIconStyle: string;
    buttonIcon: string;
    typeIcon: string;
    externalOwner: {
        isExternalOwner: boolean;
        externalColor: string;
        externalText: string;
    };
    releaseTaskText: string;
    releaseTaskButtonEnable: boolean;
    statusColor?: string;
    actionReleasePointEnable?: boolean;
    buttonColor?: string;
    altChangePossible?: boolean;
    droneIconPngLogic: string;
    lineColor: string;
    lineWidth: number;
};
export declare type GIMBAL = {
    roll?: number;
    pitch: number;
    yaw: number;
};
export declare type TABLE_DATA<T> = {
    data: Array<T>;
    columns: Array<string>;
    columnNames: Array<string>;
};
export declare type VALIDATION_OBJ = {
    success: boolean;
    message: string;
};
export declare type GIMBAL_COMMAND = GIMBAL_COMMAND_DATA & {
    sensorId: SENSOR_ID;
    Action: GIMBAL_ACTIONS;
};
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
export declare type GIMBAL_ANGLES_COMMAND = {
    type: typesUDP.AGCS;
    action: SEND_UDP_ACTIONS.GIMBAL;
    pitch: number;
    roll: number;
    yaw: number;
};
export declare type GIMBAL_TELEMETRY = {
    sensorId?: SENSOR_ID;
    pitch?: number;
    yaw?: number;
    yawRef?: YAW_REF;
    action?: string;
    roll?: number;
    sensorVector?: GEOPOINT_VECTOR;
};
export declare type POLYGON_POINTS = {
    polygonPoints: (POINT | POINT3D)[];
};
export declare type PERIMETER_DATA = POLYGON_POINTS & ID_OBJ & {
    name: string;
};
export declare type CELL_PARAMETERS = {
    northWest: POINT;
    northWestCropped?: POINT;
    cellSize: [number, number];
};
export declare type TOP_LEFT_BOTTOM_RIGHT = {
    topLeft: (POINT | POINT3D);
    bottomRight: (POINT | POINT3D);
};
export declare type BOUND_DATA = ID_OBJ & {
    northWest: POINT;
    southWEST: POINT;
    northEast: POINT;
    boundSize: [number, number];
};
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
    gps_health?: number;
    roll?: number;
    heading?: number;
    energy?: number;
    longitude?: number;
    latitude?: number;
    course?: number;
    velocity?: number;
    height?: number;
};
export declare type GS_WS_DATA = {
    gimbalsList: Array<GS_TO_WS_GIMBAL_OBJ>;
};
export declare type GIMBAL_TARGET = {
    target: GEOJSON_POINT;
};
export declare type JOYSTICK_DATA = {
    sensorId: SENSOR_ID;
    moveX: number;
    moveY: number;
};
export declare type FROM_TO<T = (POINT | POINT3D)> = [T, T];
export declare type FROM_TO_3D = [POINT3D, POINT3D];
export declare type AGL_PARAMETERS = {
    isAGL?: boolean;
    altitudeRange?: RANGE;
    ASL_Max?: number;
    slope?: RANGE;
    containerHeight?: number;
    heightAboveContainerForDrop?: number;
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
export declare type RANGE_CARTESIAN2 = {
    minX: number;
    maxX: number;
    minY: number;
    maxY: number;
};
export declare const NOT_REQUIRED = "NOT_REQUIRED";
export declare type LOG_DATA_AFTER_PARSING = {
    airVehicleName: string;
    airVehicleType: string;
    airVehicleIp: ID_TYPE;
    takeOffTimeStamp: Date;
    takeoffLocation: POINT3D;
    takeoffHeight: number;
    takeoffEnergy: number;
    tasks: string[];
    flightArea: string;
    lastPoint: POINT3D;
    landingTimeStamp: Date;
    landingLocation: POINT3D;
    landingHeight: number;
    landingEnergy: number;
    totalTime: string;
    systemLogs: string[];
};
export declare type USER_NOTE_AFTER_PARSING = {
    time: Date;
    note: string;
};
export declare type ID_TYPE = string;
export declare type SENSOR_ID = ID_TYPE;
export declare type AIR_VEHICLE_ID = ID_TYPE;
export declare type ID_OBJ = {
    id: ID_TYPE;
};
export declare type ROUTE = {
    route: (POINT | POINT3D)[];
};
export declare type ROUTE3D = {
    route: POINT3D[];
};
export declare type COMPUTE_ROUTE_BYPASS_RELIEF = AGL_PARAMETERS & {
    allowedId: AIR_VEHICLE_ID;
    cartographicPath: (POINT | POINT3D)[];
};
export declare type DTM_ROUTE_DATA = ROUTE & {
    groundASL: POINT3D[];
};
export declare type DTM_ROUTE_FULL_DATA = ROUTE & DTM_GRAPH & {
    route_notFiltered?: (POINT | POINT3D)[];
    groundASL: POINT3D[];
};
export declare type DTM_GRAPH = {
    groundASL_Cartesian2: CARTESIAN2[];
    routeASL_Cartesian2: CARTESIAN2[];
    groundASL_Cartesian2_notFiltered?: CARTESIAN2[];
    routeASL_Cartesian2_notFiltered?: CARTESIAN2[];
    locationDrone_CARTESIAN2?: CARTESIAN2;
    graphRange: RANGE_CARTESIAN2;
    airVehicleId?: string;
    taskId?: string;
};
export declare type IR_LOCK_ACTION_PARAMETERS = {
    requestedAltitude: number;
};
export declare type WINCH_ACTION_PARAMETERS = {
    startAltitude: number;
    requestedPackageHeight: number;
};
export declare type DROP_ACTION_PARAMETERS = {};
export declare type POSITION = GEOPOINT3D & {
    time: number;
    accuracy: number;
};
export declare type PILOT = {
    id: string;
    callname: string;
    position: POSITION;
};
export declare type DRONE_PATH = {
    nextPoiIndex: number;
    poi: Array<POI>;
};
export declare type DRONE_GPS = {
    gpsSatelliteCount: number;
    gpsSignalStrength: number;
};
export declare type DRONE_ATTITUDE = {
    yaw: number;
    roll: number;
    pitch: number;
    time: string;
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
export declare type POINT_FOR_APPROVAL = {
    latitude: number;
    longitude: number;
    altitude: number;
    id: number;
    speed: number;
};
export declare type PREV_LOCATION = {
    position: GEOPOINT3D;
    time: number;
};
export declare type POINT_ON_PATH_FOR_AGL = {
    point: POINT | POINT3D;
    distance: number;
    height: number;
    isPointFixed: boolean;
    isHeightFixed: boolean;
    obstacleId?: ID_TYPE;
    index?: number;
};
export declare type POINT_ON_PATH = {
    point: POINT | POINT3D;
    distance: number;
    height: number;
    index?: number;
};
export declare type EMERGENCY_LOCATION = {
    id: ID_TYPE;
    location: GEOPOINT3D;
    name: string;
    landingSurfaceHeight: number;
};
export declare type LANDING_LOCATION = EMERGENCY_LOCATION & {
    emergencyPointId: ID_TYPE;
};
export declare type PARAMS_TYPE = {
    filed: string;
    type: string;
};
export declare type TELEMETRY_SERVICE_DATA = {
    battery_state?: {
        percentage: number;
        voltage: number;
    };
    heading?: number;
    height_above_takeoff?: number;
    gps_health?: number;
    gps_position?: GEOPOINT3D;
    imu?: {
        angular_velocity: CARTESIAN3;
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
    velocity?: CARTESIAN3;
    distance_from_home?: number;
    attitude?: YXZW;
    last_change_time?: number;
    lastHome: ACCURATE_VISUAL_LANDING;
    minBattery4RH_ownerOnboard?: number;
    onBoardState?: ON_BOARD_STATE;
    operationalAlt?: number;
    owner?: OWNER;
    timeOut4ownerOnboardInSec?: number;
    tolerance?: number;
    wayPoints?: {
        status: number;
        points: GEOPOINT_3D_SHORT_STATUS[];
    };
    keepAlive?: number;
    keepAliveTelemetryService?: number;
    keepAliveRequestService?: number;
    matrixDataCreationTime?: number;
    eulerAngles: TELEMETRY_EULER_ANGLES;
    extention?: any;
    control: any;
    connectionRC: boolean;
    missionStatus: any;
    gitInfo: {
        node: any;
        cpp: any;
    };
    prev_02_05_position: {
        position: GEOPOINT3D;
        time: number;
    };
    triggers: any[];
    isForce: boolean;
    zoomValue: number;
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
export declare type COMMAND_TAKEOFF = HOME_POSITION & {
    id?: ID_TYPE;
    absHeight?: number;
    corridorPoint?: GEOPOINT;
    landingType: LANDING_TYPE;
    homeData?: {
        isAGL: boolean;
        altitudeRange: RANGE;
        ASL_Max: number;
        slope: RANGE;
        emergencyRHHeight?: number;
        takeoffASLHeight?: number;
        landASLHeight?: number;
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
};
export declare type HOME_POSITION = {
    homeLocation: {
        longitude: number;
        latitude: number;
        altitude: number;
        REAL_TAKEOFF_ASL: number;
        PX_TAKEOFF_ASL: number;
        REAL_LAND_ASL: number;
        PX_LAND_ASL: number;
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
export declare enum LANDING_TYPE {
    NORMAL = "normal",
    OPTIC = "optic",
    ACCURATE = "accurate",
    EMERGENCY = "emergency"
}
export declare type TELEMETRY_EULER_ANGLES = {
    rollQuaternion: number;
    pitchQuaternion: number;
    yawQuaternion: number;
};
export declare enum ON_BOARD_STATE {
    'None' = "None",
    'Landing' = "Landing",
    'ReturnHome' = "ReturnHome"
}
export declare enum OWNER {
    'droneService' = "droneService",
    'onBoard' = "onBoard",
    'joystick' = "joystick"
}
export declare type GEOPOINT_3D_SHORT_STATUS = GEOPOINT_3D_SHORT & {
    status: POINT_STATE;
    lastUpdateStatus: number;
};
export declare type GEOPOINT_3D_SHORT = GEOPOINT_SHORT & {
    alt: number;
};
export declare enum POINT_STATE {
    StartWaiting = "StartWaiting",
    StoppedByTimeOut = "StoppedByTimeOut",
    ArrivedToPoint = "ArrivedToPoint",
    None = "None"
}
