import { OB_API } from '../dataClasses/api/api_enums';
import { NETWORK_FOR_SHOW, ROCK_SEVEN_DRONE_TELEMETRY_DE_MASKED, ROCK_SEVEN_DRONE_TELEMETRY_UI } from '../dataClasses/commands/typesDSC';
import { ALERTS_TYPE, COLORS, COMM_STATUS, DAY_NIGHT, FLIGHT_SERVICE_STATUS, GEO_TYPES, RUNNING_STATUS, SERVICE_NAME, SEVERITY_ALERT, STATUS, STATUSES_FOR_MAPI, VEHICLE_TYPE } from './enums';
import { NOTIFICATION, NOTIFICATION_TYPE } from './ws-ui.typings';
import { IRest } from '../dataClasses/interfaces/IRest';
export declare type MAP<T = any> = {
    [key: string]: T;
};
export declare type RESPONSE<T = {}> = T & {
    success: boolean;
    message: Array<string>;
    step?: number;
    additionalData?: {};
    description?: string;
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
    taskId?: TASK_ID;
};
export declare type TASK_ROUTE_DATA = {
    polyline: boolean;
    circles: boolean;
    polylineLatLngs: {
        lat: number;
        lng: number;
    }[];
    taskId?: TASK_ID;
    routeId?: ID_TYPE;
    sensorType?: string;
    actionOnRouteEnd?: ACTION_ON_ROUTE_END;
    waspAzimuth?: number;
};
export declare type LOGIN_UI = {
    name: string;
    password: string;
    token?: string;
};
export declare type TOASTER_OPTIONS = Partial<{
    timeOut: number;
    extendedTimeOut: number;
    positionClass: string;
    preventDuplicates: boolean;
}>;
export declare type NOTIFICATION_UI = NOTIFICATION & {
    options?: TOASTER_OPTIONS;
};
export declare type ASYNC_RESPONSE<T = any> = {
    success: boolean;
    description?: string;
    data?: T;
    errors?: MAPI_ERRORS;
};
export declare type IS_CHANGED<T = any> = {
    isChanged: boolean;
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
export declare enum BOOLEAN_NUMBER {
    true = 1,
    false = 0
}
export declare type GEOPOINT = {
    latitude: number;
    longitude: number;
};
export declare type GEOPOINT3D = GEOPOINT & {
    altitude: number;
};
export declare type GEOPOINT3D_UPPER = {
    Latitude: number;
    Longitude: number;
    Altitude: number;
};
export declare type GEOPOINT_SHORT = {
    lat: number;
    lon: number;
};
export declare type GEOPOINT3D_SHORT = GEOPOINT_SHORT & {
    alt: number;
};
export declare type GEOJSON_POINT = {
    geometry: {
        type: GEO_TYPES.Point;
        coordinates: POINT3D;
    };
};
export declare type GEOJSON_POLYLINE = {
    geometry: {
        type: GEO_TYPES.LineString;
        coordinates: POINT3D[];
    };
};
export declare type GEOJSON_POLYGON = {
    geometry: {
        type: GEO_TYPES.Polygon;
        coordinates: (POINT3D | POINT)[][];
    };
};
export declare type IMU = {
    angular_velocity: YXZ;
    orientation: YXZW;
};
export declare type AIR_VEHICLE_CREATE_DATA = {
    id?: AIR_VEHICLE_ID;
    ip: string;
    isForce: boolean;
    sensorId: SENSOR_ID;
    taskTypes: MAP<boolean>;
    name: string;
    operationalAlt: number;
    namespace: string;
    course: number;
    type: string;
    maxVelocity: number;
    maxYawVelocity: number;
    maxDeltaVelocityUp: number;
    maxDeltaVelocityDown: number;
    videoStreamIP: string;
    failSafe: FAIL_SAFE;
    energyConsumption: number;
    maxLegLength: number;
    launcherAbsHeight: number;
    landingLocation: LANDING_LOCATION;
    emergencyLocation: LANDING_LOCATION;
    emergencyNetworkIds: EMERGENCY_NETWORK_IDS;
    flightCommandServiceStatus: FLIGHT_SERVICE_STATUS;
    extrapolationLocation?: GEOJSON_POINT;
    location_ELS?: GEOJSON_POINT;
    isArmed?: boolean;
};
export declare type EMERGENCY_NETWORK_IDS = {
    groundSender: string;
    airSender: string;
};
export declare type AIR_VEHICLE_UPDATE_DATA = {
    ip: string;
    id?: AIR_VEHICLE_ID;
    energy?: number;
    voltage?: number;
    current?: number;
    velocity?: number;
    location?: GEOJSON_POINT;
    gps_health?: number;
    course?: number;
    height?: number;
    attitude?: YXZW;
    imu?: IMU;
    homePoint?: GEOJSON_POINT;
    onBoard?: boolean;
    flytBase?: boolean;
    network?: boolean;
    heading?: number;
    state?: FLYT_STATE;
    velocities?: YXZ;
    localPosition?: YXZ;
    isArmed?: boolean;
    isOnGnd?: boolean;
    droneStatusDS?: BASIC_AIR_VEHICLES_STATUSES;
    owner?: OWNER_TYPE;
    requestToLand?: boolean;
    waitingForLandResponse?: boolean;
    corridor?: GEOPOINT_VECTOR;
    minAltitude?: number;
    maxAltitude?: number;
    wayPoints?: any;
    energyForReturnHome?: number;
    gimbal?: GIMBAL;
    flyStatus?: AIR_VEHICLE_FLY_STATUS;
    droneRoute?: GEOJSON_POLYLINE;
    status?: AIR_VEHICLE_STATUS;
    onRhRequest?: boolean;
    isForceRH?: boolean;
    replaced?: boolean;
    waypointsPatternStatus?: WAYPOINTS_PATTERN_STATUS;
    taskId?: TASK_ID;
    maxLegLength?: number;
    releasedTaskId?: TASK_ID;
    rateOfClimb?: number;
    energyPerSecondForClimb?: number;
    rateOfLanding?: number;
    timeToBeReplaced?: number;
    replacementRhBat?: number;
    onBoardMissionStatus?: ALGORITHM_STATUS;
    rs_mode?: RC_MODE;
    prev_02_05_position?: PREV_LOCATION;
    externalTaskId?: ID_TYPE;
    slope?: RANGE;
    dtmRoute?: DTM_ROUTE_FULL_DATA;
    takeoffASLHeight?: number;
    isChangedHome?: boolean;
    isAGL?: boolean;
    landingPointId?: ID_TYPE;
    emergencyTelemetry?: ROCK_SEVEN_DRONE_TELEMETRY_DE_MASKED;
    emergencyCommands?: MAP<any>;
    last_change_time?: number;
    algorithmStatus?: ALGORITHM_PROGRESS_STATUS;
    isTemporaryManual?: boolean;
    isTemporaryLanding?: boolean;
    flightCommandServiceStatus?: MOVE_SERVICE_STATUS_ONBOARD;
    externalServices?: CHANGE_ALT_DATA;
    flightId?: string;
    extrapolationLocation?: GEOJSON_POINT;
    location_ELS?: GEOJSON_POINT;
    externalLocationData?: GENERAL_EXTERNAL_LOCATION_DATA;
};
export declare type DS_WS_DATA = {
    dronesList: MAP<AIRVEHICLE_WEBSERVER_DATA>;
};
export declare type MOVE_SERVICE_STATUS_ONBOARD = {
    timeStamp: number;
    status?: FLIGHT_SERVICE_STATUS;
    moveServiceStatus?: MOVE_SERVICE_STATUS;
};
export declare type MOVE_SERVICE_STATUS = {
    general: ALGORITHM_MOVE_SERVICE_STATUS;
    algorithms: ALL_MOVE_SERVICES_STATUS;
};
export declare enum ALGORITHM_MOVE_SERVICE_STATUS {
    stop = "Stop",
    run = "Run"
}
export declare type ALL_MOVE_SERVICES_STATUS = {
    MoveXY: ALGORITHM_MOVE_SERVICE_STATUS;
    MoveToLocation: ALGORITHM_MOVE_SERVICE_STATUS;
    Turn: ALGORITHM_MOVE_SERVICE_STATUS;
};
export declare type AIRVEHICLE_WEBSERVER_DATA = {
    id: AIR_VEHICLE_ID;
    systemId: string;
    isSimulated: boolean;
    isForce: boolean;
    sensorId: SENSOR_ID_TYPE;
    sensorIds: SENSOR_ID_TYPE[];
    onboard: {
        port: string;
    };
    taskTypes: MAP<boolean>;
    landingTypes: MAP<boolean>;
    ip: string;
    lookAtTarget: boolean;
    sensorType: AIRVEHICLE_TYPES;
    name: string;
    operationalAlt: number;
    namespace: string;
    type: string;
    maxVelocity: number;
    maxYawVelocity: number;
    minPitch: number;
    maxPitch: number;
    course: number;
    maxDeltaVelocityUp: number;
    maxDeltaVelocityDown: number;
    droneStatusDS: BASIC_AIR_VEHICLES_STATUSES;
    failSafe: FAIL_SAFE;
    energy: number;
    voltage: number;
    current: number;
    velocity: number;
    location: GEOJSON_POINT;
    gps_health: number;
    height: number;
    attitude: YXZW;
    imu: IMU;
    homePoint: GEOJSON_POINT;
    homeHeight: number;
    videoStreamIP: string;
    heading: number;
    connectivity: AIR_VEHICLE_SERVICE_STATES;
    distanceFromHome: number;
    state: IS_ARMED;
    isArmed: boolean;
    owner: OWNER_TYPE;
    energyConsumption: number;
    corridor: GEOPOINT_VECTOR;
    minAltitude: number;
    maxAltitude: number;
    wayPoints?: any;
    droneModel: string;
    missionType: MISSION_TYPE;
    callSign: string;
    flyStatus: AIR_VEHICLE_FLY_STATUS;
    gimbal?: GIMBAL;
    droneRoute?: GEOJSON_POLYLINE;
    maxLegLength?: number;
    rateOfClimb: number;
    energyPerSecondForClimb: number;
    rateOfLanding: number;
    takeoffToCorridorPoint: boolean;
    onBoardMissionStatus: ALGORITHM_STATUS;
    rs_mode?: RC_MODE;
    launcherAbsHeight: number;
    landFixMinHeight: number;
    landHorizontalSpeed: number;
    landHorizontalTolerance: number;
    altOffset: number;
    accurateLandProcess: boolean;
    minAltFromLand: number;
    prev_02_05_position: PREV_LOCATION;
    landingLocation: LANDING_LOCATION;
    emergencyLocation: LANDING_LOCATION;
    slope: RANGE;
    takeoffASLHeight: number;
    isChangedHome: boolean;
    dtmRoute: DTM_ROUTE_FULL_DATA;
    emergencyTelemetry: ROCK_SEVEN_DRONE_TELEMETRY_DE_MASKED;
    emergencyNetworkIds: EMERGENCY_NETWORK_IDS;
    emergencyCommands: MAP<any>;
    last_change_time: number;
    algorithmStatus: ALGORITHM_PROGRESS_STATUS;
    isTemporaryManual: boolean;
    isTemporaryLanding: boolean;
    flightCommandServiceStatus: MOVE_SERVICE_STATUS_ONBOARD;
    capsuleId: string;
    externalServices: CHANGE_ALT_DATA;
    landingPointId: ID_TYPE;
    landingPresetsId: string;
};
export declare type AIR_VEHICLE_DATA_FOR_SAVE = {
    ip: string;
    isSimulated: boolean;
    sensorType: AIRVEHICLE_TYPES;
    missionType: MISSION_TYPE;
    name: string;
    callSign: string;
    namespace: string;
    type: string;
    takeoffToCorridorPoint: boolean;
    landingPointId: ID_TYPE;
    maxVelocity: number;
    maxDeltaVelocityUp: number;
    maxDeltaVelocityDown: number;
    maxYawVelocity: number;
    energyConsumption: number;
    rateOfClimb: number;
    energyPerSecondForClimb: number;
    rateOfLanding: number;
    failSafe: FAIL_SAFE;
    sensorId: SENSOR_ID;
    sensorIds: SENSOR_ID[];
    droneModel: string;
    taskTypes: MAP<boolean>;
    landingTypes: MAP<boolean>;
    onboard: {
        port: string;
    };
    landFixMinHeight: number;
    landHorizontalSpeed: number;
    landHorizontalTolerance: number;
    minAltFromLand: number;
    isForce: boolean;
    isExist: boolean;
    maxMissionTime: number;
    landVerticalSpeed: number;
};
export declare type AIRVEHICLE_STYLE = {
    airVehicleIconColor: string;
    airVehicleIcon: string;
    energyColor: string;
    energySatelliteColor: string;
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
    buttonUnAllocateIcon: string;
    buttonUnAllocateText: string;
    unAllocateActionButtonEnable: boolean;
    wayPointsActionText: string;
    wayPointsActionButtonEnable: boolean;
    wayPointActionIcon: string;
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
    timeline: number;
    timelineSatellite: number;
    actionDataArr: UI_ACTION_DATA_ARR;
};
export declare type AIRVEHICLE_UI_DATA = {
    id: AIR_VEHICLE_ID;
    systemId: string;
    isSimulated: boolean;
    sensorId: SENSOR_ID_TYPE;
    taskTypes: MAP<boolean>;
    landingTypes: MAP<boolean>;
    ip?: string;
    type: AIR_VEHICLE_TYPES;
    taskId: TASK_ID | OBJ_VALUE;
    lookAtTarget: boolean;
    name: string;
    energy: number;
    voltage: number;
    current: number;
    location: GEOJSON_POINT;
    takeOffCorridorPoint: GEOJSON_POINT;
    heading: number;
    showVideo: boolean;
    videoStreamIP: string;
    missionStatus: MISSION_STATUS;
    course: number;
    mode: AIR_VEHICLE_MODE;
    homePoint: GEOJSON_POINT;
    homeHeight: number;
    network: boolean;
    isChangedHome: boolean;
    currentASLHeight?: number;
    operationalAlt: number;
    status: AIR_VEHICLE_STATUS;
    height: number;
    heightAboveTO: number;
    distanceFromHome: number;
    gps_health: number;
    velocity: number;
    missionLineTo: GEOJSON_POINT;
    owner: OWNER_TYPE;
    corridor: GEOPOINT_VECTOR;
    energyConsumption: number;
    styles: AIRVEHICLE_STYLE;
    minAltitude: number;
    maxAltitude: number;
    availableSlots: number[];
    sensorType: AIRVEHICLE_TYPES;
    energyForReturnHome: number;
    sensorVector: GEOPOINT_VECTOR;
    airVehicleRoute: GEOJSON_POLYLINE;
    estimatedRoute?: GEOJSON_POINT;
    estimatedGimbalVector?: GEOJSON_POINT;
    requestedLocation: GEOJSON_POINT | undefined;
    requestedAzimuth: number | undefined;
    timeToBeReplaced: number;
    replacementRhBat: number;
    rs_mode: RC_MODE;
    launcherAbsHeight: number;
    launcherPoint?: GEOJSON_POINT;
    landAbsHeight: number;
    prev_02_05_position: PREV_LOCATION;
    landingLocation: LANDING_LOCATION;
    emergencyLocation: LANDING_LOCATION;
    slope: RANGE;
    dtmRoute: DTM_ROUTE_FULL_DATA_UI;
    isForce: boolean;
    takeoffASLHeight: number;
    landingPointId: ID_TYPE;
    emergencyTelemetryForShow: ROCK_SEVEN_DRONE_TELEMETRY_UI;
    regularTelemetryForShow: NETWORK_FOR_SHOW;
    emergencyNetworkIds: EMERGENCY_NETWORK_IDS;
    emergencyCommands: MAP<any>;
    last_change_time: number;
    aglHeight: number;
    flightCommandServiceStatus: MOVE_SERVICE_STATUS_ONBOARD;
    capsuleId: string;
    externalServices: CHANGE_ALT_DATA;
    sensorAGL: SENSOR_AGL;
    flightId: string;
    taskType: TASK_TYPE;
    extrapolationLocation: GEOJSON_POINT;
    location_ELS: GEOJSON_POINT;
    externalLocationData: GENERAL_EXTERNAL_LOCATION_DATA;
    lockedForRH: boolean;
    onRhRequest: boolean;
};
export declare type AIRVEHICLE_LOG_DATA = {
    id: AIR_VEHICLE_ID;
    systemId: string;
    isSimulated: boolean;
    sensorId: SENSOR_ID_TYPE;
    taskTypes: MAP<boolean>;
    landingTypes: MAP<boolean>;
    ip?: string;
    type: AIR_VEHICLE_TYPES;
    taskId: TASK_ID | OBJ_VALUE;
    lookAtTarget: boolean;
    name: string;
    energy: number;
    voltage: number;
    current: number;
    location: GEOJSON_POINT;
    takeOffCorridorPoint: GEOJSON_POINT;
    heading: number;
    showVideo: boolean;
    videoStreamIP: string;
    missionStatus: MISSION_STATUS;
    course: number;
    mode: AIR_VEHICLE_MODE;
    homePoint: GEOJSON_POINT;
    homeHeight: number;
    network: boolean;
    isChangedHome: boolean;
    currentASLHeight?: number;
    operationalAlt: number;
    status: AIR_VEHICLE_STATUS;
    height: number;
    heightAboveTO: number;
    distanceFromHome: number;
    gps_health: number;
    velocity: number;
    missionLineTo: GEOJSON_POINT;
    owner: OWNER_TYPE;
    corridor: GEOPOINT_VECTOR;
    energyConsumption: number;
    minAltitude: number;
    maxAltitude: number;
    availableSlots: number[];
    sensorType: AIRVEHICLE_TYPES;
    energyForReturnHome: number;
    sensorVector: GEOPOINT_VECTOR;
    airVehicleRoute: GEOJSON_POLYLINE;
    estimatedRoute?: GEOJSON_POINT;
    estimatedGimbalVector?: GEOJSON_POINT;
    requestedLocation: GEOJSON_POINT | undefined;
    requestedAzimuth: number | undefined;
    timeToBeReplaced: number;
    replacementRhBat: number;
    rs_mode: RC_MODE;
    launcherAbsHeight: number;
    launcherPoint?: GEOJSON_POINT;
    landAbsHeight: number;
    prev_02_05_position: PREV_LOCATION;
    landingLocation: LANDING_LOCATION;
    emergencyLocation: LANDING_LOCATION;
    slope: RANGE;
    dtmRoute: DTM_ROUTE_FULL_DATA_UI;
    isForce: boolean;
    takeoffASLHeight: number;
    landingPointId: ID_TYPE;
    emergencyTelemetryForShow: ROCK_SEVEN_DRONE_TELEMETRY_UI;
    regularTelemetryForShow: NETWORK_FOR_SHOW;
    emergencyNetworkIds: EMERGENCY_NETWORK_IDS;
    emergencyCommands: MAP<any>;
    last_change_time: number;
    aglHeight: number;
    flightCommandServiceStatus: MOVE_SERVICE_STATUS_ONBOARD;
    capsuleId: string;
    externalServices: CHANGE_ALT_DATA;
    sensorAGL: SENSOR_AGL;
    flightId: string;
    taskType: TASK_TYPE;
    extrapolationLocation: GEOJSON_POINT;
    location_ELS: GEOJSON_POINT;
    externalLocationData: GENERAL_EXTERNAL_LOCATION_DATA;
    lockedForRH: boolean;
};
export declare enum MAP_TYPE {
    Cesium = "Cesium",
    Leaflet = "Leaflet",
    AllMaps = "AllMaps"
}
export declare enum TYPE_OBJECTS_LE {
    airVehicleLE = "airVehicleLE",
    externalAirVehicleLE = "externalAirVehicleLE",
    airVehicleSatelliteLE = "airVehicleSatelliteLE",
    airVehicleRouteLE = "airVehicleRouteLE",
    polylineCorridorLE = "polylineCorridorLE",
    circlesCorridorLE = "circlesCorridorLE",
    lookAtPointLineLE = "lookAtPointLineLE",
    lookAtPointCircleLE = "lookAtPointCircleLE",
    landingLocationPointLE = "landingLocationPointLE",
    emergencyLocationPointLE = "emergencyLocationPointLE",
    uavTargetLocationLE = "uavTargetLocationLE",
    uavTargetPolylineLE = "uavTargetPolylineLE",
    estimatedRoute = "estimatedRoute",
    estimatedGimbalVector = "estimatedGimbalVector",
    spareLandingPointLE = "spareLandingPointLE",
    polylineRouteLE = "polylineRouteLE",
    circleRouteLE = "circleRouteLE",
    arrowRouteLE = "arrowRouteLE",
    polylineLabelLE = "polylineLabelLE",
    polylineSecurityLE = "polylineSecurityLE",
    circleSecurityLE = "circleSecurityLE",
    arrowSecurityLE = "arrowSecurityLE",
    polylineLabelSecurityLE = "polylineLabelSecurityLE",
    actionOnRouteEndPointLE = "actionOnRouteEndPointLE",
    actionOnRouteEndCircleLE = "actionOnRouteEndCircleLE",
    actionOnRouteEndWaspLE = "actionOnRouteEndWaspLE",
    polygonNFZLE = "polygonNFZLE",
    polygonLE = "polygonLE",
    polygonNFZLabelLE = "polygonNFZLabelLE",
    polylineHoverPointLE = "polylineHoverPointLE",
    circleHoverPointLE = "circleHoverPointLE",
    arrowHoverPointLE = "arrowHoverPointLE",
    markerViewNowLE = "markerViewNowLE",
    pointDynamicLE = "pointDynamicLE",
    pointTargetTrackingLE = "pointTargetTrackingLE",
    rulerPolylineLE = "rulerPolylineLE",
    rulerPolylineLabelLE = "rulerPolylineLabelLE",
    shippingPointLE = "shippingPointLE",
    shippingPointLabelLE = "shippingPointLabelLE",
    shipWithoutLandingPointLE = "shipWithoutLandingPointLE",
    shipWithoutLandingPointLabelLE = "shipWithoutLandingPointLabelLE",
    shipWithWinchPointLE = "shipWithWinchPointLE",
    shipWithWinchPointLabelLE = "shipWithWinchPointLabelLE",
    shippingPolylineRouteLE = "shippingPolylineRouteLE",
    shippingCircleRouteLE = "shippingCircleRouteLE",
    shippingArrowRouteLE = "shippingArrowRouteLE",
    shippingPolylineLabelLE = "shippingPolylineLabelLE",
    routeForGraphLE = "routeForGraphLE",
    nodePowPlanMarkerLE = "nodePowPlanMarkerLE",
    polygonNFZInfluenceLE = "polygonNFZInfluenceLE",
    airVehicleTrackPathLE = "airVehicleTrackPathLE",
    airVehicleExtrapolationLE = "airVehicleExtrapolationLE",
    airVehicleLocationElsLE = "airVehicleLocationElsLE"
}
export declare enum TYPE_OBJECTS_CE {
    airVehicleCE = "airVehicleCE",
    airVehicleRouteCE = "airVehicleRouteCE",
    polylineCorridorCE = "polylineCorridorCE",
    circlesCorridorCE = "circlesCorridorCE",
    lookAtPointLineCE = "lookAtPointLineCE",
    lookAtPointCircleCE = "lookAtPointCircleCE",
    polylineRouteCE = "polylineRouteCE",
    circleRouteCE = "circleRouteCE",
    arrowRouteCE = "arrowRouteCE",
    polylineLabelCE = "polylineLabelCE",
    polylineSecurityCE = "polylineSecurityCE",
    circleSecurityCE = "circleSecurityCE",
    arrowSecurityCE = "arrowSecurityCE",
    polylineLabelSecurityCE = "polylineLabelSecurityCE",
    actionOnRouteEndPointCE = "actionOnRouteEndPointCE",
    actionOnRouteEndCircleCE = "actionOnRouteEndCircleCE",
    actionOnRouteEndWaspCE = "actionOnRouteEndWaspCE",
    polygonNFZCE = "polygonNFZCE",
    polygonNFZBorderCE = "polygonNFZBorderCE",
    polygonCE = "polygonCE",
    polygonNFZLabelCE = "polygonNFZLabelCE",
    polylineHoverPointCE = "polylineHoverPointCE",
    circleHoverPointCE = "circleHoverPointCE",
    arrowHoverPointCE = "arrowHoverPointCE",
    markerViewNowCE = "markerViewNowCE",
    pointDynamicCE = "pointDynamicCE",
    rulerPolylineCE = "rulerPolylineCE",
    rulerPolylineLabelCE = "rulerPolylineLabelCE",
    shippingPointCE = "shippingPointCE",
    shippingPointLabelCE = "shippingPointLabelCE"
}
export declare enum EXTERNAL_OWNER {
    gsc = "GSC",
    safe = "Safe",
    emergency = "Emergency"
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
export declare enum MISSION_STATUS {
    onMission = 0,
    observing = 1
}
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
    safe = "safe",
    RTH = "RTH",
    joystick = "joystick",
    RC = "RC"
}
export declare enum OWNER_NFZ {
    blank = "blank",
    external_airwayz = "external_airwayz"
}
export declare type OWNER_NFZ_DATA = {
    owner: OWNER_NFZ;
};
export declare type REQUEST_API_SET_HOME = {
    lat: number;
    lon: number;
    alt: number;
    set_current: boolean;
};
export declare enum AIRVEHICLE_TYPES {
    commint = "Commint",
    visint = "Visint",
    Sensor1 = "Sensor1",
    Sensor2 = "Sensor2",
    Sensor3 = "Sensor3",
    Sensor4 = "Sensor4"
}
export declare enum ROUTE_ALGORITHM_ENUM {
    Sensor1 = "Sensor1",
    Sensor2 = "Sensor2",
    Sensor3 = "Sensor3",
    Sensor4 = "Sensor4"
}
export declare enum MISSION_TYPE {
    Commint = "Commint",
    Visint = "Visint",
    Sensor1 = "Sensor1",
    Sensor2 = "Sensor2",
    Sensor3 = "Sensor3",
    Sensor4 = "Sensor4"
}
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
    finished = "finished",
    Unknown = "Unknown"
}
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
export declare type MISSION_DATA_TO_UI = {
    styles: {
        missionDefined: boolean;
    };
    RoutePoints?: ROUTE_DATA_UI;
};
export declare type ROUTE_POINT_DATA = {
    PointLocation: GEOJSON_POINT;
    velocity: number;
    yaw: number;
};
export declare type ROUTE_POINT_DATA_UI = {
    PointLocation: GEOJSON_POINT;
    Velocity: number;
    Yaw: number;
    ToBody: boolean;
};
export declare type ROUTE_POINT_DATA_DRONESERVICE = GEOPOINT3D & {
    velocity: number;
    yaw: number;
    ToBody: boolean;
};
export declare type ROUTE_DATA_UI = {
    ActionOnRouteEnd?: ACTION_ON_ROUTE_END;
    RoutePoints?: ROUTE_POINT_DATA_UI[];
};
export declare type ROUTE_DATA_FOR_FCS = {
    id?: ID_TYPE;
    isForce?: boolean;
    AltFromDrone: boolean;
    yaw_mode: YAW_MODE;
    points: ROUTE_POINT_DATA_DRONESERVICE[];
};
export declare type ROUTE_FOR_FCS_LAND_POINTS = ROUTE_DATA_FOR_FCS & {
    landingPoints?: LANDING_LOCATION[];
    isForce: boolean;
};
export declare type ROUTE_FOR_ONBOARD_LAND_POINTS = ROUTE_DATA_FOR_FCS & {
    landingPoints?: LANDING_LOCATION[];
    isForce: boolean;
};
export declare type ROUTE_DATA_FOR_ONBOARD = {
    isForce: boolean;
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
export declare type ALERT_STYLEROUTE_DATA_FOR_UTM = {
    id: string;
    time: string;
    points: POINT_FOR_APPROVAL[];
};
export declare type UPDATE_ROUTE_DATA = {
    version: number;
    ActionOnRouteEnd?: ACTION_ON_ROUTE_END;
    AltFromDrone: boolean;
    YawMode: YAW_MODE;
    RoutePoints?: ROUTE_POINT_DATA[];
    isCheckedUTM?: boolean;
    cutStaticPath: POINT3D[];
};
export declare type POINT_OF_ROUTE_DATA = {
    yaw: number;
    toBody: boolean;
    velocity: number;
    PointLocation: GEOJSON_POINT;
};
export declare type POI_TYPE = {
    geoPoint: POINT3D;
    relativeAtl: number;
};
export declare type POINT_OF_MISSION_ROUTE_DATA = {
    geoPoint: GEOPOINT3D;
    relativeAlt: number;
    relativeHeadingType: string;
    heading: number;
    headingType: string;
    velocity: number;
    POI: POI_TYPE;
    actions: any[];
};
export declare type ROUTE_DATA = SITE_NAME_OBJ & ROUTE_DATA_FROM_UI & {
    routeId: ID_TYPE;
    totalValue: number;
};
export declare type ROUTE_DATA_FROM_UI = {
    yaw: number;
    toBody: boolean;
    velocity: number;
    actionOnRouteEnd: ACTION_ON_ROUTE_END;
    routePoints: POINT_OF_ROUTE_DATA[];
};
export declare type ROUTE_EDIT_DATA = ROUTE_DATA_FROM_UI & {
    routeId: ID_TYPE;
};
export declare type ADD_ROUTE_DATA = {
    newTask: TASK;
    RouteTask: ROUTE_DATA_FROM_UI;
};
export declare type ROUTE_JSON_TO_UI = {
    routeId: ID_TYPE;
    yaw: number;
    toBody: boolean;
    velocity: number;
    actionOnRouteEnd: ACTION_ON_ROUTE_END;
    routePoints: ROUTE_POINT_DATA_UI[];
    totalValue: number;
    yawMode: YAW_MODE;
    altitude: number;
    altFromDrone: boolean;
    styles: {
        colorPolyline: string;
        dashArr: string;
        weight: number;
        colorCircle: string;
        type: string;
    };
    finishShowParameters: any;
    name?: string;
};
export declare type ROUTE_JSON_TO_SAVE = SITE_NAME_OBJ & {
    routeId: ID_TYPE;
    yaw: number;
    toBody: boolean;
    velocity: number;
    actionOnRouteEnd: ACTION_ON_ROUTE_END;
    routePoints: ROUTE_POINT_DATA_UI[];
    totalValue: number;
    yawMode: YAW_MODE;
    altitude: number;
    altFromDrone: boolean;
};
export declare type MISSION_ROUTE_JSON_TO_SAVE = SITE_NAME_OBJ & {
    routeId: ID_TYPE;
    actionPoints: AUTONOMOUS_POINT[];
    totalValue: number;
};
export declare enum ACTION_FOR {
    Vehicle = "Vehicle",
    Gimbal = "Gimbal",
    Camera = "Camera",
    Sensor = "Sensor",
    Drop = "Drop",
    IR_Lock = "IR_Lock",
    Winch = "Winch",
    externalInput = "externalInput",
    InstallSensor = "InstallSensor",
    none = "none"
}
export declare enum HEADING_TYPE {
    Auto = "Auto",
    Fixed = "Fixed",
    Manual = "Manual",
    Custom = "Custom",
    POI = "POI",
    GimbalYawFollow = "GimbalYawFollow"
}
export declare type CREDENTIALS = {
    name: string;
    password: string;
};
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
    NotActiveAllocated = "Not Active Allocated",
    TakeOff = "Take Off",
    ReturnHome = "Return Home",
    Landing = "Landing",
    Observing = "Observing",
    Manual = "Manual",
    OnMission = "On Mission",
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
    onRouteChangeComputeProcess = "onRouteChangeComputeProcess",
    onRouteChangePauseProcess = "onRouteChangePauseProcess",
    onRouteChangeFinishPauseProcess = "onRouteChangeFinishPauseProcess",
    onRouteChangeStopProcess = "onRouteChangeStopProcess",
    onRouteChangeFinishStopProcess = "onRouteChangeFinishStopProcess",
    onRouteChangeFinished = "onRouteChangeFinished",
    waypointsError = "wayPoints/uploadAndStart command error"
}
export declare enum CHANGE_ROUTE_STATUS {
    notActive = "Not Active",
    onRouteChangePauseProcess = "onRouteChangePauseProcess",
    onRouteChangeFinishPauseProcess = "onRouteChangeFinishPauseProcess",
    onRouteChangeStopProcess = "onRouteChangeStopProcess",
    onRouteChangeFinishStopProcess = "onRouteChangeFinishStopProcess",
    onRouteChangeComputeProcess = "onRouteChangeComputeProcess",
    onRouteChangeFinished = "onRouteChangeFinished"
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
export declare type DRONE_STYLES = {
    airVehicleIconColor: string;
    airVehicleIcon: string;
    droneIconBackgroundColor: string;
    gpsColor: string;
    energyColor: string;
    missionLineColor: string;
    buttonIcon: string;
    buttonText: string;
    buttonUnAllocateIcon: string;
    buttonUnAllocateText: string;
    unAllocateActionButtonEnable: boolean;
    typeIcon: string;
    externalOwner: {
        externalText: string;
        externalColor: string;
        isExternalOwner: boolean;
    };
    onBoardColor: string;
    flytbaseColor: string;
    networkColor: string;
    externalLocationColor: string;
    wayPointsActionText: string;
    wayPointsActionButtonEnable: boolean;
    wayPointActionIcon: string;
    releaseTaskText: string;
    releaseTaskButtonEnable: boolean;
    borderStyle: string;
    borderIconStyle: string;
    lineColor: string;
    lineWidth: number;
    actionDataArr: UI_ACTION_DATA_ARR;
};
export declare enum AIR_VEHICLE_TYPES {
    dji = "dji",
    alpha = "alpha",
    pixhawk = "pixhawk"
}
export declare enum SENSOR_TYPE {
    Visint = "Visint",
    Commint = "Commint",
    Sensor1 = "Sensor1",
    Sensor2 = "Sensor2",
    Sensor3 = "Sensor3",
    Sensor4 = "Sensor4",
    ELS = "ELS",
    ASIO = "ASIO"
}
export declare type VALIDATION_OBJ = {
    success: boolean;
    message: string;
};
export declare enum GIMBAL_TYPES {
    ThirdEye = "ThirdEye",
    Ronin = "Ronin",
    Dji = "Dji",
    IG = "IG"
}
export declare type GIMBAL_COMMAND = GIMBAL_COMMAND_DATA & {
    sensorId: SENSOR_ID_TYPE;
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
    Night = "Night",
    stowGimbal = "stowGimbal"
}
export declare type GIMBAL_COMMAND_DATA = GIMBAL_ANGLES & {
    sensorId?: SENSOR_ID_TYPE;
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
    sensorId?: SENSOR_ID_TYPE;
    pitch?: number;
    yaw?: number;
    yawRef?: YAW_REF;
    action?: string;
    roll?: number;
    sensorVector?: GEOPOINT_VECTOR;
};
export declare enum YAW_REF {
    Body = "Body",
    North = "North"
}
export declare enum ALERT_WEB_SOCKET_API {
    alerts_data = "alerts_data"
}
export declare enum GEO_LAYERS_WEB_SOCKET_API {
    geoLayersVerion = "geoLayersVerion"
}
export declare enum NFZ_SOCKET_API {
    nfzVersion = "nfzVersion"
}
export declare enum SOCKET_IO_CLIENT_TYPES {
    external_webServer = "external_webServer",
    ALS = "ALS",
    webServer = "webServer",
    internalUTM = "internalUTM",
    GeoLayersRepository = "GeoLayersRepository",
    gimbal = "gimbal",
    pws = "pws",
    IG = "IG",
    MAPI = "MAPI",
    RTS = "RTS",
    FCS = "FCS",
    UTM_display_ws = "UTM_display_ws",
    UTM_display = "UTM_display"
}
export declare enum SOCKET_CLIENT_TYPES {
    RTS = "RTS",
    NFZRepository = "NFZRepository",
    MAPI = "MAPI",
    DroneTelemetry = "DroneTelemetry",
    ALS = "ALS",
    GeoLayersRepository = "GeoLayersRepository",
    UTMG = "UTMG",
    UTM_DISPLAY_UTMG = "UTM_DISPLAY_UTMG",
    RTS_SENDER = "RTS_SENDER",
    RTS_RECEIVER = "RTS_RECEIVER",
    SMM = "SMM",
    LDBS = "LDBS",
    ELSG = "ELSG"
}
export declare type ALERT_DATA = {
    id: string;
    type: ALERT_TYPE;
    fromAirVehicleId: string;
    toAirVehicleId?: string;
    toPoint?: GEOPOINT3D_SHORT;
    distance?: number;
    recommendedDistance?: number;
    styles?: ALERT_STYLE;
};
export declare enum SUTMG_WEBSOCKET {
    droneTelemetryData = "droneTelemetryData"
}
export declare enum ALGORITHM_TYPES_COMMAND {
    All = "All"
}
export declare enum TASK_TYPE {
    blank = "blank",
    Route = "Route",
    Point = "Point",
    WASP = "WASP",
    MissionRoute = "MissionRoute",
    Security = "Security",
    MultiRoute = "MultiRoute",
    Dynamic = "Dynamic",
    Shipping = "Shipping",
    ShipWithoutLanding = "ShipWithoutLanding",
    DeliveryPoint = "DeliveryPoint",
    ForceRoute = "ForceRoute",
    MultiDeploy = "MultiDeploy",
    Deployment = "Deployment",
    TargetTracking = "TargetTracking"
}
export declare type START_TASK_PARAMETERS = {
    hotSwap: boolean;
    isNoGPS: boolean;
};
export declare type TASK = SITE_NAME_OBJ & {
    taskId?: TASK_ID;
    routeId?: ID_TYPE;
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
    ASL_Max?: number;
    altitudeRange?: RANGE;
    slope?: RANGE & MAX_SLOPE_DEGREE;
    isAGL?: boolean;
    containerHeight?: number;
    heightAboveContainerForDrop?: number;
    forceByRoute?: POINT3D[];
    Point?: GEOJSON_POINT;
    isNoGPS?: boolean;
    airVehicle?: any[];
};
export declare type MISSION_ROUTE_TASK = {
    wayPoints: POINT_OF_MISSION_ROUTE_DATA[];
};
export declare type WASP_TASK = SITE_NAME_OBJ & {
    taskId?: TASK_ID;
    name: string;
    status: ALGORITHM_STATUS;
    type: TASK_TYPE.WASP;
    point: GEOJSON_POINT;
    waspAzimuth: number;
};
export declare type SHIPPING_TASK_DATA = SITE_NAME_OBJ & AGL_PARAMETERS & {
    taskId?: TASK_ID;
    name: string;
    point: GEOJSON_POINT;
    status: ALGORITHM_STATUS;
    type: TASK_TYPE;
    isAGL: boolean;
    creationTime?: number;
    forceByRoute: POINT3D[];
};
export declare type SHIPPING_TASK_WITH_LANDING = SHIPPING_TASK_DATA & {
    type: TASK_TYPE.Shipping;
};
export declare type SHIP_WITHOUT_LANDING_TASK_DATA = SHIPPING_TASK_DATA & {
    type: TASK_TYPE.ShipWithoutLanding;
    containerHeight: number;
    heightAboveContainerForDrop: number;
};
export declare enum DELIVERY_TYPE {
    winch = "winch",
    drop = "drop"
}
export declare type DELIVERY_POINT_TASK_DATA = SHIPPING_TASK_DATA & {
    type: TASK_TYPE.DeliveryPoint;
    containerHeight: number;
    heightAboveContainerForDrop: number;
    deliveryType: DELIVERY_TYPE;
    deliveryAzimuth: number;
    IRLockStartHeight: number;
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
export declare type POINT_TASK_FROM_UI = {
    latlng: GEOPOINT_SHORT;
    azimuthToPoint: boolean;
    viewingAngle: number;
    minDistanceToViewPoint: number;
    isNoGPS: boolean;
};
export declare type POINT_TASK_FOR_UI = {
    taskId?: TASK_ID;
    Point: GEOJSON_POINT;
    hoverPoint: GEOJSON_POINT;
    azimuthToPoint: boolean;
    viewingAngle: number;
    status?: ALGORITHM_STATUS;
    name?: string;
    minDistanceToViewPoint?: number;
    type?: TASK_TYPE;
    isNoGPS: boolean;
    totalRoutLength?: number;
    styles: {};
};
export declare type DYNAMIC_POINT_TASK_FOR_UI = {
    sensorId?: SENSOR_ID_TYPE;
    detectionId?: ID_TYPE;
    taskId?: TASK_ID;
    Point: GEOJSON_POINT;
    hoverPoint: GEOJSON_POINT;
    status?: ALGORITHM_STATUS;
    name?: string;
    type?: TASK_TYPE;
    isNoGPS: boolean;
    totalRoutLength?: number;
    styles: {};
};
export declare type SETTINGS = {
    landingDirection: number;
    minAlt: number;
    altGaps: number;
    maxAlt: number;
    RHminEnergy: number;
    OBminEnergy: number;
    NoComRhTime: number;
    landingStripLength: number;
    minEnergyToBeOnGround: number;
    defaultVelocity: number;
    safetyGapForcedRH: number;
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
    polygonPoints: (POINT | POINT3D)[];
};
export declare type AMS_RESPONSE<T = any> = T & {
    version: number;
};
export declare type NFZ_STYLES = {
    borderColor: string;
    fillColor: string;
};
export declare type NFZS_DATA = VERSION_NUMBER & {
    allowedId: AIR_VEHICLE_ID;
    nfzs: NFZ_DATA[];
};
export declare type NFZS_DATA_VERSION = VERSION_NUMBER & NFZS_DATA;
export declare type NFZ_DATA = POLYGON_POINTS & SITE_NAME_OBJ & {
    owner?: OWNER_NFZ;
    id?: ID_TYPE;
    name: string;
    maxAlt: number;
    isLimitAlt: boolean;
    allowedId: AIR_VEHICLE_ID;
    type: NFZ_TYPE;
    styles: MAP<string>;
};
export declare type NFZ_DATA_UTM = {
    nfzId: string;
    minAlt?: number;
    maxAlt?: number;
    nfzPolygon: GEOPOINT3D_SHORT[];
    allowedId?: string;
    nfzType?: string;
    description?: string;
    origin: string;
};
export declare type NFZ_DATA_TO_RTS = {
    origin: string;
    NFZs: NFZ_DATA_UTM[];
};
export declare type NFZ_DATA_DYNAMIC = NFZ_DATA & ALLOWED_ID;
export declare type ALLOWED_ID = {
    allowedId: AIR_VEHICLE_ID;
};
export declare type AIR_VEHICLE_WITH_TASK = {
    airVehicleId: AIR_VEHICLE_ID;
    taskId: TASK_ID;
};
export declare type PERIMETER_DATA = POLYGON_POINTS & ID_OBJ & {
    name: string;
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
    matrixFactor?: CARTESIAN2;
};
export declare type SITE_METADATA_GRID = SITE_METADATA & {
    grid: any;
};
export declare type MATRIX_DATA_3D = SITE_METADATA & {
    matrixNFZ_MAP: MAP<MAP<number>>;
    matrixNFZSafetyFactor_MAP: MAP<MAP<number>>;
};
export declare type MATRIX_AND_CARTOGRAPHIC_DATA = {
    matrixData: MATRIX_DATA_3D;
    cartographicData: CARTOGRAPHIC_DATA;
};
export declare type PRE_COMPRESSD_MATRIX_DATA_3D = SITE_METADATA & {
    matrixNFZ_MAP_COMPRESS: MAP<MAP<number>>;
    matrixNFZSafetyFactor_MAP_COMPRESS: MAP<MAP<number>>;
};
export declare type MATRIX_DATA = ID_OBJ & CELL_PARAMETERS & {
    matrixNFZ: boolean[][];
    matrixNFZSafetyFactor: boolean[][];
    creationTime: number;
    matrixSize: CARTESIAN2;
};
export declare type MATRIX_DATA_RS = MATRIX_DATA & {
    grid: any;
};
export declare type MATRIX_DATA_3D_RS = MATRIX_DATA_3D & {
    externalMatrixHeightMAP: MAP<BOOLEAN_NUMBER[][]>;
    grid: MAP<any>;
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
export declare type SITE_TO_SAVE = {
    perimeter: (POINT | POINT3D)[];
    NFZ_array: NFZ_DATA[];
};
export declare type PERIMETER_TO_SAVE = POLYGON_POINTS & ID_OBJ & SITE_NAME_OBJ & {
    name: string;
};
export declare type CARTOGRAPHIC_DATA = {
    creationTime: number;
    perimeter: PERIMETER_DATA;
    NFZ_static_MAP: MAP<NFZ_DATA>;
    NFZ_dynamic_MAP_MAP: MAP<MAP<NFZ_DATA>>;
    NFZ_external_MAP?: MAP<NFZ_DATA>;
};
export declare enum OBJ_VALUE {
    blank = "blank"
}
export declare enum NFZ_TYPE {
    static = "static",
    dynamic = "dynamic",
    external = "external",
    temporary = "temporary"
}
export declare enum NFZ_TYPE_DYNAMIC {
    takeOffNfz = "takeOffNfz",
    routeNfz = "routeNfz",
    landingNfz = "landingNfz",
    circleNfz = "circleNfz"
}
export declare type GS_TO_WS_GIMBAL_OBJ = {
    sensorId: SENSOR_ID_TYPE;
    pitch: number;
    yaw: number;
};
export declare type WS_TO_UI_GIMBAL_OBJ = {
    sensorId: SENSOR_ID_TYPE;
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
export declare enum UI_GIMBAL_ACTIONS {
    LookAtTargetOff = "LookAtTargetOff",
    LookAtTargetOn = "LookAtTargetOn"
}
export declare enum LOOK_AT_TARGET_STATE {
    NotActive = "NotActive",
    Auto = "Auto",
    Manual = "Manual",
    ExternalControl = "ExternalControl"
}
export declare type GIMBAL_TARGET = {
    target: GEOJSON_POINT;
};
export declare type WS_TO_GS_GIMBAL_OBJ = {
    sensorId: SENSOR_ID_TYPE;
    isLookAtTarget: LOOK_AT_TARGET_STATE;
    target?: GEOJSON_POINT;
    requestedGimbalAngles?: GIMBAL;
};
export declare type JOYSTICK_DATA = {
    sensorId: SENSOR_ID_TYPE;
    moveX: number;
    moveY: number;
};
export declare type FROM_TO<T = (POINT | POINT3D)> = [T, T];
export declare type FROM_TO_3D = [POINT3D, POINT3D];
export declare type VERSION_NUMBER = {
    version?: number;
};
export declare type COMPUTE_ROUTE_REQUEST = AGL_PARAMETERS & VERSION_NUMBER & {
    startFinishParameters?: {
        startPoint: ROUTE_POINT_PARAMETERS;
        finishPoint: ROUTE_POINT_PARAMETERS;
    };
    isAGL?: boolean;
    fromTo: FROM_TO<POINT3D>;
    staticPath?: POINT3D[];
    allowedId: AIR_VEHICLE_ID;
    maxLegLength?: number;
    height?: number;
    takeOffAslHeight?: number;
    isSaveLog?: boolean;
    isRouteFloating?: boolean;
    isStartFloating?: boolean;
};
export declare type AGL_PARAMETERS = {
    isAGL?: boolean;
    altitudeRange?: RANGE;
    ASL_Max?: number;
    slope?: RANGE & MAX_SLOPE_DEGREE;
    containerHeight?: number;
    heightAboveContainerForDrop?: number;
};
export declare type MAX_SLOPE_DEGREE = {
    maxSlopeDegree?: number;
};
export declare type DEFAULT_AGL_PARAMETERS = AGL_PARAMETERS & {
    isAGL: boolean;
    IRLockStartHeight: number;
    deliveryAzimuth: number;
};
export declare type ROUTE_AIR_VEHICLE = {
    allowedId: AIR_VEHICLE_ID;
    height?: number;
    takeoffASLHeight?: number;
};
export declare type ROUTE_POINT_PARAMETERS = {
    isFloating: boolean;
    isDirection: boolean;
    direction?: number;
};
export declare type COMPUTE_ROUTE_DIRECTION_REQUEST = COMPUTE_ROUTE_REQUEST & {
    direction: number;
    isDirection?: boolean;
    minDistanceToViewPoint?: number;
    lastLegLength?: number;
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
export declare enum LANDING_TYPE {
    NORMAL = "normal",
    OPTIC = "optic",
    ACCURATE = "accurate",
    EMERGENCY = "emergency"
}
export declare type COMMAND_TAKEOFF = {
    id: ID_TYPE;
    absHeight: number;
    corridorPoint?: GEOPOINT;
    corridorPoints?: GEOPOINT[];
    landingType: LANDING_TYPE;
    homeLocation: GEOPOINT3D;
    homeData: HOME_DATA;
    timeToOnboardRHSec: number;
    onboardRHAlt: number;
    sensors: SENSOR_OB[];
    gimbalLandingPreset: GIMBAL_LANDING_PRESET;
};
export declare type SENSOR_OB = {
    sensorId: string;
    type: MAPI_SENSOR_TYPE | string;
};
export declare type COMMAND_TAKEOFF_ONBOARD = COMMAND_TAKEOFF & {
    operationalAlt: number;
};
export declare type COMMAND_SECURITY_UPLOAD = COMMAND_TAKEOFF & {
    waypoints: AUTONOMOUS_POINT[];
};
export declare type REST_ROUTER_CONFIG = {
    class: IRest;
    path: string;
};
export declare enum SEVERITY {
    ERROR = "error",
    INFO = "info",
    SUCCESS = "success",
    WARNING = "warning",
    DEBUG = "debug",
    TRACE = "trace",
    FATAL = "fatal",
    TELEMETRY = "telemetry",
    TASK_EVENT = "taskEvent"
}
export declare enum SERVICE {
    WS = "WS",
    FCS = "FCS",
    AMS = "AMS",
    UTMG = "UTMG",
    UTMS = "UTMS",
    RS = "RS",
    GLR = "GLR",
    OnBoard = "OnBoard",
    Cpp = "Cpp",
    LDBS = "LDBS",
    ER7 = "ER7",
    rock7handler = "rock7handler",
    SMS = "SMS",
    SUTMG = "SUTMG",
    SGG = "SGG",
    VideoService = "VideoService",
    GCS = "GCS",
    MAPI = "MAPI",
    ExtUTMG = "ExtUTMG",
    POWG = "POWG"
}
export declare enum RESULT {
    SUCCESS = "SUCCESS",
    FAIL = "FAIL"
}
export declare type AIR_VEHICLE_LOG_PARAMETERS = {
    airVehicleName: string;
    airVehicleType: AIR_VEHICLE_TYPES;
    location: GEOJSON_POINT;
    operationalAlt: number;
    height: number;
    battery: number;
    status: AIR_VEHICLE_STATUS;
    waypointsPatternStatus?: WAYPOINTS_PATTERN_STATUS;
};
export declare type TASK_LOG_PARAMETERS = {
    taskName: string;
    taskType: TASK_TYPE;
    flightArea?: string;
};
export declare type SYSTEM_LOG_PARAMETERS = {
    text: string;
};
export declare type USER_NOTE_PARAMETERS = {
    text: string;
};
export declare type LOG_DATA = {
    airVehicleId: ID_TYPE;
    airVehicleLogParameters?: AIR_VEHICLE_LOG_PARAMETERS;
    taskLogParameters?: TASK_LOG_PARAMETERS;
    systemLogParameters?: SYSTEM_LOG_PARAMETERS;
    userNoteParameters?: USER_NOTE_PARAMETERS;
    service: SERVICE;
    severity: SEVERITY;
    timestamp: number;
};
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
export declare type LOG_FILTER_DATA = {
    startTime: number;
    endTime: number;
    airVehicleIds?: ID_TYPE[];
    taskTypes?: TASK_TYPE[];
    flightAreas?: string[];
};
export declare type LOG_AIR_VEHICLES_DATA = {
    airVehicleId: ID_TYPE;
    airVehicleName: string;
};
export declare type LOG_FLIGHT_AREAS_DATA = {
    area: string;
};
export declare type COMPUTE_LENGTH_UTIL_DATA = {
    point: POINT;
    length: number;
};
export declare type ZIP_DATA<T = any> = {
    zip?: string;
    json?: T;
};
export declare enum TARGET_ACTION {
    create = "create",
    release = "release"
}
export declare type CREATE_RELEASE_TARGET = {
    sensorIp: string;
    sensorId?: SENSOR_ID_TYPE;
    detectionId: ID_TYPE;
    geoLocation?: GEOJSON_POINT;
    action: TARGET_ACTION;
    sensorType?: SENSOR_TYPE;
    name?: string;
    distanceToDynamicPoint: number;
    isNoGPS: boolean;
};
export declare type CREATE_TARGET_TRACKING = {
    name?: string;
    geoLocation: GEOJSON_POINT;
    point?: GEOJSON_POINT;
    minDistanceToViewPoint?: number;
    targetAGL?: number;
    azimuthToPoint?: boolean;
    viewingAngle?: number;
    isAGL: boolean;
    missionAltAGL: number;
    headingType: HEADING_RELATIVE_TYPE;
    heading: number;
    isNoGPS?: boolean;
    styles?: any;
};
export declare type MAPI_CREATE_TARGET_TRACKING = {
    trackPointLocation: GEOPOINT3D;
    name: string;
    distanceFromTrackPoint?: number;
    trackPointAGL?: number;
    setAngleToTarget?: boolean;
    angleToTrackPoint: number;
    isAGLFlight: boolean;
    missionAGL?: number;
    droneHeadingTypeAtLastRoutePoint: HEADING_RELATIVE_TYPE;
    headingAtLastRoutePoint: number;
};
export declare type CREATE_TARGET_TRACKING_TASK = CREATE_TARGET_TRACKING & {
    taskId: string;
    type: TASK_TYPE;
    status: ALGORITHM_STATUS;
    ASL_Max: number;
    altitudeRange: RANGE;
    slope: RANGE;
    maxAltASL: number;
};
export declare type MOVE_TO_POINT = {
    airVehicleId: string;
    geoLocation: GEOJSON_POINT;
    altitude?: number;
    headingType?: HEADING_RELATIVE_TYPE;
    requestedAzimuth?: number;
    requestedHeightATP?: number;
};
export declare type MAPI_MOVE_DRONE_LOCATION = {
    airVehicleId: string;
    missionId: string;
    requestedLocation: GEOPOINT3D;
    altitude?: number;
    headingTypeAtPoint?: HEADING_RELATIVE_TYPE;
    setHeadingAtPoint?: number;
};
export declare type ROTATE_REQUEST = {
    airVehicleId: string;
    missionId?: string;
    requestedAzimuth: number;
};
export declare type MAPI_TARGET_TRACKING_ROTATE = {
    airVehicleId: string;
    missionId: string;
    heading: number;
};
export declare enum HEADING_RELATIVE_TYPE {
    toGimbal = "To Gimbal",
    toRoute = "To Route",
    constant = "Set Heading"
}
export declare type TRACKS = {
    sensorId: SENSOR_ID_TYPE;
    sentTime: number;
    timeFromStart: number;
    frameID: number;
    fullFrame: string;
    frameGlobalID: ID_TYPE;
    sensorIp: string;
    detections: DETECTIONS[];
};
export declare type DETECTIONS = {
    detection: DETECTION;
};
export declare type DETECTION = {
    id: ID_TYPE;
    sensorId: SENSOR_ID_TYPE;
    entX: number;
    entY: number;
    width: number;
    height?: number;
    geoLocation: GEOJSON_POINT;
    class: DETECTION_CLASS;
    subClass: DETECTION_SUB_CLASS;
    confidence: CONFIDENCE;
    frame: string;
    trackHistory: POINT[];
    sensorIp: string;
    styles: {
        colorTrack: string;
    };
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
export declare type DETECTIONS_OBJECT_WS = MAP<{
    detectionsArr: DETECTIONS[];
    detectionsMap: MAP<DETECTION>;
}>;
export declare type ID_TYPE = string;
export declare type SENSOR_ID_TYPE = ID_TYPE;
export declare type SENSOR_ID = {
    sensorId: SENSOR_ID_TYPE;
};
export declare type TASK_ID = ID_TYPE;
export declare type AIR_VEHICLE_ID = ID_TYPE;
export declare type SITE_ID = ID_TYPE | number;
export declare type ID_OBJ = {
    id: ID_TYPE;
};
export declare type TASK_ID_OBJ = {
    taskId: TASK_ID;
};
export declare type HOME_LOCATION = {
    id: ID_TYPE;
    homeData: HOME_DATA;
    altOffset?: number;
};
export declare type HOME_DATA = {
    homePoint: GEOJSON_POINT;
    isAGL: boolean;
    takeoffASLHeight: number;
    landASLHeight?: number;
    isChangedHome?: boolean;
    altitudeRange?: RANGE;
    ASL_Max?: number;
    slope?: RANGE;
    emergencyRHHeight?: number;
    staticPath?: POINT3D[];
    fullPath?: POINT3D[];
};
export declare type SITE_NAME_OBJ = {
    siteName?: SITE_ID;
};
export declare type ZIP_REQUEST<T> = ZIP_DATA & T;
export declare type DYNAMIC_NFZ_ID = ID_OBJ & ALLOWED_ID;
export declare type ROUTE = {
    route: (POINT | POINT3D)[];
};
export declare type ROUTE3D = {
    route: POINT3D[];
};
export declare type COMPUTE_ROUTE = ROUTE & {
    id?: ID_TYPE;
    staticPathFromToIndex?: FROM_TO<number>;
};
export declare type ROUTE_WITH_GRAPH = COMPUTE_ROUTE & DTM_GRAPH;
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
export declare enum LOCK_SERVICES {
    externalUTM = "externalUTM"
}
export declare type CARTOGRAPHIC_TO_MATRIX = VERSION_NUMBER & {
    allowedId: AIR_VEHICLE_ID;
    point: POINT | POINT3D;
    height?: number;
};
export declare type CARTOGRAPHIC_ARR_TO_MATRIX = {
    allowedId: AIR_VEHICLE_ID;
    points: (POINT | POINT3D)[];
};
export declare type DYNAMIC_NFZ_FROM_ROUTE = {
    id?: ID_TYPE;
    allowedId: AIR_VEHICLE_ID;
    routeForLock: POINT3D[];
    startOffset?: number;
    finishOffset?: number;
    shape?: NFZ_SHAPE;
    NFZ_Factor?: number;
    isAGL?: boolean;
};
export declare enum NFZ_SHAPE {
    circle = "circle",
    rectangle = "rectangle"
}
export declare type SENSOR_DATA_IWS = {
    sensorId?: ID_TYPE;
    sensorIp?: string;
    airVehicleIp: string;
    status: AIR_VEHICLE_STATUS;
    taskId?: ID_TYPE | OBJ_VALUE;
    geometry?: SENSOR_GEOMETRY_IWS;
    styles?: SENSOR_STYLES_IWS;
};
export declare type SENSOR_GEOMETRY_IWS = {
    viewRectangle: POINT3D[];
    directionArrow: VECTOR;
};
export declare type SENSOR_STYLES_IWS = {};
export declare type SENSOR_DEFAULT_PARAMETERS = {
    Sensor: {
        SensorId: ID_TYPE;
        SensorType: string;
        SensorIP?: string;
        VideoURL: string;
        FOV: number;
        cameraParameters: any;
    };
};
export declare type COMPUTE_ROUTE_DTM = {
    taskId?: TASK_ID;
    airVehicleType: AIR_VEHICLE_TYPES;
    launcherPoint: GEOJSON_POINT;
    cartographicPath: (POINT | POINT3D)[];
    pathForCompute?: POINT_ON_PATH_FOR_AGL[];
    pairsCrossObstacles?: FROM_TO<POINT_ON_PATH_FOR_AGL>[][];
    altitudeRange: RANGE;
};
export declare type COMPUTE_ROUTE_BYPASS_RELIEF = AGL_PARAMETERS & VERSION_NUMBER & {
    takeOffAslHeight: number;
    allowedId: AIR_VEHICLE_ID;
    cartographicPath: (POINT | POINT3D)[];
};
export declare type COMPUTE_ROUTE_PARAMS = {
    taskId: ID_TYPE;
    airVehicleId: ID_TYPE;
    isStartFloating: boolean;
    isFinishFloating?: boolean;
    isAGL: boolean;
    altAGL?: number;
    takeoffASLHeight: number;
    altitudeRange?: RANGE;
    ASL_Max?: number;
    slope?: RANGE;
    staticPath?: POINT3D[];
    isFirstPointAltFromDrone?: boolean;
    minDistanceToViewPoint?: number;
    isHideComputeRouteLogs?: boolean;
    direction?: number;
    isDirection?: boolean;
};
export declare type TAKEOFF_PARAMS = {
    landingType: LANDING_TYPE;
};
export declare type SHOW_ROUTE_DATA = {
    airVehicleId: AIR_VEHICLE_ID;
    taskId: TASK_ID;
    airVehicleRoute: GEOJSON_POLYLINE;
    timeForShow: number;
    styles: {
        lineColor: string;
        lineWidth: number;
    };
};
export declare type FIX_ROUTE_REQUEST = {
    path: POINT_ON_PATH_FOR_AGL[];
    maxHeight: number;
    slope: RANGE;
    groundPath: POINT3D[];
};
export declare type FIX_ROUTE_OBJ = {
    path: POINT_ON_PATH_FOR_AGL[];
    maxHeight: number;
    slope: RANGE;
    pathMap: MAP<POINT_INDEXED>;
    pathHeightSorted: POINT_INDEXED[];
    pathOptimized: CARTESIAN2[];
    groundPath: POINT3D[];
};
export declare type AIRVEHICLE_TASK = {
    taskId: TASK_ID;
    airVehicleId: ID_TYPE;
};
export declare type DTM_ROUTE_DATA = ROUTE & {
    groundASL: POINT3D[];
};
export declare type DTM_ROUTE_FULL_DATA = ROUTE & DTM_GRAPH & {
    route_notFiltered?: (POINT | POINT3D)[];
    groundASL: POINT3D[];
};
export declare type DTM_ROUTE_FULL_DATA_UI = {
    groundASL_Cartesian2: CARTESIAN2[];
    routeASL_Cartesian2: CARTESIAN2[];
    locationDrone_CARTESIAN2?: CARTESIAN2;
    graphRange: RANGE_CARTESIAN2;
    airVehicleId?: string;
    taskId?: string;
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
export declare type DTM_GRAPH_REQUEST = {
    pathPoints: (POINT | POINT3D)[];
    defaultAltitude: number;
    allowedId?: string;
    takeOffAslHeight?: number;
};
export declare type ROUTE_DTM = DTM_ROUTE_FULL_DATA & {
    path: POINT3D[];
    maxDtmHeightFromLauncherPoint: number;
};
export declare type POINT_INDEXED = {
    point: POINT_ON_PATH_FOR_AGL;
    index: number;
};
export declare type FIX_POINT_DATA = {
    point?: POINT_ON_PATH_FOR_AGL;
    index?: number;
    isFixed: boolean;
};
export declare type ALONG_GEOPOINT = {
    point: GEOPOINT;
    distance: number;
    index: number;
};
export declare type ALONG_GEOPOINT3D = {
    point: GEOPOINT3D;
    distance: number;
    index: number;
};
export declare type MISSION_ROUTE_UPDATE = {
    airVehicleId: AIR_VEHICLE_ID;
    missionRoute: UPDATE_ROUTE_DATA;
    firstPartRoute: POINT[];
};
export declare enum EMITTER {
    blank = "blank",
    AMS = "AMS",
    DBS = "DBS",
    FCS = "FCS",
    GCS = "GCS",
    RS = "routeService",
    WS = "webServer",
    GW = "GW",
    userMessages = "userMessages",
    multiDeploy = "multiDeploy",
    actions = "actions"
}
export declare type MESSAGE_UI_STYLES = {
    titleColor: COLORS;
    messageColor: COLORS;
    bgColor: COLORS;
};
export declare type MESSAGE_DATA = {
    emitter: EMITTER;
    type: NOTIFICATION_TYPE;
    message: string;
    title: string;
    date?: number;
    errors?: MAPI_ERRORS;
    airVehicleId?: ID_TYPE;
    missionId?: ID_TYPE;
};
export declare type MAPI_OUT_USER_MESSAGE = {
    type: MAPI_SEVERITY;
    userMessageTitle: string;
    userMessageText: string;
    timestamp: number;
    errors?: MAPI_ERRORS;
    airVehicleId?: ID_TYPE;
    missionId?: ID_TYPE;
};
export declare type MESSAGE_UI = MESSAGE_DATA & Partial<AIRVEHICLE_ID> & {
    count: number;
    styles: MESSAGE_UI_STYLES;
};
export declare type MESSAGE_UI_AIRVEHICLE = Partial<AIRVEHICLE_ID> & {
    data: MESSAGE_UI[];
};
export declare type UI_ACTION_DATA_ARR = {
    pointId: string;
    actions: {
        actionId: string;
        actionType: string;
        actionStatus: string;
    }[];
}[];
export declare enum RC_MODE {
    manual = "#manual",
    auto = "auto"
}
export declare type VERSION = {
    name: string;
    lastUpdate: string;
    lastUpdateNumber: number;
};
export declare type VERSION_NUM = {
    version: number;
    lastUpdate: number;
    lastUpdateISO: string;
};
export declare type AIRVEHICLE_ID = {
    airVehicleId: ID_TYPE;
};
export declare type OPERATIONAL_ALT = {
    operationalAlt: number;
};
export declare type SLOPE = {
    slope: RANGE;
};
export declare type UPDATE_OPERATIONAL_ALT = AIRVEHICLE_ID & OPERATIONAL_ALT;
export declare type UPDATE_SLOPE = AIRVEHICLE_ID & SLOPE;
export declare enum GW_MESSAGE_DATA_TYPE {
    request = "request",
    response = "response"
}
export declare type GW_MESSAGE = {
    msgType: string;
    dataType: GW_MESSAGE_DATA_TYPE;
    prefix: string;
    logLevel: string;
    timeStamp: number;
    serviceName: string;
    data: string;
};
export declare enum BASIC_SITE_DATA {
    perimeter = "perimeter",
    dynamicNfz = "dynamicNfz",
    staticNfz = "staticNfz"
}
export declare type AUTONOMUS_ROUTE_FOR_FCS = {
    actionPoints: AUTONOMOUS_POINT[];
    metadata?: AUTONOMOUS_TASK_METADATA;
};
export declare type AUTONOMOUS_TO_ONBOARD = {
    type: TASK_TYPE;
    isForce: boolean;
    actionPoints: AUTONOMOUS_POINT[];
    landingPoints?: LANDING_LOCATION[];
    id: string;
    metadata?: AUTONOMOUS_TASK_METADATA;
};
export declare type SECURITY_ROUTE_DATA = SITE_NAME_OBJ & ROUTE_SECURITY_FROM_UI & {
    routeId: ID_TYPE;
    totalValue: number;
};
export declare type IR_LOCK_ACTION_PARAMETERS = {
    azimuth: number;
    requestedAltitude: number;
};
export declare type WINCH_ACTION_PARAMETERS = {
    startAltitude: number;
    requestedPackageHeight: number;
};
export declare type DROP_ACTION_PARAMETERS = {};
export declare type ACTION_PARAMETERS = SCAN_ACTION_PARAMETERS | GIMBAL_ACTION_PARAMETERS | WAYPOINTS_ACTION_PARAMETERS | MOVE_ACTION_PARAMETERS | IR_LOCK_ACTION_PARAMETERS | WINCH_ACTION_PARAMETERS | DROP_ACTION_PARAMETERS | ZOOM_ACTION_PARAMETERS | CAMERA_ACTION_PARAMETERS | EXTERNAL_INPUT_PARAMETERS | INSTALL_ACTION_PARAMETERS;
export declare type INSTALL_ACTION_PARAMETERS = TASK_INFORMATION & {
    type: ACTION_TYPE.Install;
    DropHeightAGL: number;
    sensorType: any;
};
export declare type TASK_INFORMATION = {
    taskId: string;
    flightId: string;
};
export declare type EXTERNAL_INPUT_PARAMETERS = {
    type: ACTION_TYPE.externalInput;
    description: string;
    options: EXTERNAL_STATUS;
};
export declare enum EXTERNAL_STATUS {
    NA = 1,
    ok = 2,
    cancel = 3
}
export declare type SCAN_ACTION_PARAMETERS = {
    startScanYaw: number;
    finishScanYaw: number;
    relType: REL_TYPE;
    pitch: number;
    direction: ACTION_DIRECTIONS;
};
export declare type CAMERA_ACTION_PARAMETERS = {
    startScanYaw: number;
    finishScanYaw: number;
    relType: REL_TYPE;
    pitch: number;
    direction: ACTION_DIRECTIONS;
    zoomValue?: number;
};
export declare enum ACTION_DIRECTIONS {
    clockwise = "clockwise",
    counterClockwise = "counterClockwise"
}
export declare type MOVE_ACTION_PARAMETERS = {
    yaw: number;
    pitch: number;
    relType: REL_TYPE;
};
export declare type GIMBAL_ACTION_PARAMETERS = {
    actionType: ACTION_TYPE;
    startScanYaw: number;
    finishScanYaw: number;
    relType: GIMBAL_REL_TYPE;
    pitch: number;
    direction: ACTION_DIRECTIONS;
    yaw: number;
};
export declare type ZOOM_ACTION_PARAMETERS = {
    zoomValue: number;
};
export declare type WAYPOINTS_ACTION_PARAMETERS = {
    waypointsMissionAction: WAYPOINT_ACTION;
    requestedAltitude?: number;
    requestedAzimuth?: number;
    isLidar?: boolean;
};
export declare type CREATE_AUTONOMOUS_TASK_UI = {
    newTask: TASK;
    autonomousRoute: ROUTE_SECURITY;
};
export declare type EDIT_ROUTE_TASK = {
    newTask: TASK;
    newRoute: ROUTE_DATA_FROM_UI;
};
export declare type ROUTE_SECURITY_FROM_UI = {
    actionPoints: AUTONOMOUS_POINT[];
    todo: string;
};
export declare type ROUTE_SECURITY = {
    velocity: number;
    heading: number;
    headingType: HEADING_TYPE;
    relativeHeadingType: REL_TYPE;
    relativeAlt: number;
    POI?: {
        geoPoint: GEOPOINT3D_SHORT;
    };
    actions: AUTONOMOUS_ACTION[];
    routePoints: AUTONOMOUS_POINT[];
};
export declare type REGISTER = {
    apiKey: string;
    ussId: number;
};
export declare type REGISTER_RESPONSE = {
    token: string;
    time: string;
    expire: string;
};
export declare type AUTH_IDENTIFIER = {
    dsosId: string;
    dsosPassword: string;
};
export declare type AUTH_VERIFY = {
    token: string;
    service_roles: ROLE[];
};
export declare type AUTH_OBJ = {
    token: string;
    exp: number;
    username: string;
};
export declare type SYNC_USS_DATA = {
    time: string;
    entities: MAP<AIRWAYZ_ENTITY>;
};
export declare type SYNC_USS_DATA_RESPONSE = {
    usses: MAP<USS>;
    nfzs: MAP<NFZ_EXTERNAL>;
};
export declare type USS = {
    entities: MAP<AIRWAYZ_ENTITY>;
    info: USS_INFO;
    nfzs: MAP<NFZ_EXTERNAL>;
    description: any;
};
export declare type NFZ_EXTERNAL = {
    id: string;
    name: string;
    height: number;
    polygon: Array<ZONE_POINT>;
    corridor: Array<ZONE_POINT>;
    circle: Array<ZONE_POINT>;
    type: string;
    expiration: string;
    timestamp: string;
    ctr: CTR_METADATA;
};
export declare type CTR_METADATA = {
    id: number;
    nfz_id: string;
    org_id: number;
};
export declare type ZONE_POINT = GEOPOINT3D & {
    id: string;
    nfz_id: string;
};
export declare type USS_INFO = {
    lastUpdateTime: Date;
    state: string;
};
export declare type AIRWAYZ_ENTITY = {
    id: number;
    data: AIRWAYZ_ENTITY_DATA;
    chat?: string;
    required?: any;
};
export declare type GET_FINAL_FLIGHT_PLAN_APPROVAL = {
    pid: string;
    planId?: string;
};
export declare type GET_FINAL_FLIGHT_PLAN_RESPONSE = {
    INVALID_TOKEN?: string;
    request_state: REQUEST_STATE_ENUM;
    planId: string;
    collisions: Array<Array<COLLISION_ALERT>>;
    path: Array<POI>;
};
export declare type CANCEL_FLIGHT_PLAN_APPROVAL = {
    pid: string;
    plan_id: string;
};
export declare type CANCEL_FLIGHT_PLAN_RESPONSE = {
    request_state: REQUEST_STATE_ENUM;
};
export declare type GET_FLIGHT_PLAN_APPROVAL = {
    pid: string;
    depT: string;
    path: Array<POI>;
};
export declare type ROUTE_FOR_FLIGHT_PLAN_APPROVAL = {
    id: string;
    path: POINT_FOR_APPROVAL[];
};
export declare type GET_FLIGHT_PLAN_APPROVAL_RESPONSE = {
    INVALID_TOKEN?: string;
    pid?: string;
    request_state: REQUEST_STATE_ENUM;
    planId: string;
    collisions: Array<Array<COLLISION_ALERT>>;
    path: Array<POI>;
};
export declare type ESOCKETTIMEDOUT = {
    code: string;
    connect: boolean;
};
export declare type POSITION = GEOPOINT3D & {
    time: number;
    accuracy: number;
};
export declare type PILOT = {
    id: string;
    callname: string;
    position: POSITION;
};
export declare type AIRWAYZ_DRONE = {
    path: DRONE_PATH;
    isControllable: boolean;
    gps: DRONE_GPS;
    autonomous: DRONE_AUTONOMOUS;
    id: number;
    name: string;
    model: string;
    attitude: DRONE_ATTITUDE;
    positions: Array<POSITION>;
    flyingState: AIRWAYZ_FLYINS_STATE;
    battery: number;
    signalStrength: number;
    velocity?: AIRWAYZ_VELOCITY;
    gpsSatCount?: number;
};
export declare type AIRWAYZ_VELOCITY = {
    v_total: number;
    vx: number;
    vy: number;
    vz: number;
};
export declare type DRONE_PATH = {
    nextPoiIndex: number;
    poi: Array<POI>;
};
export declare type DRONE_GPS = {
    gpsSatelliteCount: number;
    gpsSignalStrength: number;
};
export declare type DRONE_AUTONOMOUS = {
    mode: AIRWAYZ_MODE_ENUM;
};
export declare type DRONE_ATTITUDE = {
    yaw: number;
    roll: number;
    pitch: number;
    time: string;
};
export declare type ALERTS = {
    collisions: MAP<COLLISION_ALERT>;
    global: Array<Array<GLOBAL_ALERTS>>;
    drones: Array<Array<DRONE_ALERTS>>;
};
export declare type AIRWAYZ_ENTITY_DATA = {
    pilot?: PILOT;
    drone: AIRWAYZ_DRONE;
    alerts?: ALERTS;
    appVersion: string;
    time: string;
};
export declare type DRONE_ALERT_PATH = {
    planId: number;
    dpeTime: Date;
    poi: Array<POI>;
};
export declare type GLOBAL_ALERTS = {
    source: COLLISION_ALERT_SOURCE;
    type: AIRWAYZ_TYPE_ENUM;
    time: string;
    id: number;
};
export declare type DRONE_ALERTS = {
    source: COLLISION_ALERT_SOURCE;
    type: AIRWAYZ_TYPE_ENUM;
    time: number;
    id: number;
    path: DRONE_ALERT_PATH;
};
export declare type COLLISION_ALERT_SOURCE = {
    id: string;
    name: string;
};
export declare type COLLISION_ALERT = {
    id: number;
    source: COLLISION_ALERT_SOURCE;
    time: string;
    drones: Array<ALERTS_DRONE_DATA>;
};
export declare type ALERTS_DRONE_DATA = {
    id: String;
    owner: DRONE_OWNER;
    sugpath: SUGPATH;
    mindistance: number;
};
export declare type DRONE_OWNER = {
    id: String;
    name: String;
    url: String;
    position: GEOPOINT3D_SHORT;
};
export declare type SUGPATH = {
    altitude: number;
    latitude: number;
    longitude: number;
    name: string;
    id: number;
    heading: number;
    speed: number;
    accuracy: number;
    delay: number;
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
export declare type AUTONOMOUS_POINT = {
    id: string;
    geoPoint: GEOPOINT3D_SHORT;
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
export declare type AUTONOMOUS_DEFAULT_PARAMS = {
    velocity: number;
    heading: number;
    headingType: HEADING_TYPE;
    relativeHeadingType: REL_TYPE;
    relativeAlt: number;
    actions: AUTONOMOUS_ACTION[];
};
export declare type ACTION_POINT = {
    geoPoint: GEOPOINT3D_SHORT;
    relativeAlt: number;
    relativeHeadingType: REL_TYPE;
    heading: number;
    headingType: HEADING_TYPE;
    velocity: number;
    POI: {
        geoPoint: GEOPOINT3D_SHORT;
        relativeAlt: number;
    };
};
export declare type ROUTE_SECURITY_DATA = {
    version: number;
    routeId?: ID_TYPE;
    totalValue?: number;
    actionPoints: AUTONOMOUS_POINT[];
    autonomousRouteDefault?: AUTONOMOUS_POINT;
    staticPart?: AUTONOMOUS_POINT[];
};
export declare type AUTONOMOUS_UPDATE_DATA = {
    airVehicleId: AIR_VEHICLE_ID;
    autonomousRouteData: ROUTE_SECURITY_DATA;
};
export declare type SECURITY_JSON_TO_UI = {
    routeId: ID_TYPE;
    actionPoints: AUTONOMOUS_POINT[];
    totalValue: number;
    styles: {
        colorPolyline: string;
        dashArr: string;
        weight: number;
        colorCircle: string;
        type: string;
    };
    name?: string;
};
export declare type AUTONOMOUS_ACTION = {
    actionId: ID_TYPE;
    actionFor: ACTION_FOR;
    type: ACTION_TYPE;
    startConditions: ACTION_CONDITIONS;
    endConditions: ACTION_CONDITIONS;
    errorConditions?: ACTION_CONDITIONS;
    onErrorAction: ON_ERROR_ACTION_PARAMETERS;
    action: ACTION_PARAMETERS;
    metadata?: AUTONOMOUS_TASK_METADATA;
};
export declare type ON_ERROR_ACTION_PARAMETERS = {
    action: ON_ERROR_ACTION;
};
export declare enum ON_ERROR_ACTION {
    stopMission = "stopMission",
    continueMission = "continueMission"
}
export declare type ACTIONS_DATA = {
    isAutoDrop: boolean;
    dropHeight: number;
    operationalHeight: number;
    decisionAlt: number;
    metadata: AUTONOMOUS_TASK_METADATA;
};
export declare type NORMAL_LANDING = COMMAND_TAKEOFF & {
    isNeedGimbalChange: boolean;
    gimbalPitchAngle: number;
};
export declare type VISUAL_LANDING = COMMAND_TAKEOFF & {
    emergencyPosition: GEOPOINT3D;
    landingSurfaceHeight: number;
    visualLandingTimeoutSecond: number;
    horizontalSpeed: number;
    speedToEmergencyPoint: number;
    visualMaxTolerance: number;
    minAltitudeTolerance: number;
    verticalSpeed: number;
    startAltForVisualLanding: number;
    minAltForVisualLanding: number;
    maxVerticalSpeed: number;
    headingRelativeNorth: number;
    type: VISUAL_LANDING_TYPE;
};
export declare enum VISUAL_LANDING_TYPE {
    irlock = "irlock",
    wr = "wr"
}
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
export declare type LANDING_DATA = NORMAL_LANDING | VISUAL_LANDING | ACCURATE_LANDING;
export declare enum REL_TYPE {
    North = "North",
    Body = "Body"
}
export declare enum GIMBAL_REL_TYPE {
    North = "North",
    Body = "Body",
    WithGimbal = "WithGimbal"
}
export declare enum REL_WITH_ACTION {
    startToStart = "startToStart",
    endToStart = "endToStart"
}
export declare enum ACTION_CONDITIONS_FIELDS {
    velocity = "velocity",
    altitude = "altitude",
    heading = "heading",
    pointReached = "pointReached",
    timeFromRelativeAction = "timeFromRelativeAction",
    relWithAction = "relWithAction",
    relativeActionId = "relativeActionId",
    approval = "approval",
    actionLogic = "actionLogic",
    externalInput = "externalInput"
}
export declare type ACTION_CONDITIONS = {
    [ACTION_CONDITIONS_FIELDS.velocity]?: number;
    [ACTION_CONDITIONS_FIELDS.altitude]?: number;
    [ACTION_CONDITIONS_FIELDS.heading]?: number;
    [ACTION_CONDITIONS_FIELDS.pointReached]?: boolean;
    [ACTION_CONDITIONS_FIELDS.timeFromRelativeAction]?: number;
    [ACTION_CONDITIONS_FIELDS.relWithAction]?: REL_WITH_ACTION;
    [ACTION_CONDITIONS_FIELDS.relativeActionId]?: string;
    [ACTION_CONDITIONS_FIELDS.approval]?: boolean;
    [ACTION_CONDITIONS_FIELDS.actionLogic]?: boolean;
    [ACTION_CONDITIONS_FIELDS.externalInput]?: boolean;
};
export declare enum WAYPOINT_ACTION {
    Stop = "Stop",
    Pause = "Pause",
    Resume = "Resume",
    ChangeAltitude = "ChangeAltitude",
    Rotate = "Rotate",
    DropPackage = "DropPackage",
    land = "land",
    takeOff = "takeOff"
}
export declare enum ACTION_FIELDS {
    startVelocity = "startVelocity",
    startAltitude = "startAltitude",
    startRelAction = "startRelAction",
    startPointReached = "startPointReached",
    endVelocity = "endVelocity",
    endAltitude = "endAltitude",
    endRelAction = "endRelAction",
    endPointReached = "endPointReached"
}
export declare enum ACTION_TYPE {
    maneuver = "maneuver",
    Scan = "Scan",
    Stow = "Stow",
    Move = "Move",
    ExternalAction = "ExternalAction",
    IR_Lock = "IR_Lock",
    Winch = "Winch",
    Drop = "Drop",
    Zoom = "Zoom",
    Install = "Install",
    externalInput = "externalInput",
    none = "none"
}
export declare type PREV_LOCATION = {
    position: GEOPOINT3D;
    time: number;
};
export declare type ACCURATE_LAND = {
    lat: number;
    lon: number;
    horizontalSpeed: number;
    maxErrorDistance: number;
    minAltitude: number;
    verticalSpeed: number;
    altOffset: number;
    isAccurateLand?: boolean;
    isCorridor?: boolean;
};
export declare type HOME_POSITION = ACCURATE_LAND & {
    isAccurateLand?: boolean;
    isCorridor?: boolean;
};
export declare enum AIRWAYZ_MODE_ENUM {
    Manual = "manual",
    Automission = "automission",
    Autonomous = "autonomous"
}
export declare enum AIRWAYZ_FLYINS_STATE {
    _100 = "100",
    _101 = "101",
    _102 = "102",
    _103 = "103",
    _104 = "104",
    _105 = "105",
    _106 = "106",
    _107 = "107",
    _108 = "108"
}
export declare enum AIRWAYZ_TYPE_ENUM {
    Stop = "emg_stop",
    Land = "emg_land"
}
export declare enum REQUEST_STATE_ENUM {
    approved = "approved",
    disapproved_nfz = "disapproved_nfz",
    disapproved_conflict = "disapproved_conflict"
}
export declare type POINT_OF_ROUTE = {
    geoPoint: GEOPOINT3D_SHORT;
    altASL: number;
    altATP: number;
    velocity: number;
    idleTimeAtPoint: number;
};
export declare type FLIGHT_ROUTE = {
    pointsOfRoute: POINT_OF_ROUTE[];
};
export declare type DRONE_TELEMETRY = {
    droneId: ID_TYPE;
    droneName: string;
    telemetryOriginTimestamp: number;
    altASL: number;
    altATP?: number;
    takeOffPoint?: GEOPOINT3D_SHORT;
    velocity: number;
    heading: number;
    GPS_Status: GPS_STATUS;
    flightMode: FLIGHT_MODE;
    flightStatus: FLIGHT_STATUS;
    isControlled: boolean;
    flightRoute?: FLIGHT_ROUTE;
    droneType: string;
    energy: number;
    timeLeftForStartLand?: number;
    nextRoutePoint: number;
    location: GEOPOINT3D_SHORT;
};
export declare type DRONES_TELEMETRY_DATA = {
    USS_ID: string;
    drones: DRONE_TELEMETRY[];
};
export declare type WINCH_TELEMETRY_DATA = {
    state: COMMON_STATE;
    agl: number;
    payload_height: number;
    scale_weight: number;
    time_stamp: number;
    technicalStatus: A2Z_TECHNICAL_STATUS;
    lockedForRH: boolean;
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
    A2Z_STATE_ERROR = 11,
    A2Z_STATE_FAILSAFE = 12
}
export declare enum COMMON_STATE {
    COMMON_STATE_ATTACHED = 0,
    COMMON_STATE_IN_AIR = 1,
    COMMON_STATE_ON_GROUND = 2,
    COMMON_STATE_FREEFALL = 3,
    COMMON_STATE_BRAKING = 4,
    COMMON_STATE_REELING_DOWN = 5,
    COMMON_STATE_REELING_UP = 6,
    COMMON_STATE_FREEWHEEL = 7,
    COMMON_STATE_AUTODELIVER = 8,
    COMMON_STATE_DEV = 9,
    COMMON_STATE_UNKNOWN = 10,
    COMMON_STATE_ERROR = 11,
    COMMON_STATE_BOOTUP = 12,
    COMMON_STATE_HOLD = 13,
    COMMON_STATE_DROP_AND_ARR = 14,
    COMMON_STATE_GROUND_SENSE = 15,
    COMMON_STATE_RETURN_TO_HO = 16,
    COMMON_STATE_REDELIVER = 17,
    COMMON_STATE_ABANDON_LINE = 18,
    COMMON_STATE_LOCKING = 19,
    COMMON_STATE_LOAD_PACKAGE = 20,
    COMMON_STATE_LOAD_LINE = 21,
    COMMON_STATE_FAILSAFE = 22,
    COMMON_STATE_UNLOCKING = 23
}
export declare enum A2Z_TECHNICAL_STATUS {
    OK = "OK",
    NOT_CONNECTED = "NOT_CONNECTED"
}
export declare enum GPS_STATUS {
    FIX = "FIX",
    NotAccurate = "NotAccurate",
    NoGps = "NoGps"
}
export declare enum FLIGHT_MODE {
    Manual = "Manual",
    GCS = "GCS",
    Auto = "Auto",
    EmergencyGCS = "EmergencyGCS",
    EmergencyAuto = "EmergencyAuto"
}
export declare enum DRONE_TYPE {
    M300 = "M300",
    M600 = "M600",
    genPixhawk = "genPixhawk",
    genVTOL = "genVTOL"
}
export declare enum FLIGHT_STATUS {
    NotActive = "NotActive",
    TakeOff = "TakeOff",
    OnMission = "OnRoute",
    ReturnHome = "RH",
    Landing = "Land",
    Hover = "Hover"
}
export declare type ROUTE_DATA_FOR_UTM = {
    pid: string;
    time: string;
    points: POINT_FOR_APPROVAL[];
};
export declare type ALERT_DATA_UI = {
    id: string;
    type: ALERT_TYPE;
    airVehicleIdFrom: string;
    airVehicleIdTo?: string;
    toPoint?: GEOPOINT3D_SHORT;
    distance?: number;
    recommendedDistance?: number;
    styles?: ALERT_STYLE;
};
export declare enum ALERT_TYPE {
    alert = "alert",
    warning = "warning"
}
export declare type ALERT_STYLE = {
    lineColor: string;
    lineWidth: number;
};
export declare type ALERT_TO_MAPI = {
    origin: ALERT_ORIGINS;
    alerts: ALERT_DATA_UI[];
};
export declare enum ALERT_ORIGINS {
    extUTMG = "extUTMG"
}
export declare enum ALLOCATION_PROCESS_TYPE {
    auto = "auto",
    external = "external"
}
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
export declare type POINT_DISTANCE = {
    point: POINT3D;
    distance: number;
};
export declare type EMERGENCY_LAND_COMMAND = {
    airVehicleId: ID_TYPE;
    landingPointId?: ID_TYPE;
};
export declare type LANDING_MODEL = {
    title: string;
    altitude: number;
    latitude: number;
    longitude: number;
    name: string;
    landingSurfaceHeight: number;
};
export declare type LANDING_LOCATION = {
    id: ID_TYPE;
    location: GEOPOINT3D;
    name: string;
    landingSurfaceHeight: number;
    emergencyPointId?: ID_TYPE;
};
export declare type LANDING_POINTS = {
    landingPoints: LANDING_LOCATION[];
    emergencyPoints: LANDING_LOCATION[];
    spareLandingPoints: LANDING_LOCATION[];
};
export declare enum LANDING_POINTS_TYPE {
    spareLandingPoints = "spareLandingPoints",
    landingPoints = "landingPoints",
    emergencyPoints = "emergencyPoints",
    draw = "draw"
}
export declare type VISUAL_POINT_DATA = {
    landing: LANDING_LOCATION;
    emergency: LANDING_LOCATION;
};
export declare type VISUAL_POINT_DRONE = {
    airVehicleId: AIR_VEHICLE_ID;
    landingPointId: ID_TYPE;
};
export declare enum ROCK_SEVEN_FLUSH {
    flush = "yes"
}
export declare type SHIPMENT_MODEL = {
    type: TASK_TYPE;
    title: string;
    name: string;
    altitude: number;
    latitude: number;
    longitude: number;
    isAGL: boolean;
    altitudeRange: RANGE;
    MSL_Max: number;
    slope?: RANGE & MAX_SLOPE_DEGREE;
    taskId?: TASK_ID;
    tempLocation?: {
        latitude: number;
        longitude: number;
    };
    containerHeight?: number;
    heightAboveContainerForDrop?: number;
    deliveryType?: DELIVERY_TYPE;
    deliveryAzimuth?: number;
    IRLockStartHeight?: number;
    forceByRoute: POINT3D[];
};
export declare type DYNAMIC_POINT_MODEL = {
    type: TASK_TYPE;
    title: string;
    name: string;
    altitude: number;
    latitude: number;
    longitude: number;
    distance: number;
    isNoGPS: boolean;
};
export declare type PARAMS_TYPE = {
    filed: string;
    type: string;
};
export declare type TELEMETRY_CROPPED = {
    airVehicleSN: number;
    battery_voltage: number;
    height_above_takeoff: number;
    gps_health: number;
    velocity: number;
    lat: number;
    lon: number;
    last_change_time: number;
    ack: number;
};
export declare enum PARAMS_FIELDS_TYPE {
    float = "float",
    string = "string",
    int16 = "int16",
    uint16 = "uint16",
    uint8 = "uint8",
    uint32 = "uint32",
    int8 = "int8",
    int32 = "int32",
    double = "double"
}
export declare enum COMMAND_ENUM {
    land = 0,
    returnHome = 1,
    flyTo = 2,
    telemetry = 3,
    simple_land = 5,
    takeOff = 6
}
export declare enum FLIGHT_EVENT_ENUM {
    takeOff = "takeOff",
    land = "land",
    commandTakeOff = "commandTakeOff",
    commandLand = "commandLand",
    wayPoint_uploadComplex = "wayPoint_uploadComplex",
    wayPoint_uploadAutonomousTask = "wayPoint_uploadAutonomousTask",
    flyTo = "flyTo",
    commandFlyTo = "commandFlyTo",
    manualStart = "manualStart",
    manualFinish = "manualFinish",
    returnHome = "returnHome",
    telemetry = "telemetry",
    simple_land = "simple_land",
    disconnect = "disconnect",
    connect = "connect",
    changeStatus = "changeStatus",
    na = "NA"
}
export declare enum ACTION_ENUM {
    takeOff = 0,
    flyTo = 1,
    land = 2,
    landed = 3
}
export declare type COMMAND_ACTION = {
    command?: COMMAND_ENUM;
    action?: ACTION_ENUM;
};
export declare enum COMMAND_ACK_ENUM {
    land_s = 0,
    land_f = 1,
    returnHome_s = 2,
    returnHome_f = 3,
    flyTo_s = 4,
    flyTo_f = 5
}
export declare type ROCK_SEVEN_DRONE_TELEMETRY = {
    airVehicleSN?: number;
    battery_voltage?: number;
    height_above_takeoff?: number;
    gps_health?: number;
    velocity?: number;
    lat?: number;
    lon?: number;
    last_change_time?: number;
    ack?: number;
};
export declare type ROUTE_DATA_FOR_DRONESERVICE = {
    id?: ID_TYPE;
    AltFromDrone: boolean;
    yaw_mode: YAW_MODE;
    points: ROUTE_POINT_DATA_DRONESERVICE[];
    type: TASK_TYPE;
    location?: GEOJSON_POINT;
};
export declare type MAPI_RESPONSE = {
    success: boolean;
    description?: string;
    errors?: MAPI_ERRORS;
};
export declare type MAPI_ERRORS = {
    error: MAPI_ERROR;
    description?: string;
}[];
export declare enum MAPI_ERROR {
    AuthError = "AuthError",
    ValidationError = "ValidationError",
    InvalidParamValue = "InvalidParamValue",
    GeneralError = "GeneralError",
    TakeOffFail = "TakeOffFail",
    MissionUploadFail = "MissionUploadFail",
    ComputeRouteFail = "ComputeRouteFail",
    RhFail = "RhFail",
    AllocationFail = "AllocationFail",
    IllegalRoute = "IllegalRoute",
    LowEnergy = "LowEnergy",
    LockedForRH = "LockedForRH",
    NoComm = "NoComm",
    NoGPSError = "NoGPSError",
    DroneControllerError = "DroneControllerError",
    IllegalRequestOnStatus = "IllegalRequestOnStatus"
}
export declare type MAPI_AUTH = {
    username: string;
    password: string;
};
export declare type MAPI_AUTH_RESPONSE = MAPI_RESPONSE & {
    data?: {
        access_token: string;
        expires_in: number;
    };
};
export declare type CHECK_VALID_TOKEN__BODY = {
    token: string;
    client_id: string;
    client_secret: string;
    realm: string;
};
export declare type MAPI_ADD_MISSION_RESPONSE = MAPI_RESPONSE & {
    missionID?: string;
};
export declare type MAPI_ADD_NFZ_RESPONSE = MAPI_RESPONSE & {
    nfzID?: string;
};
export declare type MAPI_ADD_DYNAMIC_MISSION_RESPONSE = MAPI_RESPONSE & {
    missionID?: string;
    dynamicPointId?: string;
};
export declare type DYNAMIC_POINT_LOCATION = {
    dynamicPointLocation: GEOPOINT3D;
};
export declare type MAPI_ADD_DYNAMIC_MISSION = {
    name: string;
    dynamicPointLocation: GEOPOINT3D;
    distanceToDynamicPoint?: number;
    isNoGPS?: boolean;
};
export declare type MAPI_UPDATE_DYNAMIC = {
    missionID: string;
    dynamicPointId: string;
    dynamicPointLocation: GEOPOINT3D;
};
export declare type MAPI_UPDATE_TRACKPOINT = {
    missionID: string;
    trackPointLocation: GEOPOINT3D;
};
export declare type MAPI_UPDATE_DYNAMIC_RESPONSE = MAPI_RESPONSE & {
    missionId?: string;
    dynamicPointId?: string;
    dynamicPointLocation?: GEOPOINT3D;
};
export declare type MAPI_CALCULATED_ROUTE_RESPONSE = MAPI_RESPONSE & {
    routePoints?: GEOJSON_POLYLINE;
};
export declare type MAPI_MISSION_ID = {
    missionId: string;
};
export declare type AIR_VEHICLE_ID_OBJ = {
    airVehicleId: string;
};
export declare type MAPI_AIR_VEHICLE_ID = {
    airVehicleId: string;
};
export declare type MAPI_RH = MAPI_AIR_VEHICLE_ID & {
    isForceRH?: boolean;
    isIgnoreLockedForRH?: boolean;
};
export declare type MAPI_AIR_VEHICLE_ALTITUDE = {
    airVehicleId: string;
    minAlt: number;
    maxAlt?: number;
};
export declare type MAPI_AGL_PARAMS = {
    isAGL: boolean;
    altitudeRange?: RANGE;
    maxAltASL?: number;
    slope?: RANGE;
    containerHeight?: number;
    heightAboveContainerForDrop?: number;
};
export declare enum MAPI_DELIVERY_TYPE {
    Winch = "Winch",
    Drop = "Drop"
}
export declare type MAPI_ROUTE_MISSION_DATA = {
    yaw: number;
    toBody: boolean;
    velocity: number;
    actionOnRouteEnd: ACTION_ON_ROUTE_END;
    routePoints: MAPI_ROUTE_POINT[];
};
export declare type MAPI_ROUTE_MISSION = {
    name: string;
    routeMission: MAPI_ROUTE_MISSION_DATA;
};
export declare type MAPI_POINT_MISSION = {
    targetPoint: GEOPOINT3D;
    azimuthToPoint: boolean;
    viewingAngle: number;
    distanceToTarget: number;
    isNoGPS: boolean;
};
export declare type MAPI_WASP_MISSION = {
    name: string;
    point: GEOJSON_POINT;
    waspAzimuth: number;
};
export declare type MAPI_SECURITY_MISSION_DATA = {
    velocity: number;
    heading: number;
    headingType: HEADING_TYPE;
    relativeHeadingType: REL_TYPE;
    relativeAlt: number;
    POI?: {
        geoPoint: GEOPOINT3D_SHORT;
    };
    actions: AUTONOMOUS_ACTION[];
    routePoints: AUTONOMOUS_POINT[];
};
export declare type MAPI_SECURITY_MISSION = {
    securityMission: MAPI_SECURITY_MISSION_DATA;
    name: string;
};
export declare type MAPI_SHIP_MISSION = MAPI_AGL_PARAMS & {
    name: string;
    point: GEOJSON_POINT;
    forceByRoute: POINT3D[];
};
export declare type MAPI_SHIP_WITHOUT_LAND_MISSION = MAPI_AGL_PARAMS & {
    name: string;
    point: GEOJSON_POINT;
    containerHeight: number;
    heightAboveContainerForDrop: number;
    forceByRoute: POINT3D[];
};
export declare type MAPI_DELIVERY_POINT_MISSION = MAPI_AGL_PARAMS & {
    name: string;
    point: GEOJSON_POINT;
    containerHeight: number;
    heightAboveContainerForDrop: number;
    deliveryType: MAPI_DELIVERY_TYPE;
    deliveryAzimuth: number;
    IRLockStartHeight: number;
    forceByRoute: POINT3D[];
};
export declare type MAPI_MULTI_DEPLOY_MISSION = {
    missionId: string;
    type: MAPI_MISSION_TYPE;
    status: MAPI_MISSION_STATUS;
    totalLength: number;
    pilotId?: string;
    creationTime?: number;
    name: string;
    PlanID: string;
};
export declare type MAPI_ROUTE_POINT = {
    yaw: number;
    toBody: boolean;
    velocity: number;
    PointLocation: GEOJSON_POINT;
};
export declare type ALLOCATE_AIRVEHICLE_TO_MISSION = {
    airVehicleId: string;
    missionId: string;
};
export declare type ALLOCATE_PILOT_TO_MISSION = {
    pilotId: string;
    missionId: string;
};
export declare enum MAPI_MISSION_TYPE {
    Route = "Route",
    Point = "Point",
    WASP = "WASP",
    Security = "Security",
    Ship = "Ship",
    ShipWithoutLanding = "ShipWithoutLanding",
    DeliveryPoint = "DeliveryPoint",
    DynamicPoint = "DynamicPoint",
    MultiDeploy = "MultiDeploy"
}
export declare enum MAPI_MISSION_STATUS {
    Started = "Started",
    Stopped = "Stopped",
    StopProcess = "StopProcess"
}
export declare type MAPI_MISSION_GENERAL = {
    missionId: string;
    type: MAPI_MISSION_TYPE;
    status: MAPI_MISSION_STATUS;
    totalLength: number;
    pilotId?: string;
    creationTime?: number;
};
export declare type MAPI_MISSION_DATA = MAPI_MISSION_GENERAL & (MAPI_ROUTE_MISSION | MAPI_POINT_MISSION | MAPI_WASP_MISSION | MAPI_SECURITY_MISSION | MAPI_SHIP_MISSION | MAPI_SHIP_WITHOUT_LAND_MISSION | MAPI_DELIVERY_POINT_MISSION | MAPI_ADD_DYNAMIC_MISSION);
export declare enum TECHNICAL_STATUS {
    ok = "OK",
    noComm = "NoComm"
}
export declare type MAPI_TECHNICAL_STATUS = {
    onboard: TECHNICAL_STATUS;
    controller: TECHNICAL_STATUS;
    network: TECHNICAL_STATUS;
};
export declare enum CONTROLLED_BY {
    RC = "RC",
    Onboard = "Onboard",
    C2 = "C2",
    Joystick = "Joystick"
}
export declare type MAPI_AIR_VEHICLE = {
    id: string;
    ip: string;
    name: string;
    missionId: string;
    pilotId: string;
    type: AIR_VEHICLE_TYPES;
    routeStatus: WAYPOINTS_PATTERN_STATUS;
    changeRouteStatus?: CHANGE_ROUTE_STATUS;
    energy: number;
    voltage: number;
    current: number;
    energyConsumption: number;
    location: GEOJSON_POINT;
    heading: number;
    homePoint: GEOJSON_POINT;
    operationalAlt: number;
    status: AIR_VEHICLE_STATUS;
    height: number;
    distanceFromHome: number;
    gps_health: number;
    velocity: number;
    minAltitude: number;
    maxAltitude: number;
    availableSlots: number[];
    energyForReturnHome: number;
    timeToBeReplaced: number;
    technicalStatus: MAPI_TECHNICAL_STATUS;
    controlledBy: CONTROLLED_BY;
    corridorPoints: GEOPOINT_VECTOR;
    airVehicleRoute: GEOJSON_POLYLINE;
    estimatedRoute?: GEOJSON_POINT;
    estimatedGimbalVector?: GEOJSON_POINT;
    requestedLocation: GEOJSON_POINT | undefined;
    requestedAzimuth: number | undefined;
    algorithmStatus: AUTONOMOUS_ROUTE_PROGRESS_STATUS;
    dtmRoute: DTM_ROUTE_FULL_DATA_UI;
    aglHeight: number;
    flightCommandServiceStatus: MOVE_SERVICE_STATUS_ONBOARD;
    externalServices: CHANGE_ALT_DATA;
    flightId: string;
    taskType: TASK_TYPE;
    externalLocationData: GENERAL_EXTERNAL_LOCATION_DATA;
    lockedForRH: boolean;
    onRhRequest: boolean;
};
export declare type AUTONOMOUS_ROUTE_PROGRESS_STATUS = {
    id: string;
    timestamp: number;
    algorithmStatus: ALGORITHM_STATUS;
    pointsActionStatuses: AUTONOMOUS_POINT_STATUS[];
    flightStatus: WAYPOINT_STATUS[];
    isRouteFinish: boolean;
    isAllActionsDone: boolean;
    metadata: AUTONOMOUS_TASK_METADATA;
};
export declare type DRONES_TELEMETRY = {
    dsosId?: string;
    dronId: string;
    telemetryOriginTimestamp: string;
    droneType: string;
    droneName: string;
    energy: number;
    flightTimeLeft: number;
    location: GEOPOINT3D_SHORT;
    heading: number;
    velocity: number;
    altASL: number;
    altATP: number;
    homePoint: GEOPOINT3D_SHORT;
    takeOffPoint: GEOPOINT3D_SHORT;
    flightStatus: string;
    flightMode: string;
    GPS_Status: string;
    inControl: boolean;
    route: GEOJSON_POLYLINE;
};
export declare type MAPI_SITE_RESPONSE = MAPI_RESPONSE & {
    site?: MAPI_SITE;
};
export declare type MAPI_SITE_TELEMETRY = {
    version: number;
};
export declare type MAPI_SITE = {
    version: number;
    perimeter: MAPI_PERIMETER;
    nfzs: MAPI_NFZ[];
};
export declare type MAPI_PERIMETER = {
    polygonPoints: POINT3D[];
    name: string;
};
export declare enum MAPI_NFZ_TYPE {
    dynamic = "dynamic",
    static = "static"
}
export declare type MAPI_ADD_NFZ = {
    nfz: MAPI_NFZ;
};
export declare type MAPI_NFZ = {
    id: string;
    name: string;
    maxAlt: number;
    polygonPoints: POINT3D[];
    type: MAPI_NFZ_TYPE;
};
export declare type MAPI_NFZ_ID = {
    nfzID: string;
};
export declare enum MAPI_VALIDATION {
    route = "route",
    viewPoint = "viewPoint",
    wasp = "wasp",
    security = "security",
    dynamicPoint = "dynamicPoint",
    ship = "ship",
    shipWithoutLanding = "shipWithoutLanding",
    perimeter = "perimeter",
    nfz = "nfz",
    deliveryPoint = "deliveryPoint",
    dtm = "dtm",
    trackPointMission = "trackPointMission",
    trackPointMissionMoveDrone = "trackPointMissionMoveDrone",
    rotateAirVehicle = "rotateAirVehicle",
    updateTrackPoint = "updateTrackPoint",
    userMessage = "userMessage"
}
export declare type MAPI_CONFIG_RESPONSE = MAPI_RESPONSE & {
    configuration?: MAPI_CONFIG;
};
export declare type MAPI_CONFIG = {
    airVehicles: MAPI_CONFIG_AIR_VEHICLE[];
    missions: MAPI_CONFIG_MISSION[];
    landingPoints: MAPI_CONFIG_LANDING_POINT[];
    emergencyPoints: MAPI_CONFIG_EMERGENCY_POINT[];
    general: MAPI_CONFIG_GENERAL;
    airVehicleTypesParameters: MAPI_CONFIG_TYPES_PARAMETER[];
    sensors: MAPI_CONFIG_SENSOR[];
    gimbals: MAPI_CONFIG_GIMBAL[];
};
export declare enum CONFIG_NAMES {
    airVehiclesConfig = "airVehiclesConfig",
    algorithmConfig = "algorithmConfig",
    defaultConfig = "defaultConfig",
    droneServiceConfig = "droneServiceConfig",
    emergencyConnectionConfig = "emergencyConnectionConfig",
    general = "general",
    gimbalServiceConfig = "gimbalServiceConfig",
    landingPoints = "landingPoints",
    mapiConfig = "mapiConfig",
    onBoardNodeJsServiceConfig = "onBoardNodeJsServiceConfig",
    routeComputeConfig = "routeComputeConfig",
    senseorAndGimbalConfig = "senseorAndGimbalConfig",
    services = "services",
    smsConfig = "smsConfig",
    ssgConfig = "ssgConfig",
    utmConfig = "utmConfig",
    webServiceConfig = "webServiceConfig"
}
export declare type SMM_CONFIG = {
    systemId: string;
    timeStamp: number;
    configName: string;
    config: any;
};
export declare type MAPI_CONFIG_AIR_VEHICLE = {
    id: string;
    ip: string;
    name: string;
    type: string;
    landingPointId: string;
    sensorIds: string[];
    taskTypes: {
        Route: boolean;
        Point: boolean;
        WASP: boolean;
        Dynamic: boolean;
        Security: boolean;
        Ship: boolean;
        ShipWithoutLanding: boolean;
        DeliveryPoint: boolean;
    };
    landingTypes: {
        normal: boolean;
        accurate: boolean;
        optic: boolean;
    };
    takeoffToCorridorPoint: string;
};
export declare type MAPI_CONFIG_MISSION = {
    missionType: string;
    arriveToPointTolerance: string;
    reachedOperHeightTolerace: string;
    minEnergy: string;
    landingType: string;
    containerHeight: number;
    heightAboveContainerForDrop: number;
};
export declare type MAPI_CONFIG_LANDING_POINT = {
    id: string;
    location: string;
    landingSurfaceHeight: string;
    name: string;
    emergencyPointId: string;
};
export declare type MAPI_CONFIG_EMERGENCY_POINT = {
    id: string;
    location: string;
    landingSurfaceHeight: string;
    name: string;
};
export declare type MAPI_CONFIG_GENERAL = {
    operationalAlt: {
        altMin: number;
        altMax: number;
        altStep: number;
    };
    corridorAzimuth: number;
    corridorSemiLength: number;
};
export declare type MAPI_CONFIG_TYPES_PARAMETER = {
    type: string;
    rateOfClimb: string;
    rateOfLanding: string;
    spareEnergy: string;
    hotSwapSpare: string;
    defaultVelocity: string;
};
export declare type MAPI_CONFIG_SENSOR = {
    sensorId: string;
    sensorType: MAPI_SENSOR_TYPE;
    sensorIP: string;
    videoURL: string;
    FOV: number;
    gimbalId?: string;
    cameraParameters: any;
};
export declare type MAPI_CONFIG_GIMBAL = {
    sensorId: string;
    gimbalType: string;
    gimbalIp: string;
};
export declare enum MAPI_SENSOR_TYPE {
    FPVCamera = "FPVCamera",
    DPVCamera = "DPVCamera",
    Winch = "Winch",
    Lidar = "Lidar",
    ThirdEye = "ThirdEye",
    WR = "WR",
    irlock = "irlock"
}
export declare enum TYPE_TO_MAPI_TYPE {
    Route = "Route",
    Point = "Point",
    WASP = "WASP",
    Shipping = "Ship",
    ShipWithoutLanding = "ShipWithoutLanding",
    DynamicPoint = "DynamicPoint",
    DeliveryPoint = "DeliveryPoint"
}
export declare type MAPI_START_MISSION = MAPI_MISSION_ID & {
    isNoGPS: boolean;
};
export declare type MAPI_WINCH_COMMAND = {
    winchId: string;
    weight?: number;
    calibrationIndex?: number;
};
export declare type MAPI_WINCH_TELEMETRY = {
    winchId?: string;
    airVehicleId: string;
    technicalStatus: MAPI_WINCH_TECHNICAL_STATUS;
    lastUpdated: number;
    state: MAPI_WINCH_STATE;
    airVehicleHeightAGL: number;
    payloadHeightAGL: number;
    scaleWeight: number;
    lockedForRH: boolean;
};
export declare enum MAPI_WINCH_TECHNICAL_STATUS {
    OK = "OK",
    NotConnected = "NotConnected"
}
export declare enum MAPI_WINCH_USER_STATUS {
    SUCCESS = "SUCCESS",
    UNSUCCESS = "UNSUCCESS"
}
export declare enum MAPI_WINCH_STATE {
    Attached = "Attached",
    InAir = "InAir",
    OnGround = "OnGround",
    FreeFall = "FreeFall",
    Braking = "Braking",
    ReelingDown = "ReelingDown",
    ReelingUp = "ReelingUp",
    FreeWheel = "FreeWheel",
    AutoDeliver = "AutoDeliver",
    Dev = "Dev",
    Unknown = "Unknown",
    Error = "Error",
    FailSafe = "FailSafe",
    BOOTUP = "BOOTUP",
    HOLD = "HOLD",
    DROP_AND_ARR = "DROP_AND_ARR",
    GROUND_SENSE = "GROUND_SENSE",
    RETURN_TO_HO = "RETURN_TO_HO",
    REDELIVER = "REDELIVER",
    ABANDON_LINE = "ABANDON_LINE",
    LOCKING = "LOCKING",
    LOAD_PACKAGE = "LOAD_PACKAGE",
    LOAD_LINE = "LOAD_LINE",
    FAILSAFE = "FAILSAFE",
    UNLOCKING = "UNLOCKING"
}
export declare enum MAPI_STATUS {
    On = "On",
    Off = "Off"
}
export declare type MAPI_TECHNICAL_STATUS_TELEMETRY = {
    server: MAPI_STATUS;
    comm: MAPI_STATUS;
    lastRestart: number;
};
export declare type MAPI_SET_GIMBAL = {
    sensorId: SENSOR_ID_TYPE;
    azimuthType?: YAW_REF;
    yaw?: number;
    pitch?: number;
    roll?: number;
};
export declare type MAPI_GIMBAL_MOVE = {
    sensorId: SENSOR_ID_TYPE;
    deltaYaw?: number;
    deltaPitch?: number;
    deltaRoll?: number;
};
export declare type MAPI_GIMBAL_TELEMETRY = {
    sensorId: SENSOR_ID_TYPE;
    gimbalType: GIMBAL_TYPES;
    isLookAtTarget: boolean;
    target: GEOJSON_POINT;
    yaw: number;
    pitch: number;
    roll: number;
};
export declare type MAPI_SET_LOOK_AT_TARGET = {
    isLookAtTarget: boolean;
    sensorId: SENSOR_ID_TYPE;
};
export declare type MAPI_USER_MESSAGE = {
    id: string;
    severity: MAPI_SEVERITY;
    message: string;
    externalSystemName: string;
};
export declare type MAPI_GET_DTM = GEOPOINT[];
export declare type MAPI_DTM_RESPONSE = MAPI_RESPONSE & {
    DTM?: GEOPOINT3D[];
};
export declare enum MAPI_SEVERITY {
    success = "success",
    error = "error",
    info = "info",
    warning = "warning"
}
export declare type MAPI_SENSOR_ID = SENSOR_ID;
export declare type MAPI_DRONE_TELEMETRY = {
    droneId: string;
    energy: number;
    creationTimestamp?: number;
    location?: GEOPOINT_SHORT;
    altASL: number;
    armed: boolean;
    lastUpdate: number;
    velocity?: YXZ;
    gimbalAngles?: GIMBAL_ANGLES;
    cameraMode?: DAY_NIGHT;
    cameraZoom?: number;
    bodyAngles?: BODY_ANGLES;
    accelerations?: YXZ;
    barometrucAltASL?: number;
    GnssAltASL?: number;
    heading?: number;
    vehicleType?: VEHICLE_TYPE;
    callSign?: string;
};
export declare type BODY_ANGLES = {
    q0: number;
    q1: number;
    q2: number;
    q3: number;
};
export declare type MAPI_VEHICLE_TELEMETRY = MAPI_DRONE_TELEMETRY & {
    homePoint?: GEOPOINT3D_SHORT;
    route?: ROUTE_POINT[];
};
export declare type MAPI_DRONE_TELEMETRY_UI = MAPI_DRONE_TELEMETRY & {
    styles: EXTERNAL_AIR_VEHICLE_STYLES;
};
export declare type EXTERNAL_AIR_VEHICLE_STYLES = {
    airVehicleIconColor: string;
    energyColor: string;
    borderIconStyle: string;
    iconNoConnect: string;
    externalIconPng: string;
};
export declare type ROUTE_POINT = {
    waypoint: GEOPOINT_SHORT;
    velocity: number;
    altASL: number;
};
export declare type RH_REQUEST_DATA = {
    id: string;
    isAGL: boolean;
    isForceRH: boolean;
};
export declare type ROUTE_METADATA = ROUTE3D & {
    value: number;
    index: number;
    dtmRoute: DTM_ROUTE_FULL_DATA;
};
export declare enum ENERGY_PERCENT_UNIT {
    percent = "%",
    volt = "V",
    ampere = "A"
}
export declare enum MSL_AGL_UNIT {
    msl = "MSL",
    agl = "AGL"
}
export declare enum LOG_TYPE {
    success = "success",
    error = "error",
    info = "info",
    warning = "warning",
    debug = "debug",
    trace = "trace",
    fatal = "fatal",
    logic = "logic",
    flight = "flight",
    DEBUG = "debug",
    TRACE = "trace",
    FATAL = "fatal",
    TELEMETRY = "telemetry",
    TASK_EVENT = "taskEvent",
    FLIGHT_EVENT = "flightEvent"
}
export declare type LOGER_DATA = {
    serviceName: string;
    prefix: string;
    timeStamp: number;
    logLevel: SEVERITY | LOG_TYPE;
    data: Object | string | boolean | number | Array<Object | string | boolean | number>;
};
export declare type LDBS_LOG_DATA = {
    logId?: string;
    systemId?: string;
    system: SYSTEM;
    sender: SERVICE;
    siteName: string;
    airVehicleId?: string;
    airVehicleSystemId?: string;
    logType: LOG_TYPE;
    type: SEVERITY;
    className: string;
    function: string;
    date: string;
    time: string;
    prefix?: string;
    message: Object | string | number | boolean;
    timestamp: number;
    command?: COMMAND_ENUM;
    action?: ACTION_ENUM;
    flightId?: string;
    flightEvent?: FLIGHT_EVENT_ENUM;
    controlBy?: OWNER_TYPE;
    airVehicleName?: string;
    taskName?: string;
    taskEvent?: TASK_EVENT_ENUM;
    taskType?: TASK_TYPE;
    taskId?: string;
    status?: AIR_VEHICLE_STATUS;
};
export declare type FLIGHT_EVENT_LOG = {
    logId?: string;
    logType: LOG_TYPE;
    systemId?: string;
    system: SYSTEM;
    sender: SERVICE;
    siteName: string;
    airVehicleId: string;
    airVehicleName: string;
    airVehicleSystemId: string;
    status: AIR_VEHICLE_STATUS;
    controlBy: OWNER_TYPE;
    flightId: string;
    flightEvent: FLIGHT_EVENT_ENUM;
    time: string;
    timestamp: number;
    command: COMMAND_ENUM;
    taskId: string;
    taskName: string;
    taskEvent: TASK_EVENT_ENUM;
    taskType: TASK_TYPE;
    className: string;
    function: string;
};
export declare type LDBS_TELEMETRY_DATA = {
    logId?: string;
    systemId?: string;
    system?: SYSTEM;
    airVehicleId?: string;
    airVehicleSystemId?: string;
    logType: LOG_TYPE.TELEMETRY;
    date: string;
    time: string;
    timestamp: number;
    flightId?: string;
    sender: SERVICE;
    isSimulated: boolean;
    sensorId: SENSOR_ID_TYPE;
    taskTypes: MAP<boolean>;
    landingTypes: MAP<boolean>;
    type: AIR_VEHICLE_TYPES;
    taskId: TASK_ID | OBJ_VALUE;
    lookAtTarget: boolean;
    name: string;
    energy: number;
    voltage: number;
    current: number;
    location: GEOJSON_POINT;
    takeOffCorridorPoint: GEOJSON_POINT;
    heading: number;
    showVideo: boolean;
    videoStreamIP: string;
    missionStatus: MISSION_STATUS;
    course: number;
    mode: AIR_VEHICLE_MODE;
    homePoint: GEOJSON_POINT;
    homeHeight: number;
    network: boolean;
    isChangedHome: boolean;
    currentASLHeight?: number;
    operationalAlt: number;
    status: AIR_VEHICLE_STATUS;
    height: number;
    distanceFromHome: number;
    gps_health: number;
    velocity: number;
    missionLineTo: GEOJSON_POINT;
    owner: OWNER_TYPE;
    corridor: GEOPOINT_VECTOR;
    energyConsumption: number;
    minAltitude: number;
    maxAltitude: number;
    sensorType: AIRVEHICLE_TYPES;
    energyForReturnHome: number;
    sensorVector: GEOPOINT_VECTOR;
    airVehicleRoute: GEOJSON_POLYLINE;
    estimatedRoute?: GEOJSON_POINT;
    estimatedGimbalVector?: GEOJSON_POINT;
    requestedLocation: GEOJSON_POINT | undefined;
    requestedAzimuth: number | undefined;
    timeToBeReplaced: number;
    replacementRhBat: number;
    rs_mode: RC_MODE;
    launcherAbsHeight: number;
    launcherPoint?: GEOJSON_POINT;
    landAbsHeight: number;
    landingLocation: LANDING_LOCATION;
    emergencyLocation: LANDING_LOCATION;
    isForce: boolean;
    takeoffASLHeight: number;
    landingPointId: ID_TYPE;
    emergencyTelemetryForShow: ROCK_SEVEN_DRONE_TELEMETRY_UI;
    regularTelemetryForShow: NETWORK_FOR_SHOW;
    emergencyNetworkIds: EMERGENCY_NETWORK_IDS;
    last_change_time: number;
    aglHeight: number;
    flightCommandServiceStatus: MOVE_SERVICE_STATUS_ONBOARD;
    capsuleId: string;
    externalServices: CHANGE_ALT_DATA;
    sensorAGL: SENSOR_AGL;
};
export declare type LDBS_TASK_DATA = {
    taskId: TASK_ID;
    taskName: string;
    taskType: TASK_TYPE;
    taskSessionId: string;
    logId?: string;
    systemId?: string;
    siteName?: string;
    system: SYSTEM;
    sender: SERVICE;
    airVehicleIds?: string[];
    airVehicleSystemIds?: string[];
    logType: LOG_TYPE;
    type: SEVERITY;
    className: string;
    function: string;
    date: string;
    time: string;
    timestamp: number;
    flightIds: string[];
    taskEvent?: TASK_EVENT_ENUM;
};
export declare enum TASK_EVENT_ENUM {
    start = "start",
    stop = "stop",
    pause = "pause",
    resume = "resume",
    reexecute = "reexecute",
    allocateairVehicle = "allocateairVehicle",
    unAllocateairVehicle = "unAllocateairVehicle"
}
export declare type LOG_FROM = {
    className: string;
    function: string;
};
export declare enum SYSTEM {
    SMM = "SMM",
    C2 = "C2",
    PilotApp = "PilotApp",
    ShipDispatch = "ShipDispatch",
    VideoApp = "VideoApp",
    UTM = "UTM",
    OnBoard = "OnBoard",
    pilotApp = "pilotApp"
}
export declare type MESSAGE_LOG_DATA = {
    message: string | object;
    airVehicleId?: ID_TYPE;
    airVehicleSystemId?: string;
    flightId?: string;
};
export declare type SATELLITE_MODEM_CONFIG = {
    imei: string;
    id: string;
};
export declare enum EMERGENCY_DATA_FIELD {
    point = "point",
    ackCount = "ackCount",
    lon = "lon",
    lat = "lat",
    height = "height",
    airVehicleSN = "airVehicleSN",
    battery_voltage = "battery_voltage",
    height_above_takeoff = "height_above_takeoff",
    gps_health = "gps_health",
    velocity = "velocity",
    last_change_time = "last_change_time",
    ack = "ack"
}
export declare type EMERGENCY_COMMAND_PARAMETERS = {
    field: EMERGENCY_DATA_FIELD;
    type: string;
    multiplier: number;
};
export declare enum LOG_TYPE_LOGIC {
    flight = "flight",
    logic = "logic"
}
export declare type SYSTEM_INFO = {
    cpuAvgSpeed: number;
    swapTotal: number;
    swapUsed: number;
    swapFree: number;
    totalRam: number;
    freeRam: number;
    sysUpTime: number;
    loadAvgMinutes: LoadAvg;
};
export declare type LoadAvg = {
    one: number;
    five: number;
    fifteen: number;
};
export declare type SYSTEM_INFO_ID = SYSTEM_ID & {
    systemDetails: SYSTEM_INFO;
};
export declare type SYSTEM_ID = {
    systemId: string;
};
export declare enum SYSTEM_TYPE {
    airVehicle = "airVehicle",
    logic = "logic"
}
export declare type SYSTEM_DATA = SYSTEM_ID & {
    siteName: string;
    notation: SYSTEM;
    name: string;
    type: SYSTEM_TYPE;
    SMS_IP: string;
    services: SERVICE_DATA[];
};
export declare type SYSTEM_STATUS_DATA = SYSTEM_ID & {
    timestamp: number;
    systemStatus: STATUS;
    servicesStatuses: SERVICE_STATUS[];
};
export declare type SERVICE_STATUS = {
    status: STATUS;
    timestamp: number;
};
export declare type SYSTEM_STATUS_DATA_PM2 = SYSTEM_ID & {
    timestamp: number;
    servicesStatuses: SERVICE_DATA_PM2[];
};
export declare type SERVICE_DATA_PM2 = {
    name: SERVICE_NAME;
    status: STATUS_PM2;
    timestamp: number;
};
export declare type STATUS_PM2 = {
    status: RUNNING_STATUS;
    memoryTotal: number;
    memoryUssed: number;
    cpu_used: number;
    runTime: number;
    restartNumber: number;
    consoleLog: string[];
    consoleError: string[];
};
export declare type FILTERD_LDBS_DATA = {
    data: FIND_LDBS_DATA;
    interval: DATE_INTERVALS;
};
export declare type SERVICE_DATA = {
    name: SERVICE_NAME;
    serviceStatus?: SERVICE_STATUS;
};
export declare type ALL_SERVICE_DATA_PM2 = {
    timestamp: number;
    servicesStatuses: SERVICE_DATA_PM2[];
};
export declare type RECORDS_DB = {
    limit: number;
    isFromEnd?: boolean;
};
export declare type C2_CONFIG = SYSTEM_ID & {
    timestamp: number;
    name: SYSTEM;
    SMS_IP: string;
    servicesList: SERVICE_DATA[];
};
export declare type DATE_INTERVALS = {
    dateIsoStringStart?: string;
    dateIsoStringEnd?: string;
    timestampStart?: number;
    timestampEnd?: number;
};
export declare type FIND_LDBS_DATA = {
    date?: string;
    time?: string;
    prefix?: string;
    message?: string;
    timestamp?: any;
    type?: string;
    sender?: SERVICE;
    function?: string;
};
export declare type GIT_INFO = {
    branch: string;
    date: string;
    who: string;
};
export declare type UI_CONFIG_SETTINGS = {
    isImperialUnits: boolean;
    permittedTaskTypes: {
        Route: boolean;
        Point: boolean;
        WASP: boolean;
        Dynamic: boolean;
        Security: boolean;
        Shipping: boolean;
        ShipWithoutLanding: boolean;
        DeliveryPoint: boolean;
        TargetTracking: boolean;
    };
    mapSourceURL: MAP_SOURCE_URL[];
    mapSourceURLWms: string;
    isWMSInclude: boolean;
    mapDefaultPosition: {
        lat: number;
        lon: number;
    };
    mapMinZoom: number;
    mapMaxZoom: number;
    mapMaxZoomWMS: number;
    mapZoom: number;
    logoName: string;
    isLogo: boolean;
    tasksParams: TASK_PARAMS;
    operationalAlt: OPERATIONAL_ALT_PARAMS;
    defaultViewPointParameters: DEFAULT_VIEW_POINT_PARAMS;
    modeProduction: boolean;
    distanceViewPoint: number;
};
export declare type OPERATIONAL_ALT_PARAMS = {
    altMin: number;
    altMax: number;
    altStep: number;
    ASL_Max: number;
};
export declare type DEFAULT_VIEW_POINT_PARAMS = {
    distance: number;
    azimuthToPoint: number;
    minViewPointDistance: number;
    maxViewPointDistance: number;
};
export declare type TASK_PARAMS = {
    General: boolean;
    Dynamic: boolean;
    Route: boolean;
    Security: boolean;
    Point: boolean;
    WASP: boolean;
    Shipping: boolean;
    ShipWithoutLanding: boolean;
    DeliveryPoint: boolean;
    MultiDeploy: boolean;
    TargetTracking: boolean;
};
export declare type MAPI_DETECTOR_TELEMETRY = {
    id: string;
    type: string;
    commStatus: COMM_STATUS;
    location?: GEOPOINT3D_SHORT;
    name?: string;
};
export declare type MAPI_ALERT_TELEMETRY = {
    id: string;
    type: ALERTS_TYPE;
    airVehicleId: AIR_VEHICLE_ID;
    airVehicleName: string;
    alertData: {
        collisionWith: COLLISION_VEHICLE_DATA | COLLISION_NFZ_DATA;
        description: string;
    };
};
export declare type MAPI_ALERT_TELEMETRY_UI = MAPI_ALERT_TELEMETRY & {
    styles: ALERTS_COLLISION_STYLES;
};
export declare type COLLISION_VEHICLE_DATA = {
    vehicleId: string;
    severity: SEVERITY_ALERT;
    distance: number;
    vehicleType: VEHICLE_TYPE;
    location: GEOPOINT3D_SHORT;
};
export declare type COLLISION_NFZ_DATA = {
    NFZId: string;
    distance: number;
};
export declare type ALERTS_COLLISION_STYLES = {
    iconExternalUAV: string;
    locationExternalUAV: number;
};
export declare type CANOPY_MAPI_DATA = {
    capsuleId: string;
    name: string;
    status: STATUSES_FOR_MAPI;
    lock: boolean;
    description: string;
    video?: VOLATUS_CANOPY_VIDEO;
    weather?: {};
};
export declare type VOLATUS_CANOPY_VIDEO = {
    video: {
        type: string;
        url: string;
    };
};
export declare type STATUS_NODE_OBJ = {
    airVehicleId: AIR_VEHICLE_ID;
    PodCellIndex: number;
};
export declare enum PROTOCOL {
    https = "https",
    http = "http",
    wss = "wss",
    ws = "ws"
}
export declare type WEBSOCKET_CALLBACK_OBJ<T = MAP> = {
    url: string;
    data: T;
};
export declare type CHANGE_ALT_DATA = {
    CAS: {
        status: CHANGE_ALT_STATUS;
        timestamp: number;
    };
};
export declare type ALGORITHM_PROGRESS_STATUS = {
    id: string;
    algorithmStatus: ALGORITHM_STATUS;
    pointsActionStatuses: AUTONOMOUS_POINT_STATUS[];
    flightStatus: WAYPOINT_STATUS[];
    isRouteFinish: boolean;
    isAllActionsDone: boolean;
};
export declare type AUTONOMOUS_POINT_STATUS = {
    id: string;
    actions: CONDITION_ACTION_STATUS[];
};
export declare type CONDITION_ACTION_STATUS = {
    actionId: string;
    actionType: ACTION_TYPE;
    actionStatus: ALS_ACTION_STATUS;
    conditionStatus: CONDITION_STATUS;
    actionKey: ACTION_KEY;
    metadata: AUTONOMOUS_TASK_METADATA;
};
export declare enum WAYPOINT_STATUS {
    started = 0,
    stopped = 1,
    paused = 2,
    resumed = 3
}
export declare enum CONDITION_STATUS {
    pending = 1,
    needToStart = 2,
    inProgress = 3,
    needToEnd = 4,
    done = 5,
    error = 6
}
export declare enum ALS_ACTION_STATUS {
    pending = 1,
    requestToStart = 2,
    inProgress = 3,
    requestToEnd = 4,
    done = 5,
    fail = 10
}
export declare enum INPUT_COMMAND_ENUM {
    cancel = 1,
    abort = 2,
    approve = 3
}
export declare type ACTION_KEY = {
    flightId: string;
    pointId: string;
    actionId: string;
};
export declare type INPUT_COMMAND = {
    airVehicleId: string;
    command: INPUT_COMMAND_ENUM;
    actionKey: ACTION_KEY;
    metadata: AUTONOMOUS_TASK_METADATA;
};
export declare enum CHANGE_ALT_STATUS {
    NA = "N/A",
    Pending = "Pending",
    InProcess = "InProcess",
    Error = "Error"
}
export declare type AUTONOMOUS_TASK_METADATA = {
    airVehicleId?: string;
    flightId?: string;
    PlanID?: string;
    nodeIndex?: number;
};
export declare type NFZ_INFLUENCE_REQUEST = POLYGON_POINTS & {
    allowedId: string;
    nfzId: ID_OBJ;
};
export declare type NFZ_INFLUENCE = {
    polygon: GEOJSON_POLYGON;
    allowedId: string;
    nfzId: ID_TYPE;
};
export declare type MAPI_LIGHT_INTENSITY_DATA = {
    lightsIntensity: number;
    airVehicleId: AIR_VEHICLE_ID;
};
export declare type TEST_FUNCTION_REQUEST = {
    funtionName: string;
    parameters: [];
};
export declare type TEST_REQUEST = {
    className: string;
    funtionName: string;
    parameters: [];
};
export declare enum LEVEL {
    error = "ERROR",
    info = "INFO"
}
export declare type LOG = {
    type: LEVEL;
    class: string;
    function: string;
    message: string | Object;
    airVehicleId?: string;
    airVehicleSystemId?: string;
    flightId?: string;
};
export declare type REGISTER_SYSTEM_DATA = {
    systemId?: string;
    name: string;
    ip: string;
};
export declare type SENSOR_AGL = {
    status: SYSTEM_STATUS;
    AGL: number;
};
export declare type START_TASK_REQUEST = {
    taskId: string;
    isNoGPS: boolean;
};
export declare type IS_NO_GPS = {
    isNoGPS?: boolean;
};
export declare type ONBOARD_GENERIC_COMMAND<T = MAP> = {
    airVehicleId: string;
    api: OB_API;
    data: T;
    actionName?: string;
};
export declare type AUTH_HEADER = {
    authorization: string;
};
export declare enum JWT_AUTH {
    auth = "/auth",
    verify = "/verify"
}
export declare type REQUEST_AUTH_OBJ = {
    name: string;
    password: string;
    sub?: string;
};
export declare enum ROLE {
    mapi_user = "mapi_login",
    c2_user = "c2_login",
    pilot_login = "pilot_login",
    joystick_login = "joystick_login",
    ship_dispatch_login = "ship_dispatch_login"
}
export declare type AUTHORIZE_BODY = CLIENT_AUTH_INFO & {
    service_roles: ROLE[];
};
export declare type GENERAL_EXTERNAL_LOCATION_DATA = {
    position: GEOPOINT3D;
    navigationState: GENERAL_NAVIGATION_STATE;
    techStatus: TECH_STATUS;
    rawData: string[];
    timestamp: number;
};
export declare enum GENERAL_NAVIGATION_STATE {
    Navigating = "Navigating",
    NotNavigating = "NotNavigating"
}
export declare enum TECH_STATUS {
    DataNotReceived = "DataNotReceived",
    Ok = "Ok",
    Warning = "Warning",
    Error = "Error"
}
export declare type LOGIN_BODY = CLIENT_AUTH_INFO & {
    username: string;
    password: string;
};
export declare type CLIENT_AUTH_INFO = {
    client_id: string;
    client_secret: string;
    realm: string;
};
export declare enum DRONE_TELEMETRY_ROOM {
    my = "my",
    my2hz = "my2hz",
    my5hz = "my5hz",
    my10hz = "my10hz"
}
export declare type WEBSOCKET_ONBOARD_ROOMS = {
    droneTelemetryRoom: DRONE_TELEMETRY_ROOM;
};
export declare type WS_CONNECTION = {
    ws: WebSocket;
    token: string;
    timestamp: number;
};
export declare type ALLOCATE_PAIR = {
    airVehicleId: ID_TYPE;
    taskId: ID_TYPE;
};
export declare type GIMBAL_LANDING_PRESET = {
    gimbalPresetsId: string;
    isNeedGimbalChange: boolean;
    gimbalPitchAngle?: number;
    gimbalYawAngle?: number;
    relative?: RELATIVE_GIMBAL;
};
export declare enum RELATIVE_GIMBAL {
    body = "Body",
    north = "North"
}
export declare type MAP_SOURCE_URL = {
    url: string;
    name: string;
    index: number;
};
export declare type REQUEST_OWNER = {
    owner: OB_OWNER;
    isTemp?: boolean;
};
export declare enum OB_OWNER {
    droneService = "droneService",
    onBoard = "onBoard",
    joystick = "joystick"
}
