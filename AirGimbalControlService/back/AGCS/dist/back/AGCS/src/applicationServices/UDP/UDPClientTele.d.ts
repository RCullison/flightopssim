import { MAP } from "../../../../../classes/typings/all.typings";
export declare class UDPClientTelemetry {
    private static instance;
    private config;
    private portUDPserver;
    private hostUDPserver;
    externalSortConfig: MAP<MAP<Function>>;
    private init;
    emit: (obj: {}) => void;
    listen: () => void;
    private addToSortConfig;
    private startKeepAlive;
    static init: (config: any) => void;
    static addToSortConfig: (callbacksConfig: MAP<Function>) => void;
}
