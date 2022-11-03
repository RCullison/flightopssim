import { ASYNC_RESPONSE, COMPUTE_ROUTE_DIRECTION_REQUEST, ID_TYPE, POINT, POINT3D, ROUTE, ROUTE_AIR_VEHICLE } from '../../../../../classes/typings/all.typings';
export declare class FindRouteUtility {
    private static instance;
    private constructor();
    private findNearestPointOutsideNFZ;
    private computeRouteFinish_floating;
    private computeRouteFinish_floating_recursive;
    private computeRoute_genery_recursive;
    computeRouteFinish_floatingWithDirection: (requestBody: COMPUTE_ROUTE_DIRECTION_REQUEST) => Promise<ASYNC_RESPONSE<ROUTE>>;
    private computeRouteStartFinish_floating;
    computeRouteStartFinish_floatingWithDirection: (requestBody: COMPUTE_ROUTE_DIRECTION_REQUEST) => Promise<ASYNC_RESPONSE<ROUTE>>;
    prepareRoute: (airVehicleParameters: ROUTE_AIR_VEHICLE, startLocation: POINT3D, targetPoint: POINT3D) => ASYNC_RESPONSE<{
        route: POINT3D[];
    }>;
    private computeStartFindPointCartographic;
    private computeRouteToPoint;
    private checkIfNeedToContinue;
    private checkIfNeedToContinue_new;
    private computeRouteToMatrixPoint;
    private computeRouteDirectionToPoint;
    private choiceNearestPoint;
    private checkVerticalLines;
    private verticalLinesCheckProcess;
    private checkIsInRange;
    private checkHorizontalLines;
    private horizontalLinesCheckProcess;
    static computeRouteFinish_floating: (requestBody: COMPUTE_ROUTE_DIRECTION_REQUEST) => Promise<ASYNC_RESPONSE<ROUTE>>;
    static computeRouteFinish_floatingWithDirection: (requestBody: COMPUTE_ROUTE_DIRECTION_REQUEST) => Promise<ASYNC_RESPONSE<ROUTE>>;
    static computeRouteStartFinish_floating: (requestBody: COMPUTE_ROUTE_DIRECTION_REQUEST) => Promise<ASYNC_RESPONSE<ROUTE>>;
    static computeRouteStartFinish_floatingWithDirection: (requestBody: COMPUTE_ROUTE_DIRECTION_REQUEST) => Promise<ASYNC_RESPONSE<ROUTE>>;
    static findNearestPointOutsideNFZ: (allowedId: ID_TYPE, point: (POINT | POINT3D), height: number) => ASYNC_RESPONSE<POINT>;
    static prepareRoute: (airVehicleParameters: ROUTE_AIR_VEHICLE, startLocation: POINT3D, targetPoint: POINT3D) => ASYNC_RESPONSE<{
        route: POINT3D[];
    }>;
    static computeRouteFinish_floating_recursive: (requestBody: COMPUTE_ROUTE_DIRECTION_REQUEST, callback: Function, isNeedToRecompute: boolean, new_ASL_Max?: number) => void;
    static computeRoute_genery_recursive: (requestBody: COMPUTE_ROUTE_DIRECTION_REQUEST, callback: Function, isNeedToRecompute: boolean, new_ASL_Max?: number) => void;
}
