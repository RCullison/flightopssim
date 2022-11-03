export declare enum BOOLEAN_NUMBER {
    true = 1,
    false = 0
}
export declare enum EXTERNAL_OWNER {
    gsc = "GSC",
    safe = "Safe",
    emergency = "Emergency"
}
export declare enum MISSION_STATUS {
    onMission = 0,
    observing = 1
}
export declare enum OWNER_TYPE {
    droneService = "droneService",
    onBoard = "onBoard",
    gcs = "gcs",
    emergency = "emergency",
    safe = "safe",
    RTH = "RTH",
    joystick = "joystick"
}
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
export declare enum ACTION_FOR {
    Vehicle = "Vehicle",
    Gimbal = "Gimbal",
    Camera = "Camera",
    Sensor = "Sensor",
    Drop = "Drop",
    IR_Lock = "IR_Lock",
    Winch = "Winch",
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
    Sensor4 = "Sensor4"
}
export declare enum GIMBAL_TYPES {
    ThirdEye = "ThirdEye",
    Ronin = "Ronin",
    Dji = "Dji",
    IG = "IG"
}
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
export declare enum YAW_REF {
    Body = "Body",
    North = "North"
}
export declare enum TASK_TYPE {
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
    ForceRoute = "ForceRoute"
}
export declare enum DELIVERY_TYPE {
    winch = "winch",
    drop = "drop"
}
export declare enum OBJ_VALUE {
    blank = "blank"
}
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
export declare enum SEVERITY {
    ERROR = "ERROR",
    INFO = "INFO"
}
export declare enum SERVICE {
    WS = "WS",
    FCS = "FCS"
}
export declare enum RESULT {
    SUCCESS = "SUCCESS",
    FAIL = "FAIL"
}
export declare enum TARGET_ACTION {
    create = "create",
    release = "release"
}
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
export declare enum EMITTER {
    blank = "blank",
    AMS = "AMS",
    DBS = "DBS",
    FCS = "FCS",
    GCS = "GCS",
    RS = "routeService",
    WS = "webServer",
    GW = "GW",
    userMessages = "userMessages"
}
export declare enum COLORS {
    black = "#000000",
    white = "#ffffff",
    red = "#ff0000",
    lightRed = "#f66d6d",
    yellowDark = "#ffc000",
    green = "#92d050",
    lightBlue = "#59b1f1",
    yellow_03 = "rgba(255, 255, 0, 0.3)",
    red_07 = "rgba(255, 0, 0, 0.7)",
    orange_03 = "rgba(255, 128, 0, 0.3)"
}
export declare enum RC_MODE {
    manual = "#manual",
    auto = "auto"
}
export declare enum ACTION_DIRECTIONS {
    clockwise = "clockwise",
    counterClockwise = "counterClockwise"
}
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
    relativeActionId = "relativeActionId"
}
export declare enum WAYPOINT_ACTION {
    Stop = "Stop",
    Pause = "Pause",
    Resume = "Resume",
    ChangeAltitude = "ChangeAltitude",
    Rotate = "Rotate",
    DropPackage = "DropPackage"
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
    none = "none"
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
export declare enum FLIGHT_STATUS {
    NotActive = "NotActive",
    TakeOff = "TakeOff",
    OnMission = "OnRoute",
    ReturnHome = "RH",
    Landing = "Land",
    Hover = "Hover"
}
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
    int8 = "int8"
}
export declare enum COMMAND_ENUM {
    land = 0,
    returnHome = 1,
    flyTo = 2,
    telemetry = 3
}
export declare enum TECHNICAL_STATUS {
    ok = "OK",
    noComm = "NoComm"
}
export declare enum CONTROLLED_BY {
    RC = "RC",
    Onboard = "Onboard",
    C2 = "C2",
    Joystick = "Joystick"
}
export declare enum LOG_TYPE {
    percent = "%",
    volt = "V"
}
export declare enum LOG_TYPE {
    success = "success",
    error = "error",
    info = "info",
    warning = "warning",
    debug = "debug",
    trace = "trace",
    fatal = "fatal"
}
export declare enum typesUDP {
    joystick = "joystick",
    commandService = "commandService",
    rthService = "rthService",
    zoom = "zoom",
    none = "none",
    AGCS = "AGCS"
}
export declare enum SEND_UDP_ACTIONS {
    GIMBAL = "gimbal",
    FORCE = "force"
}
