export declare class SocketIo {
    webSocket: any;
    private config;
    constructor(projConf: any, server: any);
    private listen;
    private static keepAlive;
    emit: (room: string, data: any) => void;
}
