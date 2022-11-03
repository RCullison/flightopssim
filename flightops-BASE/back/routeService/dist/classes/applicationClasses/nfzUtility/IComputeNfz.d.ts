import { AIR_VEHICLE_TYPES, DYNAMIC_NFZ_FROM_ROUTE, NFZ_DATA } from "../../typings/all.typings";
export interface IComputeNfz {
    type: AIR_VEHICLE_TYPES;
    computeRouteNfzData(createData: DYNAMIC_NFZ_FROM_ROUTE, maxAlt: number): NFZ_DATA;
}
