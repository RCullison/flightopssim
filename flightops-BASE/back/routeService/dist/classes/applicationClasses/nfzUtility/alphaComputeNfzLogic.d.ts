import { AIR_VEHICLE_TYPES, DYNAMIC_NFZ_FROM_ROUTE, NFZ_DATA } from "../../typings/all.typings";
import { IComputeNfz } from './IComputeNfz';
export declare class AlphaComputeNfzLogic implements IComputeNfz {
    type: AIR_VEHICLE_TYPES;
    constructor();
    computeRouteNfzData: (createData: DYNAMIC_NFZ_FROM_ROUTE, maxAlt?: number) => NFZ_DATA;
}
