import { LOG_LEVEL } from "../../../classes/typings/all.typings";
export declare class SocketLoggerClient {
    private static projConf;
    private static webSocket;
    constructor();
    static updateProjConf(projConf: any): void;
    static emit(serviceName: 'node.js' | 'CPP', logLevel: LOG_LEVEL, data: any): void;
    static connect(): void;
}
