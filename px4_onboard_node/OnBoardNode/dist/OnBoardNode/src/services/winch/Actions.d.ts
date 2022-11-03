import { ASYNC_RESPONSE } from "../../../../classes/typings/all.typings";
export declare class Actions {
    private static instance;
    projConf: any;
    private constructor();
    private listen;
    private doDeliver;
    private doReelUp;
    private doReelDown;
    private doFreewheel;
    private doLock;
    static listen: (projConf: any) => void;
    static doDeliver: () => Promise<ASYNC_RESPONSE>;
    static doReelUp: () => Promise<ASYNC_RESPONSE>;
    static doReelDown: () => Promise<ASYNC_RESPONSE>;
    static doFreewheel: () => Promise<ASYNC_RESPONSE>;
    static doLock: () => Promise<ASYNC_RESPONSE>;
}
