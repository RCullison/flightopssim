import { MAP } from "../../../../../classes/typings/all.typings";
export declare class ClientUDP4GimbalTele {
    private static instance;
    private portUDPserver;
    private hostUDPserver;
    private init;
    externalSortConfig: MAP<MAP<Function>>;
    private startKeepAlive;
    private send;
    private listen;
    private addToSortConfig;
    static init: (servicesConf: any) => void;
    static addToSortConfig: (callbacksConfig: MAP<Function>) => void;
}
