import * as WebSocket from 'ws';
import { ALS_WS_API } from '../../../../../../classes/dataClasses/api/api_enums';
import { MAP } from '../../../../../../classes/typings/all.typings';
declare type WS_CONNECTION = {
    ws: WebSocket;
    token: string;
};
export declare class SocketServer {
    private static instance;
    webSocketServer: any;
    externalSortConfig: MAP<MAP<Function>>;
    websocketClients: WS_CONNECTION[];
    constructor();
    private removeListener;
    private setServer;
    private disconnect;
    private addToSortConfig;
    private listen;
    emit: (room: ALS_WS_API, data: any) => void;
    private log;
    static setServer: (server: any) => void;
    static addToSortConfig: (callbacksConfig: MAP<Function>) => void;
    static emit: (room: ALS_WS_API, data: any) => void;
}
export {};
