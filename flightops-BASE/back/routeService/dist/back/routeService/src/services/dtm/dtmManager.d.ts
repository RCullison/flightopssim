import { ASYNC_RESPONSE, COMPUTE_ROUTE_DTM, ROUTE_DTM, COMPUTE_ROUTE_BYPASS_RELIEF, POINT3D, POINT, COMPUTE_ROUTE_REQUEST, DTM_ROUTE_FULL_DATA, DTM_GRAPH, DTM_GRAPH_REQUEST } from '../../../../../classes/typings/all.typings';
export declare class DtmManager {
    private static instance;
    private constructor();
    private computeRouteDtmWith_Obstacle;
    private addBypassRelief;
    private buildGraphFromRoute;
    private validateWithMatrixHeight;
    private addGroundPointsHeight;
    private addDroneHeight;
    private computeBypassRelief;
    static computeRouteDtmWith_Obstacle: (requestData: COMPUTE_ROUTE_DTM) => Promise<ASYNC_RESPONSE<ROUTE_DTM>>;
    static addBypassRelief: (requestData: COMPUTE_ROUTE_BYPASS_RELIEF) => Promise<ASYNC_RESPONSE<DTM_ROUTE_FULL_DATA>>;
    static computeBypassRelief: (requestBody: COMPUTE_ROUTE_REQUEST, route: (POINT | POINT3D)[]) => Promise<ASYNC_RESPONSE<DTM_ROUTE_FULL_DATA>>;
    static buildGraphFromRoute: (request: DTM_GRAPH_REQUEST) => Promise<ASYNC_RESPONSE<DTM_GRAPH>>;
}
