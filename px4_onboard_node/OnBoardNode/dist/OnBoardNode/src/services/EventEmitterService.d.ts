import { TELEMETRY_SERVICE_DATA } from "../../../classes/typings/ob-node-types";
export declare class EventEmitterService {
    private static instance;
    projConf: any;
    private listen;
    private subscribe;
    private publish;
    config: {
        telemetry: string;
        waitingArrivePoints: string;
        telemetrySource: string;
    };
    private getConfig;
    static config: () => {
        telemetry: string;
        waitingArrivePoints: string;
        telemetrySource: string;
    };
    static publish: (name: string, data: TELEMETRY_SERVICE_DATA) => void;
    static subscribe: (name: string, cb: any) => any;
    static listen: (projConf: any) => void;
}
