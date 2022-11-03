export declare class MoveXYStatusManager {
    private static instance;
    private ws;
    private interval;
    private projConf;
    private constructor();
    private listenToStatus;
    static listen: (projConf: any) => void;
}
