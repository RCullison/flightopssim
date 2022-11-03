import { COLLISION_ALERT, GET_FINAL_FLIGHT_PLAN_RESPONSE, POI, REQUEST_STATE_ENUM } from '../../../typings/all.typings';
export declare class GetFinalFlightPlanApprovalResponse {
    requestState: REQUEST_STATE_ENUM;
    planId: string;
    collisions: Array<Array<COLLISION_ALERT>>;
    path: Array<POI>;
    config: {
        requestState: string;
        planId: string;
        collisions: string;
        path: string;
    };
    constructor(obj: any);
    update: (obj: GET_FINAL_FLIGHT_PLAN_RESPONSE) => void;
    toJsonForSave: () => GET_FINAL_FLIGHT_PLAN_RESPONSE;
    toJsonForUI: () => GET_FINAL_FLIGHT_PLAN_RESPONSE;
    toJsonForDroneService: () => GET_FINAL_FLIGHT_PLAN_RESPONSE;
}
