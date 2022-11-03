import { MAP, SOCKET_IO_CLIENT_TYPES } from '../../../../../../classes/typings/all.typings';
export declare class WebSocketSimpleClient {
    private static instance;
    sockets: {
        [socketIdentifier: string]: any;
    };
    sockets_status: {
        [type: string]: any;
    };
    toCheckInInitSocket: MAP<boolean>;
    externalSortConfig: {
        [type: string]: Function;
    };
    private constructor();
    private init;
    private checkConnectionToClient;
    private connectToSocketServer;
    private initSocket;
    private connectToWebSocket;
    private addToSortConfig;
    private listenExternalSortConfig;
    private listen;
    emit: (type: SOCKET_IO_CLIENT_TYPES, room: string, data: any) => void;
    private log;
    static init: () => void;
    static connectToWebSocket: (socketIdentifier: SOCKET_IO_CLIENT_TYPES, url: string) => void;
    static addToSortConfig: (socketIdentifier: string, url: string, callbacksConfig: MAP<Function>) => void;
    static emit: (type: SOCKET_IO_CLIENT_TYPES, room: string, data: any) => void;
}
