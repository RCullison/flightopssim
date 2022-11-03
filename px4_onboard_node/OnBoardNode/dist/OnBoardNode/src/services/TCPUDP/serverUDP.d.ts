import { SocketIo } from "../../websocket/socket.io";
import { ACCURATE_VISUAL_LANDING, ALGORITHM_STATUS, ASYNC_RESPONSE, GEOPOINT, MAP, SEND_STATUS } from "../../../../classes/typings/all.typings";
import { ACTION_TYPE, COPTER_TYPE, FLIGHT_MODE_ARDUPILOT, FLIGHT_MODE_PX4, FLIGHT_MODE_PX4_ENUM, TELEMETRY_PX4, TELEMETRY_SERVICE_DATA } from "../../../../classes/typings/ob-node-types";
import { OWNER } from "../../../../classes/typings/ds.typings";
import { AIR_VEHICLE_ID } from "./../../../../classes/typings/all.typings";
export declare class UdpServer {
    private static instance;
    private static isRCTouched;
    private static isVirtualRCTouched;
    private static _telemetryData;
    private static telemetry_now;
    private static telemetryConfig;
    private socketio;
    private projConf;
    static copterType: COPTER_TYPE;
    private static currentFlightMode;
    private static isArmed;
    private static isTelemetryTrueNotation;
    private static isCalculatedAltAfterChangeHome;
    private static changeHomeTimeout;
    externalSortConfig: MAP<MAP<Function>>;
    private constructor();
    private updatedTelemetry;
    private static lastTimeUpdateArm;
    private addToSortConfig;
    private static update;
    private static sendWinchTelemetry;
    private static sendTelemetryToMoveXY;
    private static sendUdpToALS;
    private static isAllowSendRequests;
    static get telemetryData(): TELEMETRY_SERVICE_DATA;
    private static recousiveUpdate;
    private static updateTemetry4Send2FCS;
    private static getHeightAboveTakeoff;
    static testPercent: number;
    static minPercent: number;
    private static getEnergyPercent;
    private static getControl;
    private static getDistanceFromHome;
    private static getGpsHealth;
    private static getHeading;
    private static getVelocity;
    private static getWaypointsStatus;
    private static getMissionStatus;
    private listen;
    private sendToWS;
    static getTelemetryData(): TELEMETRY_SERVICE_DATA;
    static getTelemetryNow(): TELEMETRY_PX4;
    static getFlightMode(): FLIGHT_MODE_PX4 | FLIGHT_MODE_ARDUPILOT;
    static getFlightModeEnum(): FLIGHT_MODE_PX4_ENUM;
    static setTelemetryGimbal(yaw: number, roll: number, pitch: number): void;
    static setIsOnMissionLanging(bool: boolean): boolean;
    static saveLastHome: (obj: ACCURATE_VISUAL_LANDING, isTakeoff: boolean) => Promise<ASYNC_RESPONSE>;
    static sendSetHomeToPixhawk: (longitude: number, latitude: number, pxHomeAlt: number, isAllow: any) => Promise<ASYNC_RESPONSE>;
    static updateHome: (homePosition: GEOPOINT, landASLHeight: number, isAllow: any, isUpdateHomeInTelemetryToo: boolean) => Promise<ASYNC_RESPONSE>;
    static getHomePointDiff: () => number;
    static setLastHome: (lastHome: any) => void;
    static setMatrixDataCreationTime(time: number): void;
    static setAllowedId(id: AIR_VEHICLE_ID): void;
    static setWaypointsStatus(status: ACTION_TYPE): void;
    static setKeepAlive(keepAlive: number): void;
    static setMinEnergyRTH(minEnergy: number): void;
    static setOwner(owner: OWNER): void;
    static getOwner(): OWNER;
    static setIsTemporaryManual(ownerTemp: boolean): void;
    static getCurTelemetryOriginal(): TELEMETRY_PX4;
    static getIsRCTouched(): boolean;
    static getIsVirtualRCTouched(): boolean;
    static get getModeLand(): FLIGHT_MODE_PX4 | FLIGHT_MODE_ARDUPILOT;
    static get getModeTakeoff(): FLIGHT_MODE_PX4 | FLIGHT_MODE_ARDUPILOT;
    static get getModeHold(): FLIGHT_MODE_PX4 | FLIGHT_MODE_ARDUPILOT;
    static get getModeBrake(): FLIGHT_MODE_PX4 | FLIGHT_MODE_ARDUPILOT;
    static get getModeMission(): FLIGHT_MODE_PX4 | FLIGHT_MODE_ARDUPILOT;
    static getLastTelemetryTimestamp: () => number;
    static getNextPointIndex: () => number;
    static switchVirtualRC: (isOn: boolean) => void;
    static setAirVechicleStatus(status: ALGORITHM_STATUS): void;
    static clearWaypointsPoints(): void;
    static updateMoveXYTelemetry: (status: SEND_STATUS) => void;
    static listen: (projConf: any, socketio: SocketIo) => void;
    static addToSortConfig: (callbacksConfig: MAP<Function>) => void;
}
