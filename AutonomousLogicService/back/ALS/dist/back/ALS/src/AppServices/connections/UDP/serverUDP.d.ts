import { MAP } from '../../../../../../classes/typings/all.typings';
export declare class UdpServer {
    private static instance;
    externalSortConfig: MAP<MAP<Function>>;
    private listen;
    private callExternalCallbacks;
    addToSortConfig: (listener: string, callbacksConfig: MAP<Function>) => void;
    private log;
    static listen: () => void;
    static addToSortConfig: (listener: string, callbacksConfig: MAP<Function>) => void;
}
