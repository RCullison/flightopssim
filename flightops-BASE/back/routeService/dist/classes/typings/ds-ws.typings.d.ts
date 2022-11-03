export declare enum POINT_PATTERN_ACTIONS {
    start = "start",
    stop = "stop"
}
export declare enum POINT_PATTERN_NAMES {
    rectangle = "rectanglePattern"
}
export declare type POINT_PATTERN_ACTION_REQUEST = {
    droneIp: string;
    action: POINT_PATTERN_ACTIONS;
    parameters?: {
        patternName: POINT_PATTERN_NAMES;
        patternParameters: POINT_PATTERN_PARAMETERS;
    };
};
export declare type POINT_PATTERN_PARAMETERS = {
    size: number;
    velocity: number;
};
