export declare class ClientUDP {
    private static instance;
    projConf: any;
    private constructor();
    private listen;
    private send;
    private sendJoystick;
    private sendUDP;
    private sendUDPWithoutCheck;
    static listen: (projConf: any) => void;
    static send: (data: string, portUDP: number, hostUDP: string, cb: Function) => void;
    static sendUDP: (data: string, portUDP: number, hostUDP: string, cb: Function) => void;
    static sendUDPWithoutCheck: (data: string, portUDP: number, hostUDP: string, cb: Function) => void;
    static sendJoystick: (data: string, portUDP: number, hostUDP: string, cb: Function) => void;
}
