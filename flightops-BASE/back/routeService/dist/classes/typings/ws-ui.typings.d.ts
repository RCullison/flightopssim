export { AIR_VEHICLE_STATUS, AIRVEHICLE_UI_DATA, AIR_VEHICLE_MODE } from './all.typings';
export declare enum NOTIFICATION_TYPE {
    success = "success",
    error = "error",
    info = "info",
    warning = "warning"
}
export declare type NOTIFICATION = {
    type?: NOTIFICATION_TYPE;
    message: string;
    title: string;
};
export declare type ACK_MESSAGES_DATA = {
    time: string;
    name: string;
    ackData: string;
};
export declare enum ZERO_ONE {
    zero = 0,
    one = 1
}
export declare enum LOITER_START_POSITION {
    North = 0,
    South = 1,
    West = 2,
    East = 3,
    Nearest = 4
}
export declare type HOT_POINT_PARAMETERS = {
    latitude: number;
    longitude: number;
    altitude?: number;
    radius?: number;
    angular_speed?: number;
    is_clockwise?: ZERO_ONE;
    start_point?: LOITER_START_POSITION;
    yaw_mode?: ZERO_ONE;
};
