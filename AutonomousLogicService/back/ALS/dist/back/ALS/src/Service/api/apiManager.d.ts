export declare class ApiManager {
    private static instance;
    constructor();
    private listen;
    private uploadTask;
    private uploadAndStartTask;
    private startTask;
    private pauseTask;
    private resumeTask;
    private stopTask;
    private externalInput;
    private approvalAction;
    private response4Action;
    private getExternalInputArr;
    private getMaxExternalInputArrLength;
    private setMaxExternalInputArrLength;
    private getAlgorithmStatus;
    private getAlgorithmData;
    private getgetCurrentTask;
    private testLog;
    private log;
    routers: {};
    static listen: (router: any) => any;
}
