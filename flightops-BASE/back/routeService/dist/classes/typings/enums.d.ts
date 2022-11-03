export declare enum DAY_NIGHT {
    day = "Day",
    night = "Night"
}
export declare enum AIR_VEHICLE_TYPE {
    Alpha = "Alpha",
    Dji = "Dji",
    Pixhawk = "Pixhawk"
}
export declare enum COLORS {
    black = "rgb(0, 0, 0)",
    blackOpacity = "rgba(0,0,0,0.8)",
    white = "#ffffff",
    lightGray = "#eeeeee",
    gray = "#A9A9A9",
    darkGrey = "#748799",
    darkGray = "#606060",
    magenta = "#ec54d2",
    red = "#ff0000",
    yellow = "#ffc000",
    orange = "#ff6600",
    green = "#549610",
    lightGreen = "#92d050",
    violet = "#8F43FF",
    blue = "#3f51b5",
    lightBlue = "#59b1f1",
    logoBlue = "#18a0ff",
    blueGreen = "#49c5b6",
    lightRed = "#f66d6d",
    yellowDark = "#ffc000",
    dividerColor = "rgba(255, 255, 255, 0.5)",
    transparent = "rgba(255, 255, 255, 0)"
}
export declare enum SERVICE_NAME {
    WS = "WS",
    FCS = "FCS",
    AMS = "AMS",
    RS = "RS",
    OnBoard = "OnBoard",
    Cpp = "Cpp",
    LDBS = "LDBS",
    SMM = "SMM",
    GCS = "GCS",
    MAPI = "MAPI",
    VideoService = "VideoService",
    JoystickServer = "JoystickServer"
}
export declare enum STATUS {
    NA = 1,
    Active = 2,
    NotActive = 3,
    Warning = 4,
    ERROR = 5
}
export declare enum RUNNING_STATUS {
    NA = 1,
    Run = 2,
    Stopped = 3
}
export declare enum HEALTH {
    NA = 1,
    OK = 2,
    WARNING = 3,
    ERROR = 4
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
export declare enum SOCKET_EVENTS {
    open = "open",
    error = "error",
    close = "close",
    message = "message"
}
export declare enum SOCKET_CLIENT_TYPES {
    LDBS = "LDBS"
}
export declare enum ERROR_TYPES {
    ServerError = "ServerError",
    ValidationError = "ValidationError",
    TimeFrameNotValid = "TimeFrameNotValid",
    ConflictsError = "ConflictsError",
    NfzNotValid = "NfzNotValid",
    FpIdNotExist = "FpIdNotExist"
}
export declare enum CONFLICT_TYPES {
    NFZ = "NFZ",
    FlightPlan = "FlightPlan",
    Other = "Other"
}
export declare enum PREFIX_LOG {
    ANSWER = "answer",
    THEN = "then",
    CATCH = "catch",
    VOID = "-"
}
export declare enum FLIGHT_SERVICE_STATUS {
    NA = "N/A",
    Pending = "Pending",
    InProcess = "InProcess",
    Error = "Error"
}
export declare enum ROUTE_PATH {
    login = "login",
    airVehicleControl = "airVehicle-control"
}
export declare enum COMM_STATUS {
    noComm = "NoComm",
    OK = "OK"
}
export declare enum DETECTOR_TYPE {
    Iris = "Iris",
    Radar = "Radar"
}
export declare enum ALERTS_TYPE {
    Collision = "Collision",
    NFZ = "NFZ",
    General = "General"
}
export declare enum SEVERITY_ALERT {
    Warning = "Warning",
    Alert = "Alert",
    HighAlert = "HighAlert"
}
export declare enum VEHICLE_TYPE {
    Heavy = "Heavy",
    Light = "Light",
    UltraLight = "UltraLight",
    UAV = "UAV",
    Obstacle = "Obstacle"
}
export declare enum STATUSES_FOR_MAPI {
    idle = "IDLE",
    coverClosedAndCharging = "COVER_CLOSED_AND_CHARGING",
    prepareForTakeOff = "PREPARE_FOR_TAKEOFF",
    readyForTakeOff = "READY_FOR_TAKEOFF",
    prepareForLanding = "PREPARE_FOR_LANDING",
    readyForLanding = "READY_FOR_LANDING",
    prepareForAfterLanding = "PREPARE_FOR_AFTER_LANDING",
    barsAndCoverClosed = "BARS_AND_COVER_CLOSED",
    error = "ERROR"
}
export declare enum ACTION_TASK {
    delete = "delete",
    execute = "execute",
    reexecute = "reexecute",
    stop = "stop",
    pause = "pause",
    resume = "resume",
    edit = "edit",
    editShipment = "editShipment",
    showRoute = "showRoute",
    createSession = "createSession",
    stats = "stats",
    deletePowTask = "deletePowTask"
}
export declare enum CELL_STATUS {
    NA = 0,
    ready = 1,
    deploying = 2,
    malfunction = 3,
    empty = 4,
    error = 5,
    released = 6
}
export declare enum NODE_STATUS_ENUM_EXTERNAL {
    notDone = 0,
    Fail = 1,
    Aborted = 2,
    Pass = 3
}
export declare enum INTERNAL_NODE_STATUS {
    deployed = "deployed",
    canceled = "canceled",
    aborted = "aborted",
    noneDeployed = "noneDeployed",
    deploying = "deploying"
}
export declare enum NODE_STATUS_ENUM_POWG_WS {
    notDone = 0,
    Fail = 1,
    Aborted = 2,
    Canceled = 3,
    Pass = 4
}
export declare enum NODE_STATUS_ENUM_EXT {
    NotDone = "NotDone",
    Fail = "Fail",
    Aborted = "Aborted",
    Pass = "Pass"
}
export declare enum VIDEO_DIRECTION {
    FPV = "FPV",
    DPV = "DPV"
}
export declare enum WINCH_BUTTON_TYPE {
    Deliver = "deliver",
    ReelUp = "reelUp",
    ReelDown = "reelDown",
    Release = "release",
    Fail = "fail",
    Done = "done",
    Lock = "lock"
}
export declare enum WS_VALIDATION {
    podData = "podData"
}
export declare enum VIDEO_MAP {
    video = "video",
    map = "map"
}
export declare enum LEAFLET_PANE {
    airVehiclePane = "airVehiclePane",
    labelsPane = "labelsPane",
    tooltipPane = "tooltipPane"
}
export declare enum GEO_TYPES {
    Point = "Point",
    LineString = "LineString",
    Polygon = "Polygon"
}
export declare enum HEADING_RELATIVE_TYPE {
    toGimbal = "To Gimbal",
    toRoute = "To Route",
    constant = "Set Heading"
}
export declare enum DEVELOPER_MODE {
    PROD = "Production",
    DEV = "Development"
}
export declare enum AIR_VEHICLE_FIELDS {
    ip = "ip",
    systemId = "systemId",
    isSimulated = "isSimulated",
    isForce = "isForce",
    taskTypes = "taskTypes",
    landingTypes = "landingTypes",
    id = "id",
    taskId = "taskId",
    lookAtTarget = "lookAtTarget",
    sensorType = "sensorType",
    missionType = "missionType",
    callSign = "callSign",
    name = "name",
    namespace = "namespace",
    missionStatus = "missionStatus",
    type = "type",
    isExist = "isExist",
    operationalAlt = "operationalAlt",
    maxVelocity = "maxVelocity",
    maxDeltaVelocityUp = "maxDeltaVelocityUp",
    maxDeltaVelocityDown = "maxDeltaVelocityDown",
    maxYawVelocity = "maxYawVelocity",
    failSafe = "failSafe",
    sensorId = "sensorId",
    sensorIds = "sensorIds",
    course = "course",
    minPitch = "minPitch",
    maxPitch = "maxPitch",
    droneStatusDS = "droneStatusDS",
    energy = "energy",
    voltage = "voltage",
    current = "current",
    energyConsumption = "energyConsumption",
    velocity = "velocity",
    location = "location",
    takeOffCorridorPoint = "takeOffCorridorPoint",
    gps_health = "gps_health",
    height = "height",
    attitude = "attitude",
    imu = "imu",
    connectivity = "connectivity",
    onBoard = "onBoard",
    flytBase = "flytBase",
    network = "network",
    heading = "heading",
    distanceFromHome = "distanceFromHome",
    homePoint = "homePoint",
    homeHeight = "homeHeight",
    status = "status",
    missionLineTo = "missionLineTo",
    isArmed = "isArmed",
    loiterPatternStatus = "loiterPatternStatus",
    waypointsPatternStatus = "waypointsPatternStatus",
    changeRouteStatus = "changeRouteStatus",
    owner = "owner",
    corridor = "corridor",
    minAltitude = "minAltitude",
    maxAltitude = "maxAltitude",
    availableSlots = "availableSlots",
    wayPoints = "wayPoints",
    energyForReturnHome = "energyForReturnHome",
    flyStatus = "flyStatus",
    droneModel = "droneModel",
    gimbal = "gimbal",
    sensorVector = "sensorVector",
    droneRoute = "droneRoute",
    estimatedRoute = "estimatedRoute",
    estimatedGimbalVector = "estimatedGimbalVector",
    requestedLocation = "requestedLocation",
    requestedAzimuth = "requestedAzimuth",
    requestedLocationUpdate = "requestedLocationUpdate",
    requestedAzimuthUpdate = "requestedAzimuthUpdate",
    maxLegLength = "maxLegLength",
    releasedTaskId = "releasedTaskId",
    isOnGnd = "isOnGnd",
    rateOfClimb = "rateOfClimb",
    energyPerSecondForClimb = "energyPerSecondForClimb",
    rateOfLanding = "rateOfLanding",
    timeToBeReplaced = "timeToBeReplaced",
    replacementRhBat = "replacementRhBat",
    takeoffToCorridorPoint = "takeoffToCorridorPoint",
    rs_mode = "rs_mode",
    onBoardMissionStatus = "onBoardMissionStatus",
    prev_02_05_position = "prev_02_05_position",
    launcherAbsHeight = "launcherAbsHeight",
    launcherPoint = "launcherPoint",
    landAbsHeight = "landAbsHeight",
    externalTaskId = "externalTaskId",
    minAltFromLand = "minAltFromLand",
    landingLocation = "landingLocation",
    emergencyLocation = "emergencyLocation",
    landingPointId = "landingPointId",
    slope = "slope",
    dtmRoute = "dtmRoute",
    takeoffASLHeight = "takeoffASLHeight",
    isChangedHome = "isChangedHome",
    takeoffHeight_ATP = "takeoffHeight_ATP",
    isAGL = "isAGL",
    emergencyTelemetry = "emergencyTelemetry",
    emergencyTelemetryForShow = "emergencyTelemetryForShow",
    regularTelemetryForShow = "regularTelemetryForShow",
    emergencyNetworkIds = "emergencyNetworkIds",
    emergencyCommands = "emergencyCommands",
    last_change_time = "last_change_time",
    podId = "podId",
    algorithmStatus = "algorithmStatus",
    isTemporaryManual = "isTemporaryManual",
    isTemporaryLanding = "isTemporaryLanding",
    flightCommandServiceStatus = "flightCommandServiceStatus",
    capsuleId = "capsuleId",
    externalServices = "externalServices",
    sensorAGL = "sensorAGL",
    wayPointComplex_ob_version = "wayPointComplex_ob_version",
    wayPointComplex_ws_version = "wayPointComplex_ws_version",
    flightId = "flightId",
    taskType = "taskType",
    extrapolationLocation = "extrapolationLocation",
    location_ELS = "location_ELS",
    externalLocationData = "externalLocationData",
    lockedForRH = "lockedForRH",
    replaced = "replaced",
    onRhRequest = "onRhRequest",
    allocateProcess = "allocateProcess",
    routeLocation_CARTESIAN2 = "routeLocation_CARTESIAN2",
    isForceRH = "isForceRH",
    isIgnoreLockedForRH = "isIgnoreLockedForRH",
    sensorStatus = "sensorStatus",
    wtsaypointsPatternStatus = "wtsaypointsPatternStatus",
    isNoGPSFlight = "isNoGPSFlight"
}
