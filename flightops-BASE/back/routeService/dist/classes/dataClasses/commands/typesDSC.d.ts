import { COMMAND_ENUM } from '../../typings/all.typings';
export declare enum COMMAND_FIELD_NAME {
    command = "command"
}
export declare type COMMAND = {
    [COMMAND_FIELD_NAME.command]: COMMAND_ENUM;
};
export declare type IMEI = {
    imei: string;
};
export declare type FORMAT_DATA_SATELLITE = {
    buffer: string;
};
export declare type LAND_SATELLITE = LAND & COMMAND;
export declare type RH_SATELLITE = RH & COMMAND;
export declare type RH = IMEI & {
    point: number;
    ackCount: number;
};
export declare type LAND = IMEI & {
    point: number;
    ackCount: number;
};
export declare type SIMPLE_LAND = IMEI & {
    ackCount: number;
};
export declare type SIMPLE_LAND_SATELLITE = SIMPLE_LAND & IMEI & COMMAND;
export declare type FLY_TO = IMEI & {
    lon: number;
    lat: number;
    height: number;
    ackCount: number;
};
export declare type FLY_TO_SATELLITE = FLY_TO & COMMAND;
export declare type ROCK_SEVEN_DRONE_TELEMETRY = {
    modemImei: string;
    battery_percent: number;
    battery_voltage: number;
    height_above_takeoff: number;
    gps_health: number;
    velocityHorizontal: number;
    velocityVertical: number;
    heading: number;
    lat: number;
    lon: number;
    last_change_time: number;
    ack: number;
    ackCount: number;
    mask: number;
};
export declare type ROCK_SEVEN_DRONE_TELEMETRY_DE_MASKED = {
    modemImei: string;
    battery_percent: number;
    battery_voltage: number;
    height_above_takeoff: number;
    gps_health: number;
    velocityHorizontal: number;
    velocityVertical: number;
    heading: number;
    lat: number;
    lon: number;
    last_change_time: number;
    ack: number;
    ackCount: number;
    mask: ROCK_SEVEN_DRONE_TELEMETRY_SATELLITE_MASK;
};
export declare type ROCK_SEVEN_DRONE_TELEMETRY_SATELLITE_MASK = {
    CPPStatus: boolean;
    RTHStatus: boolean;
    nodeOBStatus: boolean;
    isArmedStatus: boolean;
    cam0Status: boolean;
    cam1Status: boolean;
    ackStatus: boolean;
    reserv2: boolean;
};
export declare type NETWORK_FOR_SHOW = {
    timer?: string;
    network?: boolean;
    waitingForNetwork?: boolean;
    timeline: number;
};
export declare type ROCK_SEVEN_DRONE_TELEMETRY_UI = ROCK_SEVEN_DRONE_TELEMETRY_DE_MASKED & NETWORK_FOR_SHOW;
export declare type ROCK_SEVEN_DRONE_TELEMETRY_SATELLITE = ROCK_SEVEN_DRONE_TELEMETRY & COMMAND;
export declare type DATA_4_SATELLITE = {
    compressed: string;
    imei: string;
};
