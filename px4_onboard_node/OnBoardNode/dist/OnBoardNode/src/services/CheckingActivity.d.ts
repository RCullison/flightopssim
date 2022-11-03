export declare class CheckingActivity {
    private static instance;
    projConf: any;
    private listen;
    private position;
    private lostOnboardControl;
    private isAllowRCMode__;
    private setProjConf;
    private updateParams;
    private isAllowRCMode;
    static setProjConf: (projConf: any) => void;
    static isAllowRCMode: () => boolean;
    static listen: (projConf: any) => void;
}
