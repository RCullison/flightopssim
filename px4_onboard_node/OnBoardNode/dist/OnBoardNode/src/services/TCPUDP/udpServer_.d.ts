import { MAP } from "../../../../classes/typings/all.typings";
export declare class UdpServer_ {
    private static instance;
    private server;
    private port;
    externalSortConfig: MAP<MAP<Function>>;
    constructor();
    private setServer;
    private callExternalCallbacks;
    private emit;
    private addToSortConfig;
    private socketConfig;
    static setServer: () => void;
    static emit: (data: any) => void;
    static addToSortConfig: (callbacksConfig: MAP<Function>) => void;
}
