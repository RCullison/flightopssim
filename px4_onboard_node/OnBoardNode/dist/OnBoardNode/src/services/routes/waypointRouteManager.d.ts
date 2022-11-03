import { ASYNC_RESPONSE } from "./../../../../classes/typings/all.typings";
export declare class WayPointRouteManager {
    private static instance;
    private name;
    private constructor();
    private listen;
    private routeWayPointAction;
    private startMission;
    private pauseMission;
    private stopMission;
    private onStopMission;
    private routeWayPointInfo;
    private routeWayPointUpload;
    private routeWayPointUploadComplex;
    private routeWayPointSetSpeed;
    private checkFieldsAndSendResponse;
    routers: {};
    static listen: (router: any) => void;
    static onStopMission: () => Promise<ASYNC_RESPONSE>;
}
