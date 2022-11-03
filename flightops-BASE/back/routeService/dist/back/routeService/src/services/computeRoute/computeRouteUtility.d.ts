import { ASYNC_RESPONSE, COMPUTE_ROUTE, COMPUTE_ROUTE_DIRECTION_REQUEST, COMPUTE_ROUTE_REQUEST } from '../../../../../classes/typings/all.typings';
export declare class ComputeRouteUtility {
    private static instance;
    private constructor();
    private computeRoute;
    private computeRoutePromise;
    private computeDirectionRoute;
    private computeDirectionRoute_floating;
    private convertToShirtLags;
    private computeNewPointsForShirtLeg;
    private simplifyPath_3D_newLogic;
    private cartographicToMatrix;
    private convertRouteToCartographic;
    private logStatus;
    static computeRoute: (pointsForRoute: COMPUTE_ROUTE_REQUEST, heightASL: number) => COMPUTE_ROUTE;
    static computeRoutePromise: (pointsForRoute: COMPUTE_ROUTE_REQUEST, heightASL: number) => Promise<ASYNC_RESPONSE<COMPUTE_ROUTE>>;
    static computeDirectionRoute: (pointsForRoute: COMPUTE_ROUTE_DIRECTION_REQUEST) => COMPUTE_ROUTE;
    static computeDirectionRoute_floating: (pointsForRoute: COMPUTE_ROUTE_DIRECTION_REQUEST) => COMPUTE_ROUTE;
}
