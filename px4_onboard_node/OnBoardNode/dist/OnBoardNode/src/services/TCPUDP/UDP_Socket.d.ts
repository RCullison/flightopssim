import { ASYNC_RESPONSE } from "../../../../classes/typings/all.typings";
export declare class UDP_Socket {
    private static instance;
    private socket;
    private getOpenedSocket;
    private createSocket;
    private send;
    static getOpenedSocket: () => any;
    static send: (message: Object | string, port: number, host: string) => Promise<ASYNC_RESPONSE<any>>;
}
