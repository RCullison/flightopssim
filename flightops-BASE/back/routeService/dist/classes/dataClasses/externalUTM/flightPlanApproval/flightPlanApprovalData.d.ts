import { Poi } from '../poiData';
import { GET_FLIGHT_PLAN_APPROVAL } from '../../../typings/all.typings';
export declare class GetFlightPlanApproval {
    pid: string;
    depT: string;
    path: Array<Poi>;
    config: {
        pid: string;
        depT: string;
        path: string;
    };
    constructor(obj: any);
    update: (obj: GET_FLIGHT_PLAN_APPROVAL) => void;
    toJsonForSave: () => GET_FLIGHT_PLAN_APPROVAL;
    toJsonForUI: () => GET_FLIGHT_PLAN_APPROVAL;
    toJsonForDroneService: () => GET_FLIGHT_PLAN_APPROVAL;
}
