export declare class HotpointRouteManager {
    private static instance;
    private constructor();
    private listen;
    private routeHotPointInfo;
    private routeHotPointUpload;
    private routeHotPointUpdateYawRate;
    private routeHotPointAction;
    private checkFieldsAndSendResponse;
    routers: {};
    static listen: (router: any) => void;
}
