import { TELEMETRY_SERVICE_DATA } from "../../../classes/typings/ob-node-types";
export declare class SocketIOClient {
    socket: {};
    config: any;
    host: any;
    telemetryPort: any;
    telemetry: TELEMETRY_SERVICE_DATA;
    private static instance;
    private listen;
    private initConnection2Drone;
    private getTelemetry;
    static listen: (projConf: any) => void;
    static getTelemetry: () => TELEMETRY_SERVICE_DATA;
}
