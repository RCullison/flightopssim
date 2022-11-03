import { TELEMETRY_PX4, TELEMETRY_SERVICE_DATA } from "./../../classes/typings/ob-node-types";
export declare class TelemetryServiceData {
    static data: TELEMETRY_SERVICE_DATA;
    static config: {
        battery_state: string;
        gimbal: string;
        height_above_takeoff: string;
        gps_health: string;
        heading: string;
        velocity: string;
        gps_position: string;
        last_change_time: string;
        lastHome: string;
        state: string;
        wayPoints: string;
        keepAlive: string;
        allowedId: string;
        matrixDataCreationTime: string;
    };
    static telemetryNow: TELEMETRY_PX4;
}
