import { IComputeNfz } from './IComputeNfz';
import { AIR_VEHICLE_TYPES, DYNAMIC_NFZ_FROM_ROUTE, NFZ_DATA } from '../../typings/all.typings';
export declare class DjiComputeNfzLogic implements IComputeNfz {
    type: AIR_VEHICLE_TYPES;
    constructor();
    computeRouteNfzData: (createData: DYNAMIC_NFZ_FROM_ROUTE, maxAlt?: number) => NFZ_DATA;
    private filterRoute;
}
