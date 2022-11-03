export declare class SocketIo {
    webSocket: any;
    config: {};
    constructor(server: any);
    private listen;
    emit: (room: string, data: any) => void;
}
