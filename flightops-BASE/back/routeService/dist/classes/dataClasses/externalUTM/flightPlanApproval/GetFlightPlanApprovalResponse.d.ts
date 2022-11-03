import { COLLISION_ALERT, GET_FLIGHT_PLAN_APPROVAL_RESPONSE, POI, REQUEST_STATE_ENUM } from '../../../typings/all.typings';
export declare class GetFlightPlanApprovalResponse {
    requestState: REQUEST_STATE_ENUM;
    planId: string;
    collisions: Array<Array<COLLISION_ALERT>>;
    path: Array<POI>;
    config: {
        requestState: string;
        planId: string;
        collisions: string;
        pat: string;
    };
    constructor(obj: any);
    update: (obj: GET_FLIGHT_PLAN_APPROVAL_RESPONSE) => void;
    toJsonForSave: () => GET_FLIGHT_PLAN_APPROVAL_RESPONSE;
    toJsonForUI: () => GET_FLIGHT_PLAN_APPROVAL_RESPONSE;
    toJsonForDroneService: () => GET_FLIGHT_PLAN_APPROVAL_RESPONSE;
}
