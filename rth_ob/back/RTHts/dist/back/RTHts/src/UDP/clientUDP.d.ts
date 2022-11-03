import { FORCE_DATA_NODE } from "../../../../classes/typings/all.typings";
export declare class ClientUDP {
    private static instance;
    projConf: any;
    private constructor();
    private listen;
    private send;
    private sendUDP;
    static listen: (projConf: any) => void;
    static send: (data: FORCE_DATA_NODE, portUDP: number, hostUDP: string, cb: Function) => void;
    static sendUDP: (data: string, portUDP: number, hostUDP: string, cb: Function) => void;
}
