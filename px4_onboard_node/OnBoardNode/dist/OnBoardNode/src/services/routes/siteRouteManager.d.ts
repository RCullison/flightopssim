import { ASYNC_RESPONSE } from "./../../../../classes/typings/all.typings";
import { COMPUTE_ROUTE, FROM_TO, AIR_VEHICLE_ID } from "./../../../../classes/typings/all.typings";
export declare class SiteRouteManager {
    private static instance;
    private projConf;
    private constructor();
    private listen;
    private routeSiteSet;
    computeRoute: (points: FROM_TO<import("./../../../../classes/typings/all.typings").POINT3D | import("./../../../../classes/typings/all.typings").POINT>, allowedId: AIR_VEHICLE_ID) => Promise<ASYNC_RESPONSE<COMPUTE_ROUTE>>;
    routers: {};
    static listen: (router: any, projConf: any) => void;
    static computeRoute: (points: FROM_TO<import("./../../../../classes/typings/all.typings").POINT3D | import("./../../../../classes/typings/all.typings").POINT>, allowedId: AIR_VEHICLE_ID) => Promise<ASYNC_RESPONSE<COMPUTE_ROUTE>>;
}
