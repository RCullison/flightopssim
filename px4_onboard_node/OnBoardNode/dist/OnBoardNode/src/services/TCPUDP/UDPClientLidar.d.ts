import { MAP } from "../../../../classes/typings/all.typings";
export declare class UDPClientLidar {
    private static instance;
    externalSortConfig: MAP<MAP<Function>>;
    constructor();
    emit: (obj: {}) => Promise<import("../../../../classes/typings/all.typings").ASYNC_RESPONSE<any>>;
    listen: () => void;
    private addToSortConfig;
    private startKeepAlive;
    static addToSortConfig: (callbacksConfig: MAP<Function>) => void;
}
