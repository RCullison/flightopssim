import { MAP } from "../../../../../classes/typings/all.typings";
export declare class UDPClientForce {
    private static instance;
    private config;
    private portUDPserver;
    private hostUDPserver;
    externalSortConfig: MAP<MAP<Function>>;
    private init;
    private emit;
    listen: () => void;
    private addToSortConfig;
    static init: (config: any) => void;
    static addToSortConfig: (callbacksConfig: MAP<Function>) => void;
    static emit: (obj: {}) => Promise<import("../../../../../classes/typings/all.typings").ASYNC_RESPONSE<any>>;
}
