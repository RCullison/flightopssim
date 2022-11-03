import { TELEMETRY_SERVICE_DATA } from "../../typings/ob-node-types";
export declare class TelemetryDatataForDS {
    static data: TELEMETRY_SERVICE_DATA;
    static config: {
        gimbal: string;
        height_above_takeoff: string;
        gps_health: string;
        heading: string;
        velocity: string;
        gps_position: string;
        state: string;
        timeOut4ownerOnboardInSec: string;
        tolerance: string;
        wayPoints: string;
        keepAlive: string;
        keepAliveTelemetryService: string;
        keepAliveRequestService: string;
        siteName: string;
        last_change_time: string;
        lastHome: string;
    };
}
