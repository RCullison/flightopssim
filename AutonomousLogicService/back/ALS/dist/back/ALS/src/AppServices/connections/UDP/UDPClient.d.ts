export declare class UdpClient {
    private static instance;
    private projConf;
    port: number;
    host: string;
    isRunOnOboard: boolean;
    private constructor();
    private listen;
    private send;
    static send: (objToSend: Object, port?: number, host?: string) => void;
    static listen: (projConf: any) => void;
}
